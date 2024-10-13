import {
    type DocTypes,
    subjectZodObject,
    tagZodObject,
    topicZodObject,
} from "@ulld/configschema/configUtilityTypes/docTypes";
import type {
    AppConfigSchemaDeepPartialOutput,
    AppConfigSchemaOutput,
    MinimalParsableAppConfigOutput,
} from "@ulld/configschema/types";
import type { ActiveParsableExtensions } from "@ulld/configschema/zod/secondaryConfigParse/getParsableExtensions";
import type {
    Prisma,
    MdxNote as PrismaMdxNote,
} from "@ulld/database/internalDatabaseTypes";
import {
    fromMdxStringOptSchema,
    mdxNoteFromStringPropsSchema,
    parseParamsSchema,
    type UnifiedMdxParserParamsInput,
} from "@ulld/schemas/mdx-parsing-params";
import { convertGithubUrlToRawContentUrl } from "@ulld/state/formatting/general";
import type {
    AppConfigSchemaDeepPartial,
} from "@ulld/types";
import type { FrontMatterType } from "@ulld/schemas/frontMatter";
import { ArrayUtilities } from "@ulld/utilities/arrayUtilities";
import { getNoteTypeDataFromPath } from "@ulld/utilities/mdxParserUtils";
import axios from "axios";
import grayMatter from "gray-matter";
import type { z } from "zod";
import {
    type MdxNotePlainObject,
    mdxNoteWithParsedLatex,
    mdxNoteZodObject,
    mdxNoteZodObjectPartial,
    type ParsedMdxOutput,
} from "../../schemas/search/parsing";
import type { AutoSettingWithRegex } from "../../trpc/types.d";
import { getFlatAutoSettings } from "../../trpcInternalMethods/settings/autoSettings/getFlattenedAutoSettings";
import { globDoesMatch } from "../../trpcInternalMethods/settings/autoSettings/globDoesMatch";
import type { ValueSearchTableItem } from "../../trpcTypes/valueTableSearch";
import type { UnifiedMdxParser } from "../../types";
import { ensureDate } from "../data/calendarAndDate";
import type { BibEntry } from "./BibEntry";
import { SequentialList } from "./SequentialList";
import type { Definition } from "./definition";
import { type AutoSettingProp, MdxNoteProtocol } from "./protocols/mdxNote";
import {
    type MdxNoteFromStringOutput,
    type MdxNoteIntriguingValSummaryInput,
    type MdxNoteIntriguingValSummaryOutput,
    mdxNoteIntriguingValSummaryPropsSchema,
    type MdxNotePropsInput,
    type MdxNotePropsOutput,
    mdxNotePropsSchema,
    type MdxNoteSummaryInput,
    type MdxNoteSummaryOutput,
    mdxNoteSummaryPropSchema,
} from "./schemas/general";
import {
    type MdxNoteSummaryOutputWithMdxTransforms,
    mdxNoteSummaryWithMdxTransforms,
} from "./schemas/withMdxTransforms";
import { Subject } from "./subject";
import { Tag } from "./tag";
import { Topic } from "./topic";

/* TODO: Create a field saving the components to include for each note based on a regex test ahead of time so this query doesn't need to be ran on each load. Make this optional in the appConfig */

// TODO: Implement this to pass class data to client components without functions causing an issue
export type MdxNoteFlattened = object;

