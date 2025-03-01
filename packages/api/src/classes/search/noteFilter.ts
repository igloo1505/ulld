import { prisma } from "@ulld/database/db";
import type { SerializeMdxConfig } from "@ulld/parsers/mdx/types";
import type { SearchAllParams } from "@ulld/utilities/types";
import { serverClient } from "../../trpc/serverClient";
import { MdxNote } from "../prismaMdxRelations/MdxNote";
import { ArrayUtilities } from "@ulld/utilities/utils/arrayUtilities";
import {
    mdxNoteWithParsedLatex,
    ParsedMdxOutput,
} from "../../schemas/search/parsing";
import { MdxNoteSummaryOutputWithMdxTransforms } from "../prismaMdxRelations/schemas/withMdxTransforms";
import type { Prisma } from "@ulld/database";
import { AppConfigSchemaOutput } from "@ulld/configschema/zod/main";
import { makeValidId } from "@ulld/utilities/identity";

type SortedResult = MdxNote & { sortRank?: number };

export interface IntriguingValueSummary {
    rootRelativePath: string;
    noteType: string;
    id: number;
    title: string;
    href: string;
    firstSync: Date;
    lastSync: Date;
    importantValues: number[];
}

export class NoteFilter implements Omit<SearchAllParams, "perPage" | "page"> {
    preParseNotes: MdxNote[] = [];
    notes: MdxNoteSummaryOutputWithMdxTransforms[] = [];
    perPage: number = 10;
    page: number = 1;
    query?: string;
    tags?: string[];
    totalFound: number = 0;
    categories?: string[];
    citations?: string[];
    tagRegex?: RegExp[];
    topics?: string[];
    subjects?: string[];
    equationId?: string;
    sequentialId?: string;
    skip: number = 0;
    remote: boolean = true;
    secondaryData: {
        topics: string[];
        subjects: string[];
        tags: string[];
    } = {
            topics: [],
            subjects: [],
            tags: [],
        };
    constructor(
        public type: string | "all",
        public params?: SearchAllParams,
        public serializeConfig?: SerializeMdxConfig,
    ) {
        this.type = makeValidId(this.type) // To match with parsing method applied while generating the appConfig
        if (params) {
            if (
                params.page !== undefined &&
                `${params.page}` === `${parseInt(params.page as string)}`
            ) {
                this.page = parseInt(params.page);
            }
            if (
                params.perPage !== undefined &&
                `${params.perPage}` === `${parseInt(params.perPage as string)}`
            ) {
                this.perPage = parseInt(params.perPage);
            }
            this.skip = (this.page - 1) * this.perPage;
            this.citations = params.citations
                ? Array.isArray(params.citations)
                    ? params.citations
                    : [params.citations]
                : [];
            this.categories = params.categories ? ArrayUtilities.beArray(params.categories) : undefined;
            this.tags = ArrayUtilities.beArray(params.tags || []);
            this.query = params.query;
            this.equationId = params.equationId;
            this.sequentialId = params.sequentialId;
            if (typeof params.remote !== undefined) {
                this.remote = [true, "true"].includes(
                    params.remote as string | boolean,
                );
            }
            if (params.subjects) {
                this.subjects = ArrayUtilities.asArray(params.subjects);
            }
            if (params.topics) {
                this.topics = ArrayUtilities.asArray(params.topics);
            }
            if (params.tags) {
                if (!Array.isArray(params.tags)) {
                    params.tags = [params.tags];
                }
                this.tagRegex = params.tags.map((t) => this.regex(t));
            }
        }
    }
    regex(value: string) {
        return new RegExp(value, "gi");
    }
    async formatSummary() {
        let items: MdxNoteSummaryOutputWithMdxTransforms[] = [];
        for await (const k of this.preParseNotes) {
            let res = await k.zodSummaryParse();
            items.push(res);
        }
        this.notes = items;
        return items;
    }
    async formatNotes() {
        let items: ParsedMdxOutput[] = [];
        for await (const k of this.preParseNotes) {
            let res = await k.zodParse();
            items.push(res);
        }
        // this.notes = items
        return items;
    }
    async getBookmarked(config?: AppConfigSchemaOutput) {
        const bms = await serverClient.search.getBookmarked();
        this.preParseNotes = bms.mdxNotes.map((bm) =>
            MdxNote.asSummary({ ...bm, bookmarked: true }),
        );
        this.sortByLastModified(true);
        return await this.formatSummary();
    }

    flattenForClient() {
        return this.preParseNotes.map((n) => n.flattenForClient());
    }

