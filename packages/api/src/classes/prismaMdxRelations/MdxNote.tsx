import axios from "axios";
import { Subject } from "./subject";
import { Topic } from "./topic";
import type {
    Prisma,
    MdxNote as PrismaMdxNote,
} from "@ulld/database/internalDatabaseTypes";
import {
    MdxNoteProtocol,
} from "./protocols/mdxNote";
import { Tag } from "./tag";
import { BibEntry } from "./BibEntry";
import { DocTypes, subjectZodObject, tagZodObject, topicZodObject } from "@ulld/configschema/configUtilityTypes/docTypes";
import { getInternalConfig } from "@ulld/configschema/zod/getInternalConfig";
import { ParsedAppConfig } from "@ulld/configschema/types";
import {
    getNoteTypeFromPath,
} from "@ulld/configschema/configUtilityTypes/general";
import { SequentialList } from "./SequentialList";
import { Definition } from "./definition";
import { ensureDate } from "../data/calendarAndDate";
import { getUniversalQuery } from "../../actions/universal/getUniversalClient";
import {
    MdxNotePlainObject,
    mdxNoteZodObject,
    mdxNoteWithParsedLatex,
} from "../../schemas/search/parsing";
import type { serverClient } from "../../trpc/serverClient";
import { AutoSettingWithRegex } from "../../trpc/types.d";
import { ValueSearchTableItem } from "../../trpcTypes/valueTableSearch";
import { universalStringToMathjax } from "@ulld/parsers/universalStringToMdx";
import { getFlatAutoSettings } from "../../trpcInternalMethods/settings/autoSettings/getFlattenedAutoSettings";
import { globDoesMatch } from "../../trpcInternalMethods/settings/autoSettings/globDoesMatch";
import { replaceRecursively } from "@ulld/utilities/utils/general";
import {
    ZodFrontMatterOutput,
} from "@ulld/state/classes/frontMatter/zodFrontMatterObject";
import {
    convertGithubUrlToRawContentUrl,
} from "@ulld/state/formatting/general";
import {
    FromMdxStringOpts,
    MdxNoteFromStringInput,
    MdxNoteFromStringOutput,
    MdxNoteIntriguingValSummaryInput,
    MdxNoteIntriguingValSummaryOutput,
    MdxNotePropsInput,
    MdxNotePropsOutput,
    MdxNoteSummaryInput,
    MdxNoteSummaryOutput,
    bibEntryPropsSchema,
    fromMdxStringOptSchema,
    mdxNoteFromStringPropsSchema,
    mdxNoteIntriguingValSummaryPropsSchema,
    mdxNotePropsSchema,
    mdxNoteSummaryPropSchema,
} from "./schemas/general";
import { ActiveParsableExtensions } from "@ulld/configschema/zod/secondaryConfigParse/getParsableExtensions";
import { mdxNoteSummaryWithMdxTransforms } from "./schemas/withMdxTransforms";

/* TODO: Create a field saving the components to include for each note based on a regex test ahead of time so this query doesn't need to be ran on each load. Make this optional in the appConfig */

// TODO: Implement this to pass class data to client components without functions causing an issue
export interface MdxNoteFlattened { }

export type FromMdxStringParams =
    | {
        content: string;
        urlSlug: string;
        rootRelativePath?: undefined;
        docType?: DocTypes;
        getBookmarkState?: boolean;
    }
    | {
        content: string;
        urlSlug?: undefined;
        rootRelativePath: string;
        docType?: DocTypes | undefined;
        getBookmarkState?: boolean;
    };

interface TableStyles {
    fullWidth?: boolean;
    text?: "base" | "lg" | "xl" | "small";
    math?: "base" | "lg" | "xl" | "small";
    tableCenter?: boolean;
    textCenter?: boolean;
    headingCenter?: boolean;
    expand?: boolean;
    float?: "right" | "left";
    noMax?: boolean;
}

export interface InternalMdxNote extends Omit<PrismaMdxNote, "id"> {
    id?: number;
    tags: string[];
    citations: string[];
    subjects: string[];
    topics: string[];
}

const boolOrTrue = (a: boolean | undefined) => {
    return typeof a === "boolean" ? a : true;
};