export interface ParseMdxStringProps {
    /** Will not parse quickLinks, citations, equationTags and definitions */
    bareAss?: boolean;
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

export interface MdxNoteParseParams {
    appConfig: UnifiedMdxParserParamsInput["appConfig"];
    docTypeData: UnifiedMdxParserParamsInput["docTypeData"] | object;
    parser: UnifiedMdxParser;
}

type MdxNoteClassConstructorProps = (
    | MdxNotePropsOutput
    | MdxNoteSummaryOutput
    | MdxNoteFromStringOutput
    | MdxNoteIntriguingValSummaryOutput
) & {
    appConfig?: AppConfigSchemaDeepPartialOutput | AppConfigSchemaDeepPartial;
};

/* RESUME: Come back and parse ```mermaid syntax and replace with the appropriate params. */
export class MdxNote extends MdxNoteProtocol {
    id: number | undefined | null = -1;
    title?: string | undefined | null;
    latexTitle?: string | null;
    summary?: string | null;
    raw?: string | null;
    floatImages = false;
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
    trackRemote = true;
    noLog = true;
    noteType?: DocTypes;
    imageSrc?: string | undefined | null;
    bookmarked = false;
    lastSync: Date | undefined | null;
    haveSetFrontMatter = false;
    docTypeData?: AppConfigSchemaOutput["noteTypes"][number];
    saveFormatted = true;
    firstSync?: Date | null;

