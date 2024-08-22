import axios from "axios";
import { Subject } from "./subject";
import { Topic } from "./topic";
import type {
    Prisma,
    MdxNote as PrismaMdxNote,
} from "@ulld/database/internalDatabaseTypes";
import { MdxNoteProtocol } from "./protocols/mdxNote";
import { Tag } from "./tag";
import { BibEntry } from "./BibEntry";
import {
    DocTypes,
    subjectZodObject,
    tagZodObject,
    topicZodObject,
} from "@ulld/configschema/configUtilityTypes/docTypes";
import { getInternalConfig } from "@ulld/configschema/zod/getInternalConfig";
import { AppConfigSchemaOutput } from "@ulld/configschema/types";
import { SequentialList } from "./SequentialList";
import { Definition } from "./definition";
import { ensureDate } from "../data/calendarAndDate";
import {
    MdxNotePlainObject,
    mdxNoteZodObject,
    mdxNoteWithParsedLatex,
} from "../../schemas/search/parsing";
import type { AutoSettingWithRegex } from "../../trpc/types.d";
import { ValueSearchTableItem } from "../../trpcTypes/valueTableSearch";
import { ArrayUtilities } from "@ulld/utilities/arrayUtilities";
import { getFlatAutoSettings } from "../../trpcInternalMethods/settings/autoSettings/getFlattenedAutoSettings";
import { globDoesMatch } from "../../trpcInternalMethods/settings/autoSettings/globDoesMatch";
import { convertGithubUrlToRawContentUrl } from "@ulld/state/formatting/general";
import grayMatter from "gray-matter";
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
    fromMdxStringOptSchema,
    mdxNoteFromStringPropsSchema,
    mdxNoteIntriguingValSummaryPropsSchema,
    mdxNotePropsSchema,
    mdxNoteSummaryPropSchema,
} from "./schemas/general";
import { ActiveParsableExtensions } from "@ulld/configschema/zod/secondaryConfigParse/getParsableExtensions";
import { mdxNoteSummaryWithMdxTransforms } from "./schemas/withMdxTransforms";
import { UnifiedMdxParser, UnifiedMdxParserParams } from "../../types";
import { FrontMatterType } from "@ulld/types";
import { getNoteTypeDataFromPath } from "@ulld/utilities/mdxParserUtils";

/* TODO: Create a field saving the components to include for each note based on a regex test ahead of time so this query doesn't need to be ran on each load. Make this optional in the appConfig */

// TODO: Implement this to pass class data to client components without functions causing an issue
export interface MdxNoteFlattened { }

export interface ParseMdxStringProps {
    bareAss?: boolean; // Will not parse quickLinks, citations, equationTags and definitions
    parseDefinitions?: boolean;
    id?: number;
    rootRelativePath?: string;
    docType?: DocTypes;
}

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

export interface InternalMdxNote extends Omit<PrismaMdxNote, "id"> {
    id?: number;
    tags: string[];
    citations: string[];
    subjects: string[];
    topics: string[];
}

export type MdxNoteParseParams = {
    appConfig: UnifiedMdxParserParams["appConfig"];
    docTypeData: UnifiedMdxParserParams["docTypeData"] | {};
    parser: UnifiedMdxParser;
};

const boolOrTrue = (a: boolean | undefined) => {
    return typeof a === "boolean" ? a : true;
};

/* RESUME: Come back and parse ```mermaid syntax and replace with the appropriate params. */
export class MdxNote extends MdxNoteProtocol {
    id: number | undefined | null = -1;
    title?: string | undefined | null;
    latexTitle?: string | null;
    summary?: string | null;
    raw?: string | null;
    floatImages: boolean = false;
    formatted?: string | null;
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
    frontMatter?: FrontMatterType | null;
    remoteUrl?: string | null;
    trackRemote: boolean = true;
    noLog: boolean = true;
    noteType?: DocTypes;
    imageSrc?: string | undefined | null;
    bookmarked: boolean = false;
    lastSync: Date | undefined | null;
    haveSetFrontMatter: boolean = false;
    docTypeData?: AppConfigSchemaOutput["noteTypes"][number];
    saveFormatted: boolean = boolOrTrue(
        getInternalConfig()?.database?.storeFormatted,
    );
    firstSync?: Date | null;

