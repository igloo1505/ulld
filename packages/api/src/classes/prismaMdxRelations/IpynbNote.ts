import { ParsedAppConfig, getInternalConfig } from "@ulld/configschema";
import { universalStringToMathjax } from "@ulld/parsers";
import { getParentDirAndFilename } from "@ulld/utilities";
import { getUniversalQuery } from "../../actions";
import { BibEntry, BibEntryPrismaAcceptedTypes } from "./BibEntry";
import { IpynbPrismaReturnType, IpynbProtocol } from "./protocols/ipynbProtocol";
import { ReadingList } from "./readingList";
import { Tag } from "./tag";
import { Topic } from "./topic";
import { Prisma } from '@ulld/database'
import jsdom from 'jsdom'


export interface IpynbNoteParams {
    id?: number | undefined | null
    title?: string | undefined | null
    href?: string | undefined | null
    tags?: string[] | undefined | null
    topics?: string[] | undefined | null
    citations?: (string | BibEntry | BibEntryPrismaAcceptedTypes)[] | undefined | null
    importantValues?: number[] | undefined | null
    outgoingQuickLinks?: string[] | undefined | null
    outputPath?: string | undefined | null
    htmlOutput?: string | undefined | null
    raw?: string | undefined | null
    rootRelativePath: string
    notebook_preExecute?: string | undefined | null
    bookmarked?: boolean | undefined | null
    readingList?: (ReadingList)[] | undefined | null
    firstSync?: Date | string | undefined | null
    lastSync?: Date | string | undefined | null
}

export const defaultIpynbNoteParams: Omit<IpynbNoteParams, "rootRelativePath"> = {
    id: undefined,
    title: undefined,
    href: undefined,
    tags: [],
    topics: [],
    citations: [],
    importantValues: [],
    outgoingQuickLinks: [],
    readingList: [],
    outputPath: undefined,
    htmlOutput: undefined,
    notebook_preExecute: undefined,
    bookmarked: false,
    firstSync: new Date(),
    lastSync: new Date(),
}