    constructor(props: MdxNoteClassConstructorProps) {
        super(
            "rootRelativePath" in props ? props.rootRelativePath : undefined,
            ".mdx",
        );
        if (
            "appConfig" in props &&
            typeof props.appConfig?.database?.storeFormatted === "boolean"
        ) {
            this.saveFormatted = props.appConfig.database.storeFormatted;
        }
        "id" in props && (this.id = props.id);
        "title" in props && (this.title = props.title);
        "latexTitle" in props && (this.latexTitle = props.latexTitle);
        "raw" in props && (this.raw = props.raw);
        "floatImages" in props && (this.floatImages = props.floatImages || false);
        "formatted" in props && (this.formatted = props.formatted);
        "citations" in props && (this.citations = props.citations);
        "noteType" in props && (this.noteType = props.noteType);
        "topics" in props && (this.topics = props.topics);
        "subjects" in props && (this.subjects = props.subjects);
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
    ):
        | z.output<typeof mdxNoteZodObject>
        | z.output<typeof mdxNoteZodObjectPartial> {
        if (partial) {
            return typeof partial === "boolean"
                ? mdxNoteZodObjectPartial.parse(this)
                : mdxNoteZodObject.partial(partial).parse(this);
        }
        return mdxNoteZodObject.parse(this);
    }
    async zodSummaryParse(): Promise<MdxNoteSummaryOutputWithMdxTransforms> {
        return mdxNoteSummaryWithMdxTransforms.parseAsync(this);
    }
    async zodParse(): Promise<ParsedMdxOutput> {
        return mdxNoteWithParsedLatex.parseAsync(this);
    }
    log(val: string | object): void {
        if (this.noLog) {
            return;
        }
        /* TODO: Move this to the external logger package. */
        console.log(typeof val === "string" ? val : JSON.stringify(val, null, 4));
    }
    whereUniqueInput(): Prisma.MdxNoteWhereUniqueInput {
        const d: Prisma.MdxNoteWhereUniqueInput = {
            id: this.id || -1,
        };
        return d;
    }
    whereInput(): Prisma.MdxNoteWhereUniqueInput {
        const d: Prisma.MdxNoteWhereUniqueInput = {
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

    canSave(): boolean {
        if (!this.title) return false;
        if (!this.rootRelativePath) return false;
        if (!this.raw) return false;
        return true;
    }

    createInput(
        autoSettings: AutoSettingProp,
        config: MinimalParsableAppConfigOutput,
        noteTypeId?: string,
    ): Prisma.MdxNoteCreateInput | undefined {
        if (!this.noteType) {
            if (noteTypeId) {
                this.noteType = noteTypeId;
            } else if (this.docTypeData) {
                this.noteType = this.docTypeData.docType || this.docTypeData.id;
            }
        }
        this.checkAutoProperties(autoSettings, config);
        if (!this.canSave()) {
            return undefined;
        }
        let docTypeData: undefined | AppConfigSchemaOutput["noteTypes"][number];
        if (this.docTypeData) {
            docTypeData = this.docTypeData;
        } else if (this.rootRelativePath) {
            docTypeData = getNoteTypeDataFromPath(this.rootRelativePath, config);
        }

        if (!docTypeData) {
            throw new Error(
                `Can not get href for mdx file. No docType data was found in createInput methodj.`,
            );
        }
        const href = this.getHref(docTypeData);
        if (!this.noteType) {
            throw new Error(
                `You tried to save a note with an undefined noteType. Check the processing of ${this.title}`,
            );
        }
        if (href && this.title && this.raw && this.rootRelativePath) {
            const d: Prisma.MdxNoteCreateInput = {
                rootRelativePath: this.rootRelativePath,
                noteType: this.noteType,
                content: this.formatted || this.raw,
                title: this.title,
                summary: this.summary,
                imageSrc: this.imageSrc,
                importantValues: this.importantValues,
                quickLink: this.quickLinkId,
                outgoingQuickLinks: this.outgoingQuickLinks,
                remoteUrl: this.remoteUrl,
                trackRemote: this.trackRemote,
                href,
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
            return d;
        }
    }

    importantValueDifferences(n: number, absoluteValue = true): number[] {
        return this.importantValues.map((u) =>
            absoluteValue ? Math.abs(n - u) : n - u,
        );
    }

    createArgs(
        autoSettings: AutoSettingWithRegex[] | undefined | null,
        config: Parameters<typeof this.createInput>[1],
        noteTypeId?: string,
    ): Prisma.MdxNoteCreateArgs | undefined {
        const ci = this.createInput(autoSettings || [], config, noteTypeId);
        if (ci && typeof ci !== "undefined") {
            const d: Prisma.MdxNoteCreateArgs = {
                data: ci,
            };
            return d;
        }
        return undefined;
    }

    connectOrCreateArgs(
        autoSettings: AutoSettingWithRegex[] | undefined | null,
        config: Parameters<typeof this.createInput>[1],
    ): Prisma.MdxNoteCreateOrConnectWithoutTagsInput | undefined {
        const ci = this.createInput(autoSettings || [], config);
        if (ci) {
            const d: Prisma.MdxNoteCreateOrConnectWithoutTagsInput = {
                where: this.whereUniqueInput(),
                create: ci,
            };
            return d;
        }
        return undefined;
    }

    upsertArgs(
        autoSettings: AutoSettingWithRegex[] | undefined | null,
        config: Parameters<typeof this.createInput>[1],
    ): Prisma.MdxNoteUpsertArgs | undefined {
        const ci = this.createInput(autoSettings || [], config);
        if (ci) {
            const d: Prisma.MdxNoteUpsertArgs = {
                where: this.whereUniqueInput(),
                create: ci,
                update: ci,
            };
            this.log(d);
            return d;
        }
        return undefined;
    }
    checkAutoProperties(
        autoSettings: AutoSettingWithRegex[] | undefined | null,
        config: Parameters<typeof globDoesMatch>[2],
    ): void {
        if (!this.rootRelativePath) return;
        const autoSets = getFlatAutoSettings(autoSettings || []);
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

    formatMermaidComponent(m: RegExpMatchArray): string | undefined {
        if (!m.groups?.content) return;
        return `
<Mermaid 
chart={\`
${m.groups.content}
\`}
`;
    }

    parseMermaidElement(content: string): string {
        const regex = /```mermaid\n(?<content>[^`]*)\n```/gm;
        let m;
        let c = content;
        do {
            m = regex.exec(c);
            if (m?.groups?.label && m.groups.videoId && m.groups.time) {
                c = `${c.slice(0, m.index)}${this.formatMermaidComponent(m)}${c.slice(m.index + m[0].length, c.length)}`;
            }
        } while (m);
        return c;
    }
    async _parseQuickLinks<T extends string | undefined>(
        content?: T,
    ): Promise<T extends string ? string : string | undefined> {
        this.log(`_parseQuickLinks: ${this.title}`);
        const l = content || this.formatted || this.raw;
        if (!l)
            return undefined as unknown as Promise<
                T extends string ? string : string | undefined
            >;
        const res = await this.parseQuickLinks(l);
        this.formatted = res.content;
        this.outgoingQuickLinks = this.outgoingQuickLinks.concat(res.links);
        return res.content || l;
    }
    static async parseMdxString(
        content: string,
        _opts: z.input<typeof fromMdxStringOptSchema>,
        _parseParams: z.input<typeof parseParamsSchema>,
    ): Promise<ReturnType<InstanceType<typeof MdxNote>["parse"]>> {
        const parsedNoteProps = mdxNoteFromStringPropsSchema.parse({
            raw: content,
        });
        const nt = new MdxNote(parsedNoteProps);
        const parserParams = parseParamsSchema.parse(_parseParams);
        /* if(opts?.bareAss){ */
        /*    return nt.parseBareAss() */
        /* } */
        return nt.parse(parserParams);
    }
    async applyStandardFrontMatter(applyIfAlreadySet = false): Promise<void> {
        if (!this.raw) {
            console.error(
                `Could not parse front matter in the applyStandardFrontMatter MdxNote method. No content was found.`,
            );
            return;
        }
        if (this.haveSetFrontMatter && !applyIfAlreadySet) {
            return;
        }
        const res = grayMatter(this.raw);
        const data = res.data as Partial<FrontMatterType>;
        await this.applyParsedFrontMatter(data, true);
    }
    async applyParsedFrontMatter(
        data: FrontMatterType<{
            citations?: BibEntry[]
            citationsListOrder?: string[],
            equationIds?: string[]
            definitions?: Definition[]
            outgoingQuickLinks?: string[]
        }>,
        setFrontMatterProperty = false,
    ): Promise<void> {
        if (data.title) {
            this.title = data.title;
        }
        if (data.id) {
            this.quickLinkId = data.id;
        }
        data.tags &&
            (this.tags = this.tags.concat(
                ArrayUtilities.beArray(data.tags).map((t) =>
                    typeof t === "string" ? new Tag({ value: t }) : (t as Tag),
                ),
            ));
        data.topics &&
            (this.topics = this.topics.concat(
                ArrayUtilities.beArray(data.topics).map((t) =>
                    typeof t === "string" ? new Topic({ value: t }) : (t as Topic),
                ),
            ));
        data.subjects &&
            (this.subjects = this.subjects.concat(
                ArrayUtilities.beArray(data.subjects).map((t) =>
                    typeof t === "string" ? new Subject({ value: t }) : (t as Subject),
                ),
            ));
        const existingCitationIds = this.citations.map((x) => x.id);
        if (data?.citations?.length) {
            for await (const citation of data.citations) {
                if (!existingCitationIds.includes(citation.id)) {
                    this.citations.push(citation);
                }
            }
        }
        if (
            data.citationsListOrder &&
            data.citationsListOrder.length === this.citations.length
        ) {
            this.citationsListOrder = data.citationsListOrder;
        } else {
            this.citationsListOrder = this.citations
                .sort((a, b) => (a.tempPageIndex || 1) - (b.tempPageIndex || 1))
                .map((c) => c.id);
        }
        if (data?.equationIds?.length) {
            for (const k of data.equationIds) {
                if (!this.equationIds.includes(k)) {
                    this.equationIds.push(k);
                }
            }
        }
        if (data?.definitions?.length) {
            const existingDefinitionLabels = this.definitions.map((x) => x.label);
            for (const d of data.definitions) {
                if (!existingDefinitionLabels.includes(d.label)) {
                    this.definitions.push(d);
                }
            }
        }
        if (data.outgoingQuickLinks?.length) {
            this.outgoingQuickLinks = ArrayUtilities.concatWithOptionalArray(
                this.outgoingQuickLinks,
                data.outgoingQuickLinks,
            );
        }
        if (data.equationIds?.length) {
            this.equationIds = this.equationIds.concat(data.equationIds);
        }
        data.sequentialKey && (this.sequentialKey = data.sequentialKey);
        data.sequential && (this.sequentialIndex = data.sequential);
        /* data.remoteUrl && (this.remoteUrl = data.remoteUrl); */
        data.importantValues && (this.importantValues = data.importantValues);
        this.haveSetFrontMatter = true;
        if (setFrontMatterProperty) {
            this.frontMatter = data;
        }
    }
    async parse(params: z.output<typeof parseParamsSchema>): Promise<string> {
        let c = this.formatted || this.raw;
        if (!c) return "";
        if (!this.haveSetFrontMatter) {
            await this.applyStandardFrontMatter();
        }
        const serverClient = await import("../../trpc/serverClient").then(
            (x) => x.serverClient,
        );
        const res = await params.parser({
            content: c,
            serverClient,
            appConfig: params.appConfig,
            docTypeData: params.docTypeData,
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
        if (typeof res.content === "string") {
            this.formatted = res.content;
            c = res.content;
        }
        if (res.data) {
            await this.applyParsedFrontMatter(res.data as FrontMatterType, true);
        }
        /* this.formatted = this.parseEquationTags(formatted); // Math package */
        /* this.equationIds = this.getEquationIds(this.formatted || this.raw); */
        return c;
    }

    citationIdList(): string[] {
        return this.citations.map((c) => c.id);
    }

    flattenForClient(): MdxNoteFlattened {
        const d: MdxNoteFlattened = {};
        return d;
    }

    sortCitationsByPageIndex(): void {
        const citations: typeof this.citations = [];
        this.citationsListOrder.forEach((k, i) => {
            const cit = this.citations.find(
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
    async populateFromRemote(): Promise<void> {
        if (!this.remoteUrl) return;
        const url = this.remoteUrl;
        const res = await axios.get(
            url.includes("github") ? convertGithubUrlToRawContentUrl(url) : url,
        );
        if (typeof res.data === "string") {
            this.raw = res.data;
        }
    }

    setNoteType(docTypeData: AppConfigSchemaOutput["noteTypes"][number]): void {
        this.noteType = docTypeData.docType;
    }

    static async fromMdxString(
        props: z.input<typeof mdxNoteFromStringPropsSchema>,
        _opts: z.input<typeof fromMdxStringOptSchema> | undefined,
        _parseParams: z.input<typeof parseParamsSchema>,
    ): Promise<MdxNote> {
        const parsed = mdxNoteFromStringPropsSchema.parse(props);
        const opts = fromMdxStringOptSchema.parse(_opts || {});
        const parseParams = parseParamsSchema.parse(_parseParams);
        const note = new MdxNote(parsed);
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

    static fromPrisma(item: Partial<MdxNotePropsInput>): MdxNote {
        const parsed = mdxNotePropsSchema.parse(item);
        const newNote = new MdxNote(parsed);
        return newNote;
    }

    static asIntriguingValueSummary(
        item: MdxNoteIntriguingValSummaryInput,
    ): MdxNote {
        const parsed = mdxNoteIntriguingValSummaryPropsSchema.parse(item);
        const n = new MdxNote(parsed);
        return n;
    }

    static asSummary(_item: MdxNoteSummaryInput): MdxNote {
        const item = mdxNoteSummaryPropSchema.parse(_item);
        const n = new MdxNote(item);
        return n;
    }

    static fromList(
        n: (MdxNote | PrismaMdxNote)[] | undefined | null,
    ): MdxNote[] {
        if (!n || n.length === 0) {
            return [] as MdxNote[];
        }
        return n.map((b) => (b instanceof MdxNote ? b : MdxNote.fromPrisma(b)));
    }
}

export type MdxNoteAsPlainObject = ReturnType<MdxNote["toPlainObject"]>;