    constructor(
        props:
            | MdxNotePropsOutput
            | MdxNoteSummaryOutput
            | MdxNoteFromStringOutput
            | MdxNoteIntriguingValSummaryOutput,
    ) {
        super(
            "rootRelativePath" in props ? props.rootRelativePath : undefined,
            ".mdx",
        );
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
        "importantValues" in props &&
            (this.importantValues = props.importantValues);
        "quickLinkId" in props && (this.quickLinkId = props.quickLinkId);
        "href" in props && (this.href = props.href);
        "citationsListOrder" in props &&
            (this.citationsListOrder = props.citationsListOrder);
        "outgoingQuickLinks" in props &&
            (this.outgoingQuickLinks = props.outgoingQuickLinks);
        "rootRelativePath" in props &&
            (this.rootRelativePath = props.rootRelativePath);
        "equationIds" in props && (this.equationIds = props.equationIds);
        "isProtected" in props && (this.isProtected = props.isProtected);
        "sequentialKey" in props && (this.sequentialKey = props.sequentialKey);
        "sequentialIndex" in props &&
            (this.sequentialIndex = props.sequentialIndex);
        "remoteUrl" in props && (this.remoteUrl = props.remoteUrl);
        "noLog" in props && (this.noLog = props.noLog);
        "saveFormatted" in props && (this.saveFormatted = props.saveFormatted);
        "firstSync" in props && (this.firstSync = props.firstSync);
        "lastSync" in props && (this.lastSync = props.lastSync);
        "importantValues" in props &&
            (this.importantValues = props.importantValues);
        "trackRemote" in props && (this.trackRemote = props.trackRemote);
        "docTypeData" in props && (this.docTypeData = props.docTypeData);
        if (!this.noteType && this.docTypeData) {
            this.noteType = this.docTypeData.docType;
        }
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
        if (!this.raw && !this.title) return false;
        return {
            ...(this.title && { title: this.title }),
            ...(this.raw && { content: this.raw }),
        };
    }

    canSave() {
        if (!this.title) return false;
        if (!this.rootRelativePath) return false;
        if (!this.raw) return false;
        return true;
    }