/* RESUME: Come back and parse ```mermaid syntax and replace with the appropriate params. */
export class MdxNote extends MdxNoteProtocol {
    id: number | undefined | null
    title?: string | undefined | null
    latexTitle?: string | null;
    summary?: string | null;
    raw?: string | null;
    floatImages: boolean  = false;
    formatted?: string | null
    citations: BibEntry[] = [];
    topics: Topic[] = [];
    subjects: Subject[] = [];
    definitions: Definition[] = [];
    tags: Tag[] = [];
    importantValues: number[] = [];
    quickLinkId?: string | null;
    href?: string | null;
    citationsListOrder: string[] = [];
    outgoingQuickLinks: string[] = [];
    equationIds: string[] = [];
    ftExtension: ActiveParsableExtensions = ".mdx";
    isProtected?: boolean | null;
    sequentialKey?: string | null;
    rootRelativePath?: string | null;
    sequentialIndex?: number | null;
    frontMatter?: ZodFrontMatterOutput | null;
    remoteUrl?: string | null;
    trackRemote: boolean = true;
    noLog: boolean = true;
    noteType?: DocTypes
    imageSrc?: string | undefined | null
    bookmarked: boolean = false 
    lastSync: Date | undefined | null
    saveFormatted: boolean = boolOrTrue(
        getInternalConfig()?.database?.storeFormatted,
    );
    firstSync?: Date | null;