export class IpynbNote extends IpynbProtocol {
    id?: number
    title?: string
    latexTitle?: string
    href?: string
    tags: Tag[] = []
    topics: Topic[] = []
    citations: BibEntry[] = []
    importantValues: number[] = []
    outgoingQuickLinks: string[] = []
    outputPath?: string
    htmlOutput?: string
    rootRelativePath: string
    notebook_preExecute?: string
    bookmarked: boolean = false
    firstSync?: Date | string
    lastSync?: Date | string
    readingList: ReadingList[] = []
    ftExtension: string = ".ipynb"
    isProtected?: boolean
    raw?: string
    constructor(params: IpynbNoteParams, _config?: ParsedAppConfig) {
        const config = _config || getInternalConfig()
        super(params.rootRelativePath, ".ipynb")
        this.rootRelativePath = params.rootRelativePath
        for (const k in params) {
            /// @ts-ignore
            this[k as keyof typeof this] = typeof params[k as keyof typeof params] === undefined ? defaultIpynbNoteParams[k as keyof typeof defaultIpynbNoteParams] : params[k as keyof typeof params]
            if (this.tags.length > 0) {
                this.tags = Tag.fromList(this.tags || [])
            }
            if (this.citations.length > 0) {
                this.citations = BibEntry.fromList(this.citations || [])
            }
            if (this.readingList.length > 0) {
                this.readingList = ReadingList.fromList(this.readingList || [])
            }
            if (this.topics.length > 0) {
                this.topics = Topic.fromList(this.topics || [])
            }
        }
        this.href = `${this.getHref()}${config.filetypeSpecificAppendices[".ipynb"]}`
        this.setInitialDataFromParameters()
    }
    setInitialDataFromParameters() {
        // TODO: Come back here when you figure out how to add a parameter cell in a notebook.
    }
    canCreate() {
        return [
            Boolean(this.rootRelativePath),
            Boolean(this.outputPath),
            Boolean(this.href)
        ].every((a) => a)
    }
    private _parseTags() {
        if (!this.htmlOutput) return
        let res = this.parseTags(this.htmlOutput)
        this.htmlOutput = res.content
        this.tags = this.tags.concat(res.results.map((t) => new Tag(t)))
    }
    private _parseVideoTimeLinks() {
        if (!this.htmlOutput) return
        let res = this.parseVideoTimeLinks(this.htmlOutput)
        this.htmlOutput = res.content
    }
    private async _parseQuickLinks() {
        if (!this.htmlOutput) return
        let res = await this.parseQuickLinks(this.htmlOutput)
        this.htmlOutput = res.content
        this.outgoingQuickLinks = this.outgoingQuickLinks.concat(res.links)
    }
    getPseudoDom() {
        return new jsdom.JSDOM(this.htmlOutput)
    }
    applySyntaxHighlighting() {
        let dom = this.getPseudoDom()
        dom.window.document.querySelectorAll(".")
    }
    async parse() {
        // FIX: In order for this to work, only markdown cells need to be selected from htmlOutput. Handle that at some point, but not a priority for now.
        // this._parseTags()
        // this._parseVideoTimeLinks()
        // // if (this.citations.length === 0) {
        // //     await this.parseCitations()
        // // }
        // await this._parseQuickLinks()
        await this.parseLatexTitle()
    }
    async readFile() {
        let query = await getUniversalQuery("getUtf8File")
        this.htmlOutput = query(this.rootRelativePath)
        console.log("Read from file system:")
        console.log(this.htmlOutput)
    }
    getGeneratedPath(rootRelative: boolean = true, _config?: ParsedAppConfig): string | null {
        const config = _config || getInternalConfig()
        if (!this.rootRelativePath) {
            console.error('No root relative path found while generating path for ipynb note')
            return null
        }
        let d = getParentDirAndFilename(this.rootRelativePath as string, true, config.fsRoot)
        return rootRelative ? `generated/${d.parent}/${d.filename.slice(0, d.filename.lastIndexOf("."))}.html` : `${config.fsRoot}/generated/${d.parent}${d.filename.slice(0, d.filename.lastIndexOf("."))}`
    }
    createInput() {
        let d: Prisma.IpynbCreateInput = {
            title: this?.title || this.rootRelativePath as string,
            importantValues: this.importantValues,
            href: this.href as string,
            outgoingQuickLinks: this.outgoingQuickLinks,
            rootRelativePath: this.rootRelativePath as string,
            outputPath: this.outputPath as string,
            htmlOutput: Buffer.from(this.htmlOutput as string, "utf-8"),
            notebook_preExecute: this.notebook_preExecute,
            bookmarked: this.bookmarked,
            firstSync: this.firstSync,
            lastSync: new Date(),
            raw: Buffer.from(this.raw as string, "utf-8"),
            ...(this.latexTitle && { latexTitle: this.latexTitle }),
            ...(typeof this.isProtected === "boolean" && { isProtected: this.isProtected }),
            // tags: {
            //     connectOrCreate: this.tags.map((t) => t.connectOrCreateArgs())
            // },
            // topics: {
            //     connectOrCreate: this.topics.map((t) => t.connectOrCreateArgs())
            // },
            // citations: {
            //     connectOrCreate: this.citations.map((c) => c.connectOrCreateArgs())
            // },
            // readingList: {
            //     connectOrCreate: this.readingList.map((r) => r.connectOrCreateArgs())
            // }
        }
        return d
    }
    createArgs() {
        if (!this.canCreate()) return null
        let d: Prisma.IpynbCreateArgs = {
            data: this.createInput()
        }
        return d
    }
    whereUniqueInput(usePath: boolean = false) {
        let d: Prisma.IpynbWhereUniqueInput = {
            ...(Boolean(this.id && !usePath) ? { id: this.id } : { rootRelativePath: this.rootRelativePath })
        }
        return d
    }
    whereInput(): Prisma.IpynbWhereUniqueInput {
        return {
            rootRelativePath: this.rootRelativePath
        }
    }
    connectOrCreateArgs() {
        let d: Prisma.IpynbCreateOrConnectWithoutTagsInput = {
            where: this.whereUniqueInput(),
            create: this.createInput(),
        }
        return d
    }

    async parseLatexTitle() {
        const di = this?.title?.indexOf("$")
        if (!this.title || di === -1 || di === this.title.lastIndexOf("$")) return
        let title = await universalStringToMathjax(this.title, { inline: true })
        // TODO: This isn't currently being used, but would need to handle style sheet here as well as in the mdxNote component
        this.title = typeof title === "string" ? title : title.content
    }
    upsertArgs() {
        let ci = this.createInput()
        let d: Prisma.IpynbUpsertArgs = {
            where: this.whereUniqueInput(),
            create: ci,
            update: ci
        }
        return d
    }
    static fromPrisma(item: NonNullable<IpynbPrismaReturnType>): IpynbNote {
        let note = new IpynbNote({
            ...item,
            htmlOutput: item.htmlOutput.toString("utf-8"),
            raw: item.raw ? item.raw.toString("utf-8") : undefined,
            tags: item.tags.map((t) => t.value),
            topics: item.topics.map((t) => t.value),
            citations: item.citations.length > 0 ? BibEntry.fromList(item.citations) : [],
            readingList: item.readingList.length > 0 ? ReadingList.fromList(item.readingList) : []

        })
        return note
    }
    static fromList(items: (IpynbPrismaReturnType | undefined | null)[]): IpynbNote[] {
        let d: IpynbNote[] = []
        for (const k of items) {
            if (k) {
                d.push(IpynbNote.fromPrisma(k))
            }
        }
        return d
    }
}
