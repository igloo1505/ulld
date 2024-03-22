import matter from "gray-matter"
import axios from "axios"
import { Subject } from "./subject";
import { Topic } from "./topic";
import { MdxNoteProtocol, prismaMdxNoteSummaryZodSchema, PrismaMdxNoteSummary, PrismaMdxNoteWithKeys, prismaMdxNoteSummaryZodSchemaPreOutput } from "./protocols/mdxNote";
import { Tag } from "./tag";
import { BibEntry, BibEntryPrismaAcceptedTypes } from "./BibEntry";
import { DocTypes } from "@ulld/configschema/configUtilityTypes/docTypes";
import { getInternalConfig } from "@ulld/configschema/zod/getInternalConfig";
import { ParsedAppConfig } from "@ulld/configschema/types";
import { getNoteTypeFromPath, getRootRelativePath } from "@ulld/configschema/configUtilityTypes/general";
import { zodDocTypeInput } from "@ulld/configschema/zod/documentConfigSchema";
import { ParsableExtension } from "./zod/general";
import { SequentialList } from "./SequentialList";
import { Definition } from "./definition";
import { ensureDate } from "../data/calendarAndDate";
import { IntriguingValueSummary } from "../search/noteFilter";
import { getUniversalQuery } from "../../actions/universal/getUniversalClient";
import { MdxNotePlainObject, mdxNoteZodObject, mdxNoteWithParsedLatex } from "../../schemas/search/parsing";
import { serverClient } from "../../trpc/serverClient";
import { AutoSettingWithRegex } from "../../trpc/types.d";
import { MdxNoteWithAll } from "../../trpcTypes/main";
import { ValueSearchTableItem } from "../../trpcTypes/valueTableSearch";
import { universalStringToMathjax } from "@ulld/parsers/universalStringToMdx";
import { getFlatAutoSettings } from "../../trpcInternalMethods/settings/autoSettings/getFlattenedAutoSettings";
import { globDoesMatch } from "../../trpcInternalMethods/settings/autoSettings/globDoesMatch";
import { withForwardSlash } from "@ulld/utilities/utils/fsUtils";
import { replaceRecursively } from "@ulld/utilities/utils/general";

/* TODO: Create a field saving the components to include for each note based on a regex test ahead of time so this query doesn't need to be ran on each load. Make this optional in the appConfig */





// TODO: Implement this to pass class data to client components without functions causing an issue
export interface MdxNoteFlattened {
}


export type FromMdxStringParams = ({
    content: string,
    urlSlug: string,
    rootRelativePath?: undefined,
    docType?: DocTypes
    getBookmarkState?: boolean
}) | ({
    content: string,
    urlSlug?: undefined,
    rootRelativePath: string,
    docType?: DocTypes | undefined
    getBookmarkState?: boolean
})


interface TableStyles {
    fullWidth?: boolean
    text?: "base" | "lg" | "xl" | "small"
    math?: "base" | "lg" | "xl" | "small"
    tableCenter?: boolean
    textCenter?: boolean
    headingCenter?: boolean
    expand?: boolean
    float?: "right" | "left"
    noMax?: boolean
}



export interface InternalMdxNote extends Omit<PrismaMdxNote, "id"> {
    id?: number
    tags: string[]
    citations: string[]
    subjects: string[]
    topics: string[]
}