    constructor(props: MdxNotePropsOutput | MdxNoteSummaryOutput | MdxNoteFromStringOutput | MdxNoteIntriguingValSummaryOutput) {
        super("rootRelativePath" in props ? props.rootRelativePath : undefined, ".mdx");
        "id" in props && (this.id = props.id);
        "title" in props && (this.title = props.title);
        "latexTitle" in props && (this.latexTitle = props.latexTitle);
        "raw" in props && (this.raw = props.raw);
        "floatImages" in props && (this.floatImages = props.floatImages || false);
        "formatted" in props && (this.formatted = props.formatted);
        "citations" in props && (this.citations = props.citations);
        "noteType" in props && (this.noteType = props.noteType);
        "topics" in props && (this.topics = props.topics);
        "subjects" in props && this.subjects && (this.subjects = props.subjects);
        "tags" in props && (this.tags = props.tags);
        "importantValues" in props && (this.importantValues = props.importantValues);
        "quickLinkId" in props && (this.quickLinkId = props.quickLinkId);
        "href" in props && (this.href = props.href);
        "citationsListOrder" in props && (this.citationsListOrder = props.citationsListOrder);
        "outgoingQuickLinks" in props && (this.outgoingQuickLinks = props.outgoingQuickLinks);
        "rootRelativePath" in props && (this.rootRelativePath = props.rootRelativePath);
        "equationIds" in props && (this.equationIds = props.equationIds);
        "isProtected" in props && (this.isProtected = props.isProtected);
        "sequentialKey" in props && (this.sequentialKey = props.sequentialKey);
        "sequentialIndex" in props && (this.sequentialIndex = props.sequentialIndex);
        "remoteUrl" in props && (this.remoteUrl = props.remoteUrl);
        "noLog" in props && (this.noLog = props.noLog);
        "saveFormatted" in props && (this.saveFormatted = props.saveFormatted);
        "firstSync" in props && (this.firstSync = props.firstSync);
        "lastSync" in props && (this.lastSync = props.lastSync);
        "importantValues" in props && (this.importantValues = props.importantValues);
        "trackRemote" in props && (this.trackRemote = props.trackRemote);
    }
    toPlainObject(
        partial?: boolean | Partial<Record<keyof MdxNotePlainObject, true>>,
    ) {
        return partial
            ? typeof partial == "boolean"
                ? mdxNoteZodObject.partial().parse(this)
                : mdxNoteZodObject.partial(partial).parse(this)
            : mdxNoteZodObject.parse(this);
    }
    async zodSummaryParse() {
        return await mdxNoteSummaryWithMdxTransforms.parseAsync(this);
    }
    async zodParse() {
        return await mdxNoteWithParsedLatex.parseAsync(this);
    }
    async getDatabaseCitation(id: string[]) {
        const query = await getUniversalQuery("getBibCitation", "bibliography");
        const citations = await query(id);
        return citations as Awaited<
            ReturnType<(typeof serverClient)["bibliography"]["getBibCitation"]>
        >;
    }
    async parseCitations<T extends string | undefined>(content?: T): Promise<T extends string ? string : (string | undefined)> {
        const regex = /\[@(?<value>[\w|\d|\.|\-|_|\+|\=|\$|\!|\%|\*|\&]*)\]/gm;
        let results: { value: string; length: number; index: number }[] = [];
        let c = content || this.formatted || this.raw;
        if(!c) return undefined as unknown as T extends string ? string : (string | undefined)
        let m;
        do {
            m = regex.exec(c);
            if (m && m.groups?.value) {
                results.push({
                    value: m.groups.value,
                    index: m.index,
                    length: m[0].length,
                });
            }
        } while (m);
        let fr: { htmlCitation: string; id: string; pageIndex: number }[] = [];
        const rList = results.map((r) => r.value.toLowerCase());
        const citations = await this.getDatabaseCitation(rList);
        for (const k of citations) {
            const rIndex = rList.indexOf(k.id.toLowerCase());
            const result = results.at(rIndex);
            if (result) {
                let _link = this.formatCitation(k.id, rIndex);
                c = replaceRecursively(
                    c,
                    new RegExp(`\\[@${result.value}\\]`, "gmi"),
                    _link,
                );
                if (k.htmlCitation) {
                    fr.push({
                        htmlCitation: k.htmlCitation,
                        id: k.id,
                        pageIndex: rIndex,
                    });
                } else {
                    console.log(`No htmlCitation found for ${k.id}`);
                }
            }
        }
        this.citations = this.citations.concat(
            fr.map(
                (c) =>
                    new BibEntry(bibEntryPropsSchema.parse({ htmlCitation: c?.htmlCitation, id: c.id }), c.pageIndex),
            ),
        );
        this.citationsListOrder = this.citations
            .sort((a: any, b: any) => a.tempPageIndex - b.tempPageIndex)
            .map((c) => c.id);
        this.formatted = c;
        return c as string
    }
    log(val: string | object) {
        if (this.noLog) {
            return;
        }
        console.log(typeof val === "string" ? val : JSON.stringify(val, null, 4));
    }
    whereUniqueInput() {
        let d: Prisma.MdxNoteWhereUniqueInput = {
            id: this.id || -1,
        };
        return d;
    }
    whereInput() {
        let d: Prisma.MdxNoteWhereUniqueInput = {
            id: this.id || -1,
        };
        return d;
    }
    checkIfExistsWithoutId(): Prisma.MdxNoteWhereInput | false {
        if(!this.raw && !this.title) return false
        return {
            ...(this.title && {title: this.title}),
            ...(this.raw && {content: this.raw}),
        };
    }

    async parseLatexTitle() {
        if(!this.title) return
        const di = this.title.indexOf("$");
        if (di === -1 || di === this.title.lastIndexOf("$")) return;
        /* BUG: This will need to be changed to use only svg output unless styles are appended. Check where this is used to make sure styles aren't being appended for no reason. */
        let _title = await universalStringToMathjax(this.title, { inline: true });
        this.latexTitle = typeof _title === "string" ? _title : _title.content;
    }

    canSave(){
        if(!this.title) return false
        if(!this.rootRelativePath) return false
        if(!this.raw) return false
        return true
    }

