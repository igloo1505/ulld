import { Topic, Subject, Prisma } from "@ulld/database/internalDatabaseTypes";
import { getDocumentTypeConfig } from "@ulld/configschema/configUtilityTypes/general";
import { ParsedAppConfig } from "@ulld/configschema/types"
import { DocTypes } from "@ulld/configschema/configUtilityTypes/docTypes"
import { prisma } from "@ulld/database/db";
import type { SerializeMdxConfig } from "@ulld/parsers/mdx/types";
import type { SearchAllParams } from "@ulld/state/searchParamSchemas/utilities/formatSearchAllParams";
import { serverClient } from "../../trpc/serverClient";
import { MdxNote } from "../prismaMdxRelations/MdxNote";
import { ArrayUtilities } from "@ulld/utilities/utils/arrayUtilities";
import { mdxNoteWithParsedLatex, ParsedMdxOutput } from "../../schemas/search/parsing";
import { MdxNoteSummaryOutputWithMdxTransforms } from "../prismaMdxRelations/schemas/withMdxTransforms";



type SortedResult = MdxNote & { sortRank?: number }

type WithDocType<T> = {
    [key in keyof T]: key extends "noteType" ? DocTypes : T[key]
}


export interface IntriguingValueSummary {
    rootRelativePath: string
    noteType: DocTypes;
    id: number;
    title: string;
    href: string;
    firstSync: Date;
    lastSync: Date;
    importantValues: number[]
}


export class NoteFilter implements Omit<SearchAllParams, "perPage" | "page"> {
    preParseNotes: MdxNote[] = []
    notes: MdxNoteSummaryOutputWithMdxTransforms[] = []
    perPage: number = 10
    page: number = 1
    query?: string
    tags?: string[]
    totalFound: number = 0
    categories?: DocTypes[]
    citations?: string[]
    tagRegex?: RegExp[]
    topics?: string[]
    subjects?: string[]
    equationId?: string
    sequentialId?: string
    skip: number = 0
    remote: boolean = true
    secondaryData: {
        topics: Topic[]
        subjects: Subject[]
    } = {
            topics: [],
            subjects: []
        }
    constructor(public type: DocTypes | "all", params?: SearchAllParams, public serializeConfig?: SerializeMdxConfig) {
        if (params) {
            if (params.page !== undefined && (`${params.page}` === `${parseInt(params.page as string)}`)) {
                this.page = parseInt(params.page)
            }
            if (params.perPage !== undefined && (`${params.perPage}` === `${parseInt(params.perPage as string)}`)) {
                this.perPage = parseInt(params.perPage)
            }
            this.skip = (this.page - 1) * this.perPage
            this.citations = params.citations ? Array.isArray(params.citations) ? params.citations : [params.citations] : []
            this.categories = params.categories
            this.tags = params.tags
            this.query = params.query
            this.equationId = params.equationId
            this.sequentialId = params.sequentialId
            if (typeof params.remote !== undefined) {
                this.remote = [true, "true"].includes(params.remote as string | boolean)
            }
            if (params.subjects) {
                this.subjects = ArrayUtilities.asArray(params.subjects)
            }
            if (params.topics) {
                this.topics = ArrayUtilities.asArray(params.topics)
            }
            if (params.tags) {
                if (!Array.isArray(params.tags)) {
                    params.tags = [params.tags]
                }
                this.tagRegex = params.tags.map((t) => this.regex(t))
            }
        }
    }
    regex(value: string) {
        return new RegExp(value, "gi")
    }
    async formatSummary() {
        let items: MdxNoteSummaryOutputWithMdxTransforms[] = []
        for await (const k of this.preParseNotes) {
            let res = await k.zodSummaryParse()
            items.push(res)
        }
        this.notes = items
        return items
    }
    async formatNotes() {
        let items: ParsedMdxOutput[] = []
        for await (const k of this.preParseNotes) {
            let res = await k.zodParse()
            items.push(res)
        }
        // this.notes = items
        return items
    }
    async getBookmarked(config?: ParsedAppConfig) {
        const bms = await serverClient.search.getBookmarked()
        this.preParseNotes = bms.mdxNotes.map((bm) => MdxNote.asSummary({...bm, bookmarked: true}))
        this.sortByLastModified(true)
        return await this.formatSummary()
    }