/* RESUME: Come back and parse ```mermaid syntax and replace with the appropriate params. */
export class MdxNote extends MdxNoteProtocol {
    id: number | undefined
    title: string
    latexTitle?: string
    summary?: string | null
    raw: string
    floatImages?: boolean = false
    formatted?: string
    citations: BibEntry[] = []
    topics: Topic[] = []
    subjects: Subject[] = []
    definitions: Definition[] = []
    tags: Tag[]
    importantValues: number[] = []
    quickLinkId?: string
    href?: string
    citationsListOrder: string[] = []
    outgoingQuickLinks: string[] = []
    equationIds: string[] = []
    ftExtension: ParsableExtension = ".mdx"
    isProtected?: boolean | null
    sequentialKey?: string
    sequentialIndex?: number
    frontMatter?: ZodFrontMatterOutput
    remoteUrl?: string | null
    trackRemote: boolean = true
    noLog: boolean = true
    saveFormatted: boolean = getInternalConfig().database.storeFormatted
    constructor(id: number | undefined = undefined, public rootRelativePath: string, public noteType: DocTypes | undefined, raw: string, formatted: string | null = null, subject: (Subject | PrismaSubject)[] | undefined | null = [], title: string | undefined = undefined, summary: string | null = null, topics: (Topic | PrismaTopic)[] | undefined = [], citations: BibEntryPrismaAcceptedTypes[] | undefined | null = [], tags: (Tag | PrismaTag)[] | undefined | null = [], public imageSrc: string | null | undefined = null, public bookmarked: boolean | undefined = undefined, public firstSync: Date | string | null = null, public lastSync: Date | string | null = null, isProtected?: boolean | null, citationsListOrder?: string[]) {
        super(rootRelativePath, ".mdx")
        if (id) {
            this.id = id
        }
        let fm = raw ? matter(raw) : undefined
        const _matter = fm?.data ? zodFrontMatterObject.parse(fm.data as FrontMatterType) : undefined
        this.citationsListOrder = citationsListOrder || []
        this.formatted = formatted || fm?.content
        this.raw = fm?.content || raw
        this.title = title || _matter?.title as string
        this.summary = summary || _matter?.summary
        if (_matter?.created) {
            this.firstSync = dateOrDefault(_matter.created, null)
        }
        if (_matter?.updated) {
            this.lastSync = dateOrDefault(_matter.updated, null)
        }
        if (_matter?.importantValues) {
            this.importantValues = _matter.importantValues
        }
        if (_matter?.id) {
            this.quickLinkId = _matter.id
        }
        if (_matter?.float) {
            this.floatImages = true
        }
        if (_matter?.protected || isProtected) {
            this.isProtected = _matter?.protected || isProtected
        }
        if (_matter?.sequentialKey) {
            this.sequentialKey = _matter.sequentialKey
        }
        if (_matter?.sequential) {
            this.sequentialIndex = _matter.sequential
        }
        if (_matter?.remote?.url) {
            this.remoteUrl = _matter.remote.url
        }
        if (_matter?.remote?.track !== undefined) {
            this.trackRemote = _matter.remote.track
        }
        if (_matter?.topics) {
            let t = Array.isArray(_matter.topics) ? _matter.topics : [_matter.topics]
            this.topics = this.topics.concat(t.map((t) => new Topic(typeof t === "string" ? t : `${t}`)))
        }
        if (_matter?.subjects) {
            let t = Array.isArray(_matter.subjects) ? _matter.subjects : [_matter.subjects]
            this.subjects = this.subjects.concat(t.map((t) => new Subject(typeof t === "string" ? t : `${t}`)))
        }
        if (_matter) {
            this.frontMatter = _matter
        }
        this.raw = raw
        this.citations = BibEntry.fromList(citations)
        this.topics = Topic.fromList(topics)
        this.subjects = Subject.fromList(subject)
        this.tags = Tag.fromList(tags).filter((t) => t.value !== "")
    }
    toPlainObject(partial?: boolean | Partial<Record<keyof MdxNotePlainObject, true>>) {
        return partial ? typeof partial == "boolean" ? mdxNoteZodObject.partial().parse(this) : mdxNoteZodObject.partial(partial).parse(this) : mdxNoteZodObject.parse(this)
    }
    async zodSummaryParse() {
        return await prismaMdxNoteSummaryZodSchema.parseAsync(this)
    }
    async zodParse() {
        return await mdxNoteWithParsedLatex.parseAsync(this)
    }
    async getDatabaseCitation(id: string[]) {
        const query = await getUniversalQuery("getBibCitation")
        const citations = await query(id)
        return citations as Awaited<ReturnType<typeof serverClient["bibliography"]["getBibCitation"]>>
    }
    async parseCitations() {
        const regex = /\[@(?<value>[\w|\d|\.|\-|_|\+|\=|\$|\!|\%|\*|\&]*)\]/gm
        let results: { value: string, length: number, index: number }[] = []
        let c = this.formatted || this.raw
        let m;
        do {
            m = regex.exec(c);
            if (m && m.groups?.value) {
                results.push({ value: m.groups.value, index: m.index, length: m[0].length })
            }
        } while (m);
        let fr: { htmlCitation: string, id: string, pageIndex: number }[] = []
        const rList = results.map((r) => r.value.toLowerCase())
        const citations = await this.getDatabaseCitation(rList)
        for (const k of citations) {
            const rIndex = rList.indexOf(k.id.toLowerCase())
            const result = results.at(rIndex)
            if (result) {
                let _link = this.formatCitation(k.id, rIndex)
                c = replaceRecursively(c, new RegExp(`\\[@${result.value}\\]`, "gmi"), _link)
                if (k.htmlCitation) {
                    fr.push({
                        htmlCitation: k.htmlCitation,
                        id: k.id,
                        pageIndex: rIndex
                    })
                } else {
                    console.log(`No htmlCitation found for ${k.id}`)
                }
            }
        }
        this.citations = this.citations.concat(fr.map((c) => new BibEntry(c?.id, { htmlCitation: c?.htmlCitation }, c.pageIndex)))
        this.citationsListOrder = this.citations.sort((a: any, b: any) => a.tempPageIndex - b.tempPageIndex).map((c) => c.id)
        this.formatted = c
    }
    log(val: string | object) {
       if(this.noLog) {
            return
        } 
        console.log(typeof val === "string" ? val : JSON.stringify(val, null, 4))
    }
    whereUniqueInput() {
        let d: Prisma.MdxNoteWhereUniqueInput = {
            id: this.id
        }
        return d
    }
    whereInput() {
        let d: Prisma.MdxNoteWhereUniqueInput = {
            id: this.id
        }
        return d
    }
    checkIfExistsWithoutId(): Prisma.MdxNoteWhereInput {
        return {
            title: this.title,
            content: this.raw
        }
    }