    citationsOverlap(items: MdxNote[]) {
        if (!this.citations) return items;
        return items.filter((item) => {
            return ArrayUtilities.doesOverlap(
                item.citations.map((c) => c.id),
                this.citations as string[],
                true,
            );
        });
    }
    getNoteType(config: AppConfigSchemaOutput): typeof config.noteTypes | undefined {
        if(!this.categories && this.type === "all"){
            return 
        }
        // Allows type to be provided from searchParams.
        let searchCategory = this.categories ? this.categories : this.type === "all" ? this.type : [this.type]
        if(Array.isArray(searchCategory)){
            if(searchCategory.length === 1){
                searchCategory = searchCategory[0]
            } else {
                return config.noteTypes.filter((f) => (searchCategory as string[]).includes(f.id))
            }
        }
        let val = searchCategory
            ? config.noteTypes.find((n) => n.id === searchCategory)
            : null;
        if(val){
            return [val]
        }
        return 
    }
    getMatchingTypes(config: AppConfigSchemaOutput) {
        let noteTypes = this.getNoteType(config);
        if (!noteTypes) {
            return null;
        }
        return config.noteTypes.filter((n) => noteTypes.some((f) =>  (f?.fs && n.fs && n.fs.includes(f.fs)) || n.fs === f?.fs)
        );
    }
    tagMatch(note: SortedResult) {
        if (!note.tags || !this.tagRegex) return false;
        return note.tags.some((t: { value: string }) =>
            this.tagRegex?.some((r) => r.test(t.value)),
        );
    }