    flattenForClient() {
        return this.preParseNotes.map((n) => n.flattenForClient())
    }

    citationsOverlap(items: MdxNote[]) {
        if (!this.citations) return items
        return items.filter((item) => {
            return ArrayUtilities.doesOverlap(item.citations.map((c) => c.id), this.citations as string[], true)
        })
    }
    getNoteType(config: ParsedAppConfig) {
        return this.type ? config.noteTypes.find((n) => n.docType === this.type) : null
    }
    getMatchingTypes(config: ParsedAppConfig) {
        let type = this.getNoteType(config)
        if (!type) {
            return null
        }
        return config.noteTypes.filter((n) => Boolean(type?.fs && n.fs && n.fs.includes(type.fs) || n.fs === type?.fs))
    }
    tagMatch(note: SortedResult) {
        if (!note.tags || !this.tagRegex) return false
        return note.tags.some((t: { value: string }) => this.tagRegex?.some((r) => r.test(t.value)))
    }

    titleMatch(note: SortedResult) {
        if (!note.title || !this.query) return false
        return this.regex(this.query).test(note.title)
    }
    async defaultCategorySearch(noSecondary: boolean = false, config: ParsedAppConfig) {
        await this.getResults(config)
        if (!noSecondary) {
            this.secondaryData = await this.getQuerySecondaryData(config)
        }
        this.sortByLastModified()
        return await this.formatSummary()
    }
    withQuery(a: string[] | string) {
        let _a = Array.isArray(a) ? a : [a]
        if (this.query) {
            return _a.concat(this.query)
        }
        return _a
    }
    defaultWhereInput(config: ParsedAppConfig) {
        let matchingTypes = this.getMatchingTypes(config)
        return {
            ...(matchingTypes && this.type !== "all" && {
                noteType: {
                    in: matchingTypes.map((t) => t.docType).filter((t) => t !== undefined) as string[]
                }
            }),
            ...(this.citations && this.citations.length > 0 && {
                citations: {
                    some: {
                        id: {
                            in: this.withQuery(this.citations)
                        }
                    }
                }
            }),
            ...(this.tags && this.tags.length > 0 && {
                tags: {
                    some: {
                        value: {
                            in: this.withQuery(this.tags)
                        }
                    }
                }
            }),
            ...(this.remote === false && {
                remoteUrl: {
                    equals: null
                }
            }),
            ...(this.topics && this.topics.length > 0 && {
                topics: {
                    some: {
                        value: {
                            in: this.withQuery(this.topics)
                        }
                    }
                }
            }),
            ...(this.subjects && this.subjects.length > 0 && {
                subject: {
                    some: {
                        value: {
                            in: this.withQuery(this.subjects)
                        }
                    }
                }
            }),
            ...(this.query && {
                title: {
                    search: this.query.split(" ").join("&"),
                    mode: "insensitive"
                },
                content: {
                    search: this.query.split(" ").join("&"),
                    mode: "insensitive"
                }
            }),
            ...(this.equationId && {
                equations: {
                    some: {
                        ...(`${parseInt(this.equationId)}` === this.equationId ? {
                            id: parseInt(this.equationId)
                        } : {
                            equationId: this.equationId
                        })
                    }
                }
            })
        } satisfies Prisma.MdxNoteWhereInput
    }
    async toValueSearchTable(config: ParsedAppConfig) {
        await this.getResultsBeforeParse(config)
        return this.preParseNotes.map((n) => n.toValueSearchTableItem())
    }
    async getQuerySecondaryData(config: ParsedAppConfig) {
        console.log("this.categories: ", this.categories)
        let topics = await prisma.topic.findMany({
            where: {
                MdxNotes: {
                    some: typeof this.categories === "string" || this.categories?.length === 1 ? {
                        // noteType: Array.isArray(this.categories) ? this.categories[0] : this.categories
                        noteType: {
                            in: ArrayUtilities.beArray(this.categories)
                        }
                    } : this.defaultWhereInput(config)
                }
            }
        })
        let requestBody = {
            where: {
                MdxNotes: {
                    some: typeof this.categories === "string" || this.categories?.length === 1 ? {
                        noteType: {
                            in: ArrayUtilities.beArray(this.categories)
                        }
                    } : this.defaultWhereInput(config)
                }
            }
        }
        console.log("requestBody ", JSON.stringify(requestBody || {}, null, 4))
        let subjects = await prisma.subject.findMany(requestBody)
        return { topics, subjects, docType: this.type === "all" ? undefined : getDocumentTypeConfig(this.type) }
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
                    id: true
                }
            },
        } satisfies Prisma.MdxNoteSelect
    }
    paginationInput() {
        return {
            skip: this.skip,
            take: this.perPage
        }
    }
    defaultOrderBy() {
        return [
            { bookmarked: "desc" },
            { firstSync: "desc" }
        ] satisfies Prisma.MdxNoteOrderByWithRelationAndSearchRelevanceInput[]
    }
    async getCountFromWhereInput(whereInput: NonNullable<Prisma.MdxNoteWhereInput>) {
        return await prisma.mdxNote.count({
            where: whereInput
        })
    }
    async parseMdxNote(nt: MdxNote) {
        return await mdxNoteWithParsedLatex.parseAsync(nt)
    }
    async getSequentialList(sequentialId: string) {
        let fields = {
            where: {
                sequentialKey: sequentialId
            },
            select: {
                ...this.defaultSelectInput(),
                sequentialIndex: true
            },
            orderBy: {
                sequentialIndex: "asc"
            },
            ...this.paginationInput()
        } satisfies Prisma.MdxNoteFindManyArgs
        let notes = await prisma.mdxNote.findMany(fields)
        let count = await this.getCountFromWhereInput(fields.where)
        this.preParseNotes = notes ? notes.map((n) => MdxNote.asSummary(n)) : [] 
        this.totalFound = count || 0
        return { notes, totalFound: count }
    }
    async getResultsBeforeParse(config: ParsedAppConfig) {
        if (this.sequentialId) {
            return await this.getSequentialList(this.sequentialId)
        } else {
            let queryObject = {
                where: this.defaultWhereInput(config),
                select: this.defaultSelectInput(),
                orderBy: this.defaultOrderBy(),
                ...this.paginationInput(),
            } satisfies Prisma.MdxNoteFindManyArgs
            let notes = await prisma.mdxNote.findMany(queryObject)
            let totalFound = await prisma.mdxNote.count({
                where: queryObject.where,
            })
            return {
                notes, totalFound
            }
        }
    }
    async getResults(config: ParsedAppConfig) {
        const { notes, totalFound } = await this.getResultsBeforeParse(config)
        this.totalFound = totalFound
        const v = notes[0] as WithDocType<typeof notes[0]>
        this.preParseNotes = notes.map((n) => MdxNote.asSummary(n)) as MdxNote[]
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
            importantValues: true
        } satisfies Prisma.MdxNoteSelect
    }
    intriguingValueWhereInput(config: ParsedAppConfig) {
        return {
            ...this.defaultWhereInput(config),
            importantValues: {
                isEmpty: false
            }
        } satisfies Prisma.MdxNoteWhereInput
    }
    async intriguingValueSearch(config: ParsedAppConfig) {
        let notes = await prisma.mdxNote.findMany({
            where: {
                ...this.intriguingValueWhereInput(config)
            },
            select: this.intriguingValueSelectInput(),
            orderBy: this.defaultOrderBy(),
            ...this.paginationInput()
        })
        this.preParseNotes = notes.map((n) => MdxNote.asIntriguingValueSummary(n))
    }
    sortByLastModified(preparse?: boolean) {
        let _default = new Date("1-1-1970").valueOf()
        this[preparse ? "preParseNotes" : "notes"].sort((a, b) => {
            let _a = a.firstSync ? typeof a.firstSync === "string" ? new Date(a.firstSync).valueOf() : a.firstSync?.valueOf() : _default
            let _b = b.firstSync ? typeof b.firstSync === "string" ? new Date(b.firstSync).valueOf() : b.firstSync?.valueOf() : _default
            return _b - _a
        })
    }
}