    async parseLatexTitle() {
        const di = this.title.indexOf("$")
        if (di === -1 || di === this.title.lastIndexOf("$")) return
        /* BUG: This will need to be changed to use only svg output unless styles are appended. Check where this is used to make sure styles aren't being appended for no reason. */
        let _title = await universalStringToMathjax(this.title, { inline: true })
        this.latexTitle = typeof _title === "string" ? _title : _title.content
    }

    createInput(autoSettings: AutoSettingWithRegex[] = [], config: ParsedAppConfig): Prisma.MdxNoteCreateInput | undefined {
        this.checkAutoProperties(autoSettings, config)
        let href = this.getHref()
        if (!this.noteType) {
            throw new Error(`You tried to save a note with an undefined noteType. Check the processing of ${this.title}`)
        }
        if (href) {
            let d: Prisma.MdxNoteCreateInput = {
                rootRelativePath: this.rootRelativePath,
                noteType: this.noteType,
                content: this.raw,
                title: this.title,
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
                    connectOrCreate: this.subjects.map((s) => s.connectOrCreateArgs())
                },
                topics: {
                    connectOrCreate: this.topics.map((t) => t.connectOrCreateArgs())
                },
                tags: {
                    connectOrCreate: this.tags.filter(t => t.value !== "").map((t) => t.connectOrCreateArgs())
                },
                citations: {
                    connect: this.citations.map((c) => c.connectArgs())
                },
                citationsListOrder: this.citationsListOrder,
                ...(this.sequentialKey && {
                    sequentialList: {
                        connectOrCreate: new SequentialList(this.sequentialKey).connectOrCreateArgs()
                    },
                    sequentialIndex: this.sequentialIndex,
                }),
                ...(this.bookmarked !== undefined && { bookmarked: this.bookmarked }),
                ...(this.saveFormatted && { formatted: this.formatted }),
                ...(this.equationIds.length > 0 && {
                    equations: {
                        connect: this.equationIds.map((eq) => ({
                            equationId: eq
                        }))
                    }
                }),
                ...(this.definitions.length > 0 && {
                    definitions: {
                        connectOrCreate: this.definitions.map((d) => d.connectOrCreateArgs())
                    }
                }),
                ...(this.firstSync && {
                    firstSync: this.firstSync
                }),
                ...(this.lastSync && {
                    lastSync: this.lastSync
                })
            }
            if (this.definitions.length > 0) {
                // BUG: Come back here and handle the definitions issue. They're being parsed correctly but aren't being saved for some reason. The development server is almost useless at this point with such a big app.
                // TODO: Also add a page to edit the label property for different definitions directly in the UI so a single word id can be replaced with something grammatically correct.
                console.log("creating with definitions. input: ", JSON.stringify(d, null, 4))
            }
            return d
        } else {
            return
        }
    }

    importantValueDifferences(n: number, absoluteValue: boolean = true) {
        return this.importantValues.map((u) => absoluteValue ? Math.abs(n - u) : n - u)
    }

    createArgs(autoSettings: AutoSettingWithRegex[] = [], config: ParsedAppConfig) {
        let ci = this.createInput(autoSettings, config)
        if (ci && ci !== undefined) {
            let d: Prisma.MdxNoteCreateArgs = {
                data: ci as Prisma.MdxNoteCreateInput
            }
            return d
        } else {
            return undefined
        }
    }

    connectOrCreateArgs(autoSettings: AutoSettingWithRegex[] = [], config: ParsedAppConfig) {
        let ci = this.createInput(autoSettings, config)
        if (ci) {
            let d: Prisma.MdxNoteCreateOrConnectWithoutTagsInput = {
                where: this.whereUniqueInput(),
                create: ci as Prisma.MdxNoteCreateInput
            }
            return d
        } else {
            return undefined
        }
    }

    upsertArgs(autoSettings: AutoSettingWithRegex[] = [], config: ParsedAppConfig) {
        const ci = this.createInput(autoSettings || [], config)
        if (ci) {
            let d: Prisma.MdxNoteUpsertArgs = {
                where: this.whereUniqueInput(),
                create: ci as Prisma.MdxNoteCreateInput,
                update: ci as Prisma.MdxNoteCreateInput
            }
            this.log(d)
            return d
        } else {
            return undefined
        }
    }
    checkAutoProperties(autoSettings: AutoSettingWithRegex[] = [], config: ParsedAppConfig) {
        if (!this.rootRelativePath) return
        let autoSets = getFlatAutoSettings(autoSettings)
        for (const t of autoSets.autoTags) {
            /* if (globToRegExp(t.path).test(this.rootRelativePath)) { */
            if (globDoesMatch(t.glob, this.rootRelativePath, config)) {
                this.tags.push(new Tag(t.value))
            }
        }
        /* for (const t of asArray(internalConfig.autoSubject).concat(autoSettings.filter((s) => s.type === "subject"))) { */
        for (const t of autoSets.autoSubjects) {
            if (globDoesMatch(t.glob, this.rootRelativePath, config)) {
                this.subjects.push(new Subject(t.value))
            }
        }
        for (const t of autoSets.autoTopics) {
            if (globDoesMatch(t.glob, this.rootRelativePath, config)) {
                this.topics.push(new Topic(t.value))
            }
        }
    }

    formatMermaidComponent(m: RegExpMatchArray) {
        if (!m.groups?.content) return
        return `
<Mermaid 
chart={\`
${m.groups.content}
\`}
`
    }

    parseMermaidElement(content: string) {
        let regex = /```mermaid\n(?<content>[^`]*)\n```/gm
        let m;
        let c = content
        do {
            m = regex.exec(c)
            if (m && m.groups?.label && m.groups?.videoId && m.groups?.time) {
                c = `${c.slice(0, m.index)}${this.formatMermaidComponent(m)}${c.slice(m.index + m[0].length, c.length)}`
            }
        } while (m);
    }

    private _parseTags() {
        this.log(`_parseTags: ${this.title}`)
        if (this.isProtected) return
        let res = this.parseTags(this.formatted || this.raw)
        this.formatted = res.content
        this.tags = this.tags.concat(res.results.map((t) => new Tag(t)))
    }
    private _parseVideoTimeLinks() {
        this.log(`_parseVideoTimelinks: ${this.title}`)
        let res = this.parseVideoTimeLinks(this.formatted || this.raw)
        this.formatted = res.content
    }
    private async _parseQuickLinks() {
        this.log(`_parseQuickLinks: ${this.title}`)
        let res = await this.parseQuickLinks(this.formatted || this.raw)
        this.formatted = res.content
        this.outgoingQuickLinks = this.outgoingQuickLinks.concat(res.links)
    }
    async parse() {
        this.formatted = this.parseLinkShortcuts(this.formatted || this.raw)
        this.formatted = this.parseEquationTags(this.formatted || this.raw)
        let { content, definitions } = this.parseDefinitionTags(this.formatted || this.raw)
        this.formatted = content
        if (definitions && definitions.length > 0) {
            this.definitions = definitions.map((d) => new Definition({ id: d.id, content: d.content, label: d.label, mdxNoteId: this.id }))
        }
        this._parseTags()
        this._parseVideoTimeLinks()
        this.equationIds = this.getEquationIds(this.formatted || this.raw)
        await this.parseCitations()
        await this._parseQuickLinks()
        if (!this.isProtected) {
            await this.parseLatexTitle()
        }
    }

    citationIdList() {
        return this.citations.map((c) => c.id)
    }


    flattenForClient(): MdxNoteFlattened {
        let d: MdxNoteFlattened = {}
        return d
    }

    sortCitationsByPageIndex() {
        let citations: typeof this.citations = []
        this.citationsListOrder.forEach((k, i) => {
            let cit = this.citations.find((c) => c.id.toLowerCase() === k.toLowerCase())
            if (cit) {
                cit.tempPageIndex = i
                citations.push(cit)
            }
        })
        this.citations = citations
    }

    toValueSearchTableItem(): ValueSearchTableItem {
        return {
            href: this.href || "",
            title: this.title,
            rootRelativePath: this.rootRelativePath,
            noteType: this.noteType || "none",
            importantValues: this.importantValues,
            firstSync: ensureDate<null>(this.firstSync, "null"),
            lastSync: ensureDate<null>(this.lastSync, "null")
        } satisfies ValueSearchTableItem
    }

    async populateFromRemote() {
        if (!this.remoteUrl) return
        let url = this.remoteUrl
        let res = await axios.get(url.includes("github") ? convertGithubUrlToRawContentUrl(url) : url)
        this.raw = res.data
    }

    setNoteType(config?: ParsedAppConfig) {
        if (!this.rootRelativePath) return
        this.noteType = getNoteTypeFromPath(this.rootRelativePath as string, config)?.docType as DocTypes | undefined
    }


    /* PERFORMANCE: Come back and handle this with a modified zod class instead of this half assed conditional config. Figure out ***exactly*** what will be passed in and make that shit required. */
    static async fromMdxString({ content, urlSlug, rootRelativePath, docType, getBookmarkState }: FromMdxStringParams): Promise<MdxNote> {
        const fm = matter(content)
        const _matter = fm.data as FrontMatterType
        let dt = docType ? zodDocTypeInput.parse(docType) : getNoteTypeFromPath(rootRelativePath as string)?.docType
        const rll = withForwardSlash(rootRelativePath || getRootRelativePath(urlSlug as string, dt as DocTypes))
        let note = new MdxNote(undefined, rll, dt as DocTypes, content, undefined, undefined, _matter.title || "--")
        if (getBookmarkState) {
            const bookmarkQuery = await getUniversalQuery("rootRelativePathIsBookmarked", "search", "query")
            /* HACK: This .mdx hardcoded file extension needs to be replaced with a returned value from trpc. This will work for now, but as this app grows to support general markdown files and other filetypes that might need similar functionality *assuming* the file to be a .mdx filetype will lead to issues later on. */
            const isBookmarked = rll ? await bookmarkQuery(`${rll}.mdx`) : false
            note.bookmarked = isBookmarked
        }
        await note.parse()
        return note
    }

    static fromPrisma(item: NonNullable<MdxNoteWithAll> | PrismaMdxNoteWithKeys) {
        let newNote = new MdxNote(item.id, item.rootRelativePath, item.noteType as DocTypes, item.content, item.formatted, item.subjects, item.title, item.summary, item.topics, item.citations, item.tags, item.imageSrc, item.bookmarked, item.firstSync, item.lastSync, item.isProtected, item.citationsListOrder)
        newNote.href = item.href
        if (item.definitions) {
            newNote.definitions = item.definitions.map((d) => new Definition({
                label: d.label,
                content: d.content,
                id: d.id,
                mdxNoteId: d.mdxNoteId
            }))
        }
        newNote.remoteUrl = item.remoteUrl
        newNote.trackRemote = item.trackRemote
        return newNote
    }

    static asIntriguingValueSummary(item: IntriguingValueSummary): MdxNote {
        let n = new MdxNote(item.id, item.rootRelativePath, item.noteType, "", "")
        n.title = item.title
        n.href = item.href
        n.firstSync = item.firstSync
        n.lastSync = item.lastSync
        n.importantValues = item.importantValues
        return n
    }

    static asSummary(_item: PrismaMdxNoteSummary): MdxNote {
        const item = prismaMdxNoteSummaryZodSchemaPreOutput.parse(_item)
        let n = new MdxNote(item.id,
            item.rootRelativePath,
            item.noteType,
            "",
            "",
            item.subjects ? item.subjects.map((s) => new Subject(s.value)) : undefined,
        )
        n.summary = item.summary
        n.title = item.title
        n.firstSync = item.firstSync
        n.lastSync = item.lastSync
        n.href = item.href as string | undefined || undefined
        n.tags = item.tags ? item.tags.map((t) => new Tag(t.value)) : []
        n.citations = item.citations ? item.citations.map((t) => BibEntry.fromPrisma({ id: t.id as unknown as string })) : []
        n.sequentialIndex = item.sequentialIndex || undefined
        return n
    }

    static fromList(n: (MdxNote | PrismaMdxNote)[] | undefined | null): MdxNote[] {
        if (!n || n.length === 0) return []
        return n.map((b) => b instanceof MdxNote ? b : MdxNote.fromPrisma(b as PrismaMdxNoteWithKeys))
    }
}


export type MdxNoteAsPlainObject = ReturnType<MdxNote["toPlainObject"]>