    createInput(
        autoSettings: AutoSettingWithRegex[] = [],
        config: ParsedAppConfig,
    ): Prisma.MdxNoteCreateInput | undefined {
        this.checkAutoProperties(autoSettings, config);
        if(!this.canSave()) return undefined
        let href = this.getHref();
        if (!this.noteType) {
            throw new Error(
                `You tried to save a note with an undefined noteType. Check the processing of ${this.title}`,
            );
        }
        if (href) {
            let d: Prisma.MdxNoteCreateInput = {
                rootRelativePath: this.rootRelativePath as string,
                noteType: this.noteType,
                content: this.raw as string,
                title: this.title as string,
                summary: this.summary,
                imageSrc: this.imageSrc,
                importantValues: this.importantValues,
                quickLink: this.quickLinkId,
                outgoingQuickLinks: this.outgoingQuickLinks,
                remoteUrl: this.remoteUrl,
                trackRemote: this.trackRemote,
                href: href,
                floatImages: this.floatImages,
                ...(this.latexTitle && { latexTitle: this.latexTitle }),
                ...(this.isProtected && { isProtected: this.isProtected }),
                subjects: {
                    connectOrCreate: this.subjects.map((s) => s.connectOrCreateArgs()),
                },
                topics: {
                    connectOrCreate: this.topics.map((t) => t.connectOrCreateArgs()),
                },
                tags: {
                    connectOrCreate: this.tags
                        .filter((t) => t.value !== "")
                        .map((t) => t.connectOrCreateArgs()),
                },
                citations: {
                    connect: this.citations.map((c) => c.connectArgs()),
                },
                citationsListOrder: this.citationsListOrder,
                ...(this.sequentialKey && {
                    sequentialList: {
                        connectOrCreate: new SequentialList(
                            this.sequentialKey,
                        ).connectOrCreateArgs(),
                    },
                    sequentialIndex: this.sequentialIndex,
                }),
                ...(this.bookmarked !== undefined && { bookmarked: this.bookmarked }),
                ...(this.saveFormatted && { formatted: this.formatted }),
                ...(this.equationIds.length > 0 && {
                    equations: {
                        connect: this.equationIds.map((eq) => ({
                            equationId: eq,
                        })),
                    },
                }),
                ...(this.definitions.length > 0 && {
                    definitions: {
                        connectOrCreate: this.definitions.map((d) =>
                            d.connectOrCreateArgs(),
                        ),
                    },
                }),
                ...(this.firstSync && {
                    firstSync: this.firstSync,
                }),
                ...(this.lastSync && {
                    lastSync: this.lastSync,
                }),
            };
            if (this.definitions.length > 0) {
                // BUG: Come back here and handle the definitions issue. They're being parsed correctly but aren't being saved for some reason. The development server is almost useless at this point with such a big app.
                // TODO: Also add a page to edit the label property for different definitions directly in the UI so a single word id can be replaced with something grammatically correct.
                console.log(
                    "creating with definitions. input: ",
                    JSON.stringify(d, null, 4),
                );
            }
            return d;
        } else {
            return;
        }
    }

    importantValueDifferences(n: number, absoluteValue: boolean = true) {
        return this.importantValues.map((u) =>
            absoluteValue ? Math.abs(n - u) : n - u,
        );
    }

    createArgs(
        autoSettings: AutoSettingWithRegex[] = [],
        config: ParsedAppConfig,
    ) {
        let ci = this.createInput(autoSettings, config);
        if (ci && ci !== undefined) {
            let d: Prisma.MdxNoteCreateArgs = {
                data: ci as Prisma.MdxNoteCreateInput,
            };
            return d;
        } else {
            return undefined;
        }
    }

    connectOrCreateArgs(
        autoSettings: AutoSettingWithRegex[] = [],
        config: ParsedAppConfig,
    ) {
        let ci = this.createInput(autoSettings, config);
        if (ci) {
            let d: Prisma.MdxNoteCreateOrConnectWithoutTagsInput = {
                where: this.whereUniqueInput(),
                create: ci as Prisma.MdxNoteCreateInput,
            };
            return d;
        } else {
            return undefined;
        }
    }

    upsertArgs(
        autoSettings: AutoSettingWithRegex[] = [],
        config: ParsedAppConfig,
    ) {
        const ci = this.createInput(autoSettings || [], config);
        if (ci) {
            let d: Prisma.MdxNoteUpsertArgs = {
                where: this.whereUniqueInput(),
                create: ci as Prisma.MdxNoteCreateInput,
                update: ci as Prisma.MdxNoteCreateInput,
            };
            this.log(d);
            return d;
        } else {
            return undefined;
        }
    }
    checkAutoProperties(
        autoSettings: AutoSettingWithRegex[] = [],
        config: ParsedAppConfig,
    ) {
        if (!this.rootRelativePath) return;
        let autoSets = getFlatAutoSettings(autoSettings);
        for (const t of autoSets.autoTags) {
            if (globDoesMatch(t.glob, this.rootRelativePath, config)) {
                this.tags.push(new Tag(tagZodObject.parse(t)));
            }
        }
        for (const t of autoSets.autoSubjects) {
            if (globDoesMatch(t.glob, this.rootRelativePath, config)) {
                this.subjects.push(new Subject(subjectZodObject.parse(t)));
            }
        }
        for (const t of autoSets.autoTopics) {
            if (globDoesMatch(t.glob, this.rootRelativePath, config)) {
                this.topics.push(new Topic(topicZodObject.parse(t)));
            }
        }
    }