    titleMatch(note: SortedResult) {
        if (!note.title || !this.query) return false;
        return this.regex(this.query).test(note.title);
    }
    async defaultCategorySearch(
        noSecondary: boolean = false,
        config: AppConfigSchemaOutput,
    ) {
        await this.getResults(config);
        if (!noSecondary) {
            this.secondaryData = await this.getQuerySecondaryData(config);
        }
        this.sortByLastModified();
        return await this.formatSummary();
    }
    withQuery(a: string[] | string) {
        let _a = Array.isArray(a) ? a : [a];
        if (this.query) {
            return _a.concat(this.query);
        }
        return _a;
    }
    defaultWhereInput(config: AppConfigSchemaOutput) {
        let matchingTypes = this.getMatchingTypes(config);
        let whereInput = {
            ...(matchingTypes && {
                noteType: {
                    in: matchingTypes
                        .map((t) => t.id)
                        .filter((t) => t !== undefined) as string[],
                },
            }),
            ...(this.citations &&
                this.citations.length > 0 && {
                citations: {
                    some: {
                        id: {
                            in: this.withQuery(this.citations),
                        },
                    },
                },
            }),
            ...(this.tags &&
                this.tags.length > 0 && {
                tags: {
                    some: {
                        value: {
                            in: this.withQuery(this.tags),
                        },
                    },
                },
            }),
            ...(this.remote === false && {
                remoteUrl: {
                    equals: null,
                },
            }),
            ...(this.topics &&
                this.topics.length > 0 && {
                topics: {
                    some: {
                        value: {
                            in: this.withQuery(this.topics),
                        },
                    },
                },
            }),
            ...(this.subjects &&
                this.subjects.length > 0 && {
                subject: {
                    some: {
                        value: {
                            in: this.withQuery(this.subjects),
                        },
                    },
                },
            }),
            ...(this.query && {
                title: {
                    search: this.query.split(" ").join("&"),
                    mode: "insensitive",
                },
                content: {
                    search: this.query.split(" ").join("&"),
                    mode: "insensitive",
                },
            }),
            ...(this.equationId && {
                equations: {
                    some: {
                        ...(`${parseInt(this.equationId)}` === this.equationId
                            ? {
                                id: parseInt(this.equationId),
                            }
                            : {
                                equationId: this.equationId,
                            }),
                    },
                },
            }),
        } satisfies Prisma.MdxNoteWhereInput;
        console.log("whereInput: ", whereInput)
        return whereInput
    }
    async toValueSearchTable(config: AppConfigSchemaOutput) {
        await this.getResultsBeforeParse(config);
        return this.preParseNotes.map((n) => n.toValueSearchTableItem());
    }
    async getQuerySecondaryData(config: AppConfigSchemaOutput) {
        let topics = await prisma.topic.findMany({
            where: {
                MdxNotes: {
                    some:
                        typeof this.categories === "string" || this.categories?.length === 1
                            ? {
                                // noteType: Array.isArray(this.categories) ? this.categories[0] : this.categories
                                noteType: {
                                    in: ArrayUtilities.beArray(this.categories),
                                },
                            }
                            : this.defaultWhereInput(config),
                },
            },
        });
        let tags = await prisma.tag.findMany({
            where: {
                MdxNotes: {
                    some:
                        typeof this.categories === "string" || this.categories?.length === 1
                            ? {
                                // noteType: Array.isArray(this.categories) ? this.categories[0] : this.categories
                                noteType: {
                                    in: ArrayUtilities.beArray(this.categories),
                                },
                            }
                            : this.defaultWhereInput(config),
                },
            },
        });
        let requestBody = {
            where: {
                MdxNotes: {
                    some:
                        typeof this.categories === "string" || this.categories?.length === 1
                            ? {
                                noteType: {
                                    in: ArrayUtilities.beArray(this.categories),
                                },
                            }
                            : this.defaultWhereInput(config),
                },
            },
        };
        let subjects = await prisma.subject.findMany(requestBody);
        return {
            topics: topics.map((t) => t.value),
            subjects: subjects.map((s) => s.value),
            tags: tags.map((t) => t.value),
        };
    }
    defaultSelectInput() {
        return {
            title: true,
            id: true,
            rootRelativePath: true,
            latexTitle: true,
            sequentialIndex: true,
            summary: true,
            subjects: true,
            topics: true,
            tags: true,
            href: true,
            lastSync: true,
            firstSync: true,
            noteType: true,
            bookmarked: true,
            citations: {
                select: {
                    id: true,
                },
            },
        } satisfies Prisma.MdxNoteSelect;
    }
    paginationInput() {
        return {
            skip: this.skip,
            take: this.perPage,
        };
    }
    defaultOrderBy() {
        return [
            { bookmarked: "desc" },
            { firstSync: "desc" },
        ] satisfies Prisma.MdxNoteOrderByWithRelationInput[];
    }
    async getCountFromWhereInput(
        whereInput: NonNullable<Prisma.MdxNoteWhereInput>,
    ) {
        return await prisma.mdxNote.count({
            where: whereInput,
        });
    }
    async parseMdxNote(nt: MdxNote) {
        return await mdxNoteWithParsedLatex.parseAsync(nt);
    }
    async getSequentialList(sequentialId: string) {
        let fields = {
            where: {
                sequentialKey: sequentialId,
            },
            select: {
                ...this.defaultSelectInput(),
                sequentialIndex: true,
            },
            orderBy: {
                sequentialIndex: "asc",
            },
            ...this.paginationInput(),
        } satisfies Prisma.MdxNoteFindManyArgs;
        let notes = await prisma.mdxNote.findMany(fields);
        let count = await this.getCountFromWhereInput(fields.where);
        this.preParseNotes = notes ? notes.map((n) => MdxNote.asSummary(n)) : [];
        this.totalFound = count || 0;
        return { notes, totalFound: count };
    }
    async getResultsBeforeParse(config: AppConfigSchemaOutput) {
        if (this.sequentialId) {
            return await this.getSequentialList(this.sequentialId);
        } else {
            let queryObject = {
                where: this.defaultWhereInput(config),
                select: this.defaultSelectInput(),
                orderBy: this.defaultOrderBy(),
                ...this.paginationInput(),
            } satisfies Prisma.MdxNoteFindManyArgs;
            const notes = await prisma.mdxNote.findMany(queryObject);
            const totalFound = await this.getCountFromWhereInput(queryObject.where);
            return {
                notes,
                totalFound,
            };
        }
    }
    async getResults(config: AppConfigSchemaOutput) {
        const { notes, totalFound } = await this.getResultsBeforeParse(config);
        this.totalFound = totalFound;
        this.preParseNotes = notes.map((n) => MdxNote.asSummary(n)) as MdxNote[];
        return await this.formatSummary();
    }
    intriguingValueSelectInput() {
        return {
            title: true,
            id: true,
            rootRelativePath: true,
            href: true,
            lastSync: true,
            firstSync: true,
            noteType: true,
            importantValues: true,
        } satisfies Prisma.MdxNoteSelect;
    }
    intriguingValueWhereInput(config: AppConfigSchemaOutput) {
        return {
            ...this.defaultWhereInput(config),
            importantValues: {
                isEmpty: false,
            },
        } satisfies Prisma.MdxNoteWhereInput;
    }
    async intriguingValueSearch(config: AppConfigSchemaOutput) {
        let notes = await prisma.mdxNote.findMany({
            where: {
                ...this.intriguingValueWhereInput(config),
            },
            select: this.intriguingValueSelectInput(),
            orderBy: this.defaultOrderBy(),
            ...this.paginationInput(),
        });
        this.preParseNotes = notes.map((n) => MdxNote.asIntriguingValueSummary(n));
    }
    sortByLastModified(preparse?: boolean) {
        let _default = new Date("1-1-1970").valueOf();
        this[preparse ? "preParseNotes" : "notes"].sort((a, b) => {
            let _a = a.firstSync
                ? typeof a.firstSync === "string"
                    ? new Date(a.firstSync).valueOf()
                    : a.firstSync?.valueOf()
                : _default;
            let _b = b.firstSync
                ? typeof b.firstSync === "string"
                    ? new Date(b.firstSync).valueOf()
                    : b.firstSync?.valueOf()
                : _default;
            return _b - _a;
        });
    }
}