    createInput(
        autoSettings: AutoSettingWithRegex[] = [],
        config: AppConfigSchemaOutput,
        noteTypeId?: string,
    ): Prisma.MdxNoteCreateInput | undefined {
        if(!this.noteType){
            if(noteTypeId){
                this.noteType = noteTypeId
            } else if(this.docTypeData) {
                this.noteType = this.docTypeData.docType || this.docTypeData.id
            }
        }
        this.checkAutoProperties(autoSettings, config);
        if (!this.canSave()) {
            return undefined;
        }
        let docTypeData = this.docTypeData
            ? this.docTypeData
            : this.rootRelativePath
                ? getNoteTypeDataFromPath(this.rootRelativePath, config)
                : undefined;
        if (!docTypeData) {
            throw new Error(
                `Can not get href for mdx file. No docType data was found in createInput methodj.`,
            );
        }
        let href = this.getHref(docTypeData);
        if (!this.noteType) {
            throw new Error(
                `You tried to save a note with an undefined noteType. Check the processing of ${this.title}`,
            );
        }
        if (href) {
            let d: Prisma.MdxNoteCreateInput = {
                rootRelativePath: this.rootRelativePath as string,
                noteType: this.noteType,
                content: this.formatted || this.raw as string,
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
        config: AppConfigSchemaOutput,
        noteTypeId?: string,
    ) {
        let ci = this.createInput(autoSettings, config, noteTypeId);
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
        config: AppConfigSchemaOutput,
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
        config: AppConfigSchemaOutput,
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
        config: AppConfigSchemaOutput,
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
    async _parseQuickLinks<T extends string | undefined>(
        content?: T,
    ): Promise<T extends string ? string : string | undefined> {
        this.log(`_parseQuickLinks: ${this.title}`);
        let l = content || this.formatted || this.raw;
        if (!l)
            return undefined as unknown as Promise<
                T extends string ? string : string | undefined
            >;
        let res = await this.parseQuickLinks(l);
        this.formatted = res.content;
        this.outgoingQuickLinks = this.outgoingQuickLinks.concat(res.links);
        return res.content || l;
    }
    static async parseMdxString(
        content: string,
        opts: ParseMdxStringProps = {},
        parserParams: MdxNoteParseParams,
    ) {
        let parsedNoteProps = mdxNoteFromStringPropsSchema.parse({ raw: content });
        let nt = new MdxNote(parsedNoteProps);
        /* if(opts?.bareAss){ */
        /*    return nt.parseBareAss() */
        /* } */
        return await nt.parse(parserParams);
    }
    applyStandardFrontMatter(applyIfAlreadySet: boolean = false) {
        if (!this.raw) {
            console.error(
                `Could not parse front matter in the applyStandardFrontMatter MdxNote method. No content was found.`,
            );
            return;
        }
        if (this.haveSetFrontMatter && !applyIfAlreadySet) {
            return;
        }
        let res = grayMatter(this.raw);
        let data = res.data as Partial<FrontMatterType>;
        this.applyParsedFrontMatter(data)
    }
    applyParsedFrontMatter(data: FrontMatterType & Record<string, any>, setFrontMatterProperty: boolean = false){
        if (data.title) {
            this.title = data.title;
        }
        if (data.id) {
            this.quickLinkId = data.id;
        }
        data.tags &&
            (this.tags = this.tags.concat(
                ArrayUtilities.beArray(data.tags).map((t) => new Tag({ value: t })),
            ));
        data.topics &&
            (this.topics = this.topics.concat(
                ArrayUtilities.beArray(data.topics).map((t) => new Topic({ value: t })),
            ));
        data.subjects &&
            (this.subjects = this.subjects.concat(
                ArrayUtilities.beArray(data.subjects).map(
                    (t) => new Subject({ value: t }),
                ),
            ));
        data.sequentialKey && (this.sequentialKey = data.sequentialKey);
        data.sequential && (this.sequentialIndex = data.sequential);
        /* data.remoteUrl && (this.remoteUrl = data.remoteUrl); */
        data.importantValues && (this.importantValues = data.importantValues);
        this.haveSetFrontMatter = true;
        if(setFrontMatterProperty){
            this.frontMatter = data
        }
    }
    /* TODO: Actually apply the new parser now, once everything is moved over to the package based parser approach. */
    async parse(params: MdxNoteParseParams) {
        let c = this.formatted || this.raw;
        if (!c) return "";
        if (!this.haveSetFrontMatter) {
            this.applyStandardFrontMatter();
        }
        let serverClient = await import("../../trpc/serverClient").then((x) => x.serverClient)
        let res = await params.parser({
            content: c,
            serverClient: serverClient,
            appConfig: params.appConfig,
            docTypeData: params.docTypeData!,
            data: this.frontMatter
                ? this.frontMatter
                : ({} as Partial<FrontMatterType>),
            db: {
                id: typeof this.id === "number" ? this.id : -1,
                firstSync: this.firstSync || new Date("1-1-1970"),
                lastSync: this.lastSync || new Date("1-1-1970"),
                bookmarked: this.bookmarked,
                sequentialKey: this.sequentialKey || undefined,
                sequentialIndex: this.sequentialIndex || undefined,
                quickLink: this.quickLinkId || undefined,
            },
        });
        this.formatted = res.content;
        if (res.data) {
            console.log(`Applying parsed front matter`)
            /* console.log("res.data: ", res.data) */
            this.applyParsedFrontMatter(res.data, true)
        }
        /* this.formatted = this.parseEquationTags(formatted); // Math package */
        this.equationIds = this.getEquationIds(this.formatted || this.raw);
        return this.formatted;
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

    setNoteType(docTypeData: AppConfigSchemaOutput["noteTypes"][number]) {
        this.noteType = docTypeData.docType;
    }

    /* PERFORMANCE: Come back and handle this with a modified zod class instead of this half assed conditional config. Figure out ***exactly*** what will be passed in and make that shit required. */
    static async fromMdxString(
        props: MdxNoteFromStringInput,
        _opts: FromMdxStringOpts = {},
        parseParams: MdxNoteParseParams,
    ): Promise<MdxNote> {
        const parsed = mdxNoteFromStringPropsSchema.parse(props);
        const opts = fromMdxStringOptSchema.parse(_opts);
        let note = new MdxNote(parsed);
        if (Object.keys(parseParams.docTypeData).length) {
            note.docTypeData =
                parseParams.docTypeData as AppConfigSchemaOutput["noteTypes"][number];
        }
        if (opts.noteTypeId) {
            note.noteType = opts.noteTypeId;
        }
        await note.parse(parseParams);
        return note;
    }

    static fromPrisma(item: Partial<MdxNotePropsInput>) {
        const parsed = mdxNotePropsSchema.parse(item);
        let newNote = new MdxNote(parsed);
        return newNote;
    }

    static asIntriguingValueSummary(
        item: MdxNoteIntriguingValSummaryInput,
    ): MdxNote {
        const parsed = mdxNoteIntriguingValSummaryPropsSchema.parse(item);
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
        return n.map((b) => (b instanceof MdxNote ? b : MdxNote.fromPrisma(b)));
    }
}

export type MdxNoteAsPlainObject = ReturnType<MdxNote["toPlainObject"]>;