    formatMermaidComponent(m: RegExpMatchArray) {
        if (!m.groups?.content) return;
        return `
<Mermaid 
chart={\`
${m.groups.content}
\`}
`;
    }

    parseMermaidElement(content: string) {
        let regex = /```mermaid\n(?<content>[^`]*)\n```/gm;
        let m;
        let c = content;
        do {
            m = regex.exec(c);
            if (m && m.groups?.label && m.groups?.videoId && m.groups?.time) {
                c = `${c.slice(0, m.index)}${this.formatMermaidComponent(m)}${c.slice(m.index + m[0].length, c.length)}`;
            }
        } while (m);
    }
    _parseTags<T extends string | undefined>(content?: T): T extends string ? string : (string | undefined) {
        this.log(`_parseTags: ${this.title}`);
        if (this.isProtected) return content || (this.formatted as string);
        let l = content || this.formatted || this.raw
        if(!l) return undefined as T extends string ? string : (string | undefined)
        let res = this.parseTags(l);
        this.formatted = res.content;
        this.tags = this.tags.concat(res.results.map((t) => new Tag(tagZodObject.parse(t))));
        return res.content || (content as string);
    }
    _parseVideoTimeLinks<T extends string | undefined>(content?: T): T extends string ? string : (string | undefined) {
        this.log(`_parseVideoTimelinks: ${this.title}`);
        let l = content || this.formatted || this.raw
        if(!l) return undefined as T extends string ? string : (string | undefined)
        let res = this.parseVideoTimeLinks(l);
        this.formatted = res.content;
        return res.content || (content as string);
    }
    async _parseQuickLinks<T extends string | undefined>(content?: T): Promise<T extends string ? string : (string | undefined)> {
        this.log(`_parseQuickLinks: ${this.title}`);
        let l = this.formatted || this.raw
        if(!l) return undefined as unknown as Promise<T extends string ? string : (string | undefined)>
        let res = await this.parseQuickLinks(l);
        this.formatted = res.content;
        this.outgoingQuickLinks = this.outgoingQuickLinks.concat(res.links);
        return res.content || (content as string);
    }
    static async parseMdxString(
        content: string,
        opts: {
            parseDefinitions?: boolean;
            id?: number;
            rootRelativePath?: string;
            docType?: DocTypes;
        } = {},
    ) {
        let parsed = mdxNoteFromStringPropsSchema.parse({raw: content})
        let nt = new MdxNote(parsed);
        let c = content;
        c = nt.parseLinkShortcuts(c);
        c = nt.parseEquationTags(c);
        let { content: _content, definitions } = nt.parseDefinitionTags(c);
        c = content;
        if (opts.parseDefinitions && definitions && definitions.length > 0) {
            nt.definitions = definitions.map(
                (d) =>
                    new Definition({
                        ...d,
                        mdxNoteId: nt.id,
                    }),
            );
        }
        c = nt._parseTags(c);
        c = nt._parseVideoTimeLinks(c);
        nt.equationIds = nt.getEquationIds(c);
        c = await nt.parseCitations(c);
        c = await nt._parseQuickLinks(c);
        return c;
    }
    async parse() {
        let c = this.formatted || this.raw
        if(!c) return
        let formatted = this.parseLinkShortcuts(c);
        this.formatted = this.parseEquationTags(formatted);
        let { content, definitions } = this.parseDefinitionTags(
            this.formatted
        );
        this.formatted = content;
        if (definitions && definitions.length > 0) {
            this.definitions = definitions.map(
                (d) =>
                    new Definition({
                        id: d.id,
                        content: d.content,
                        label: d.label,
                        mdxNoteId: this.id,
                    }),
            );
        }
        this._parseTags();
        this._parseVideoTimeLinks();
        this.equationIds = this.getEquationIds(this.formatted || this.raw);
        await this.parseCitations();
        await this._parseQuickLinks();
        if (!this.isProtected) {
            await this.parseLatexTitle();
        }
    }

    citationIdList() {
        return this.citations.map((c) => c.id);
    }

    flattenForClient(): MdxNoteFlattened {
        let d: MdxNoteFlattened = {};
        return d;
    }

    sortCitationsByPageIndex() {
        let citations: typeof this.citations = [];
        this.citationsListOrder.forEach((k, i) => {
            let cit = this.citations.find(
                (c) => c.id.toLowerCase() === k.toLowerCase(),
            );
            if (cit) {
                cit.tempPageIndex = i;
                citations.push(cit);
            }
        });
        this.citations = citations;
    }

    toValueSearchTableItem(): ValueSearchTableItem {
        return {
            href: this.href || "",
            title: this.title || "--",
            rootRelativePath: this.rootRelativePath || "--",
            noteType: this.noteType || "none",
            importantValues: this.importantValues,
            firstSync: ensureDate<null>(this.firstSync, "null"),
            lastSync: ensureDate<null>(this.lastSync, "null"),
        } satisfies ValueSearchTableItem;
    }

    async populateFromRemote() {
        if (!this.remoteUrl) return;
        let url = this.remoteUrl;
        let res = await axios.get(
            url.includes("github") ? convertGithubUrlToRawContentUrl(url) : url,
        );
        this.raw = res.data;
    }

    setNoteType(config?: ParsedAppConfig) {
        if (!this.rootRelativePath) return;
        let nt = getNoteTypeFromPath(this.rootRelativePath as string, config)
        if(typeof nt === "object" && "docType" in nt){
            this.noteType = nt.docType
        }
    }

    /* PERFORMANCE: Come back and handle this with a modified zod class instead of this half assed conditional config. Figure out ***exactly*** what will be passed in and make that shit required. */
    static async fromMdxString(props: MdxNoteFromStringInput, _opts: FromMdxStringOpts = {}): Promise<MdxNote> {
        const parsed = mdxNoteFromStringPropsSchema.parse(props)
        const opts = fromMdxStringOptSchema.parse(_opts)
        let note = new MdxNote(parsed);
        if (opts.getBookmarkState && parsed.rootRelativePath) {
            const bookmarkQuery = await getUniversalQuery(
                "rootRelativePathIsBookmarked",
                "search",
                "query",
            );
            /* HACK: This .mdx hardcoded file extension needs to be replaced with a returned value from trpc. This will work for now, but as this app grows to support general markdown files and other filetypes that might need similar functionality *assuming* the file to be a .mdx filetype will lead to issues later on. */
            const isBookmarked = await bookmarkQuery(parsed.rootRelativePath.endsWith(".mdx") ? parsed.rootRelativePath : `${parsed.rootRelativePath}.mdx`)
            note.bookmarked = isBookmarked;
        }
        await note.parse();
        return note;
    }

    static fromPrisma(item: Partial<MdxNotePropsInput>) {
        const parsed = mdxNotePropsSchema.parse(item)
        let newNote = new MdxNote(parsed);
        return newNote;
    }

    static asIntriguingValueSummary(item: MdxNoteIntriguingValSummaryInput): MdxNote {
        const parsed = mdxNoteIntriguingValSummaryPropsSchema.parse(item)
        let n = new MdxNote(parsed);
        return n;
    }

    static asSummary(_item: MdxNoteSummaryInput): MdxNote {
        const item = mdxNoteSummaryPropSchema.parse(_item);
        let n = new MdxNote(item);
        return n;
    }

    static fromList(
        n: (MdxNote | PrismaMdxNote)[] | undefined | null,
    ): MdxNote[] {
        if (!n || n.length === 0) return [] as MdxNote[];
        return n.map((b) =>
            b instanceof MdxNote ? b : MdxNote.fromPrisma(b),
        );
    }
}

export type MdxNoteAsPlainObject = ReturnType<MdxNote["toPlainObject"]>;
