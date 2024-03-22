import type { Prisma, BibEntry as PrismaBibEntry } from "@ulld/database/internalDatabaseTypes";
import { CitationGroup } from "./CitationGroup";
import { MdxNote } from "./MdxNote";
import { BibEntryProps, BibEntryProtocol } from "./protocols/bibEntry";
import { PartialReadingListEntry, ReadingList } from "./readingList";
import { Tag } from "./tag";
import { BibCore } from "./Bib";
import type { BibFilePresenter } from "bibtex";
import Link from "next/link";
import { formatSearchAllParams } from "@ulld/state/searchParamSchemas/utilities/formatSearchAllParams";
import { BibEntryReturned } from "../../trpcTypes/main";
import { getUniversalQuery } from "../../actions/universal/getUniversalClient";
import { replaceRecursively } from "@ulld/utilities/utils/general";

export type BibEntryPrismaAcceptedTypes = BibEntry | PrismaBibEntry | Partial<PrismaBibEntry> & { id: string } | PartialReadingListEntry['bibEntries'][number]



export interface BibEntrySummarySheetOutput {
    title: string
    author: string
    journal: string
    tags: string[]
}

export interface BibEntryDataTableOutput {
    id: string
    title: string
    author: string
    read: boolean
    added?: Date
}




export class BibEntry extends BibEntryProtocol {
    Bib: BibCore | undefined = undefined
    id: string
    htmlCitation?: string
    tempPageIndex?: number
    constructor(id: string, props: BibEntryProps, tempPageIndex?: number) {
        super()
        this.id = id.toLowerCase()
        if (props.Bib) {
            this.Bib = BibCore.fromPrisma(props.Bib)
        }
        this.htmlCitation = props.htmlCitation || undefined
        this.BibId = props.BibId
        this.readingList = props.readingList ? ReadingList.fromList(props.readingList) : []
        this.OwnWork = props.OwnWork
        this.ColleaguesWork = props.ColleaguesWork
        this.read = props.read || false
        this.PdfPath = props.PdfPath
        this.address = props.address
        this.annote = props.annote
        this.author = props.author
        this.booktitle = props.booktitle
        this.chapter = props.chapter
        this.crossref = props.crossref
        this.doi = props.doi
        this.edition = props.edition
        this.editor = props.editor
        this.email = props.email
        this.howpublished = props.howpublished
        this.institution = props.institution
        this.journal = props.journal
        this.month = props.month
        this.note = props.note
        this.number = props.number
        this.organization = props.organization
        this.pages = props.pages
        this.publisher = props.publisher
        this.school = props.school
        this.series = props.series
        this.title = props.title
        this.volume = props.volume
        this.type = props.type
        this.year = props.year
        this.numpages = props.numpages
        this.url = props.url
        this.issue = props.issue
        this.issn = props.issn
        this.abstract = props.abstract
        this.urldate = props.urldate
        this.keywords = props.keywords
        this.copyright = props.copyright
        props.added && (this.added = props.added)
        this.citationGroups = props.citationGroups ? CitationGroup.fromList(props.citationGroups) : []
        this.tags = Tag.fromList(props.tags)
        this.MdxNote = MdxNote.fromList(props.MdxNotes)
        this.tempPageIndex = typeof tempPageIndex === "number" ? tempPageIndex : undefined
    }
    toPlainObject() {
        return {
            id: this.id,
            htmlCitation: this.htmlCitation,
            BibId: this.BibId,
            readingList: this.readingList ? this.readingList.map((r) => r.toPlainObject()) : undefined,
            OwnWork: this.OwnWork,
            ColleaguesWork: this.ColleaguesWork,
            read: this.read,
            PdfPath: this.PdfPath,
            address: this.address,
            annote: this.annote,
            author: this.author,
            booktitle: this.booktitle,
            chapter: this.chapter,
            crossref: this.crossref,
            doi: this.doi,
            edition: this.edition,
            editor: this.editor,
            email: this.email,
            howpublished: this.howpublished,
            institution: this.institution,
            journal: this.journal,
            month: this.month,
            note: this.note,
            number: this.number,
            organization: this.organization,
            pages: this.pages,
            publisher: this.publisher,
            school: this.school,
            series: this.series,
            title: this.title,
            volume: this.volume,
            type: this.type,
            year: this.year,
            numpages: this.numpages,
            url: this.url,
            issue: this.issue,
            issn: this.issn,
            abstract: this.abstract,
            urldate: this.urldate,
            keywords: this.keywords,
            copyright: this.copyright,
            citationGroups: this.citationGroups ? this.citationGroups.map((g) => g.toPlainObject()) : undefined,
            tags: this.tags.map((t) => t.toPlainObject()),
            MdxNote: this.MdxNote,
            tempPageIndex: this.tempPageIndex,
        }
    }
    whereUniqueInput(): Prisma.BibEntryWhereUniqueInput {
        return {
            id: this.id
        }
    }
    whereInput(): Prisma.BibEntryWhereInput {
        return {
            id: this.id
        }
    }
    createInput(noBibId: boolean = false): Prisma.BibEntryCreateInput {
        let d: Prisma.BibEntryCreateInput = {
            id: this.id,
            ...(this.Bib && {
                Bib: {
                    connectOrCreate: this.Bib.connectOrCreateArgs()
                }
            }),
            ...(this.BibId && !noBibId && { BibId: this.BibId }),
            readingList: {
                connectOrCreate: this.readingList?.map((r) => r.connectOrCreateArgs())
            },
            OwnWork: this.OwnWork,
            ColleaguesWork: this.ColleaguesWork,
            read: this.read || false,
            PdfPath: this.PdfPath,
            address: this.address,
            annote: this.annote,
            author: this.author,
            booktitle: this.booktitle,
            chapter: this.chapter,
            crossref: this.crossref,
            doi: this.doi,
            edition: this.edition,
            editor: this.editor,
            email: this.email,
            howpublished: this.howpublished,
            institution: this.institution,
            journal: this.journal,
            month: this.month,
            note: this.note,
            number: this.number,
            organization: this.organization,
            pages: this.pages,
            publisher: this.publisher,
            school: this.school,
            series: this.series,
            title: this.title,
            volume: this.volume,
            type: this.type,
            year: this.year,
            numpages: this.numpages,
            url: this.url,
            issue: this.issue,
            issn: this.issn,
            abstract: this.abstract,
            urldate: this.urldate,
            keywords: this.keywords,
            copyright: this.copyright,
        }
        return d
    }
    createArgs(): Prisma.BibEntryCreateArgs {
        return {
            data: this.createInput()
        }
    }
    upsertArgs(noBibId: boolean = false): Prisma.BibEntryUpsertArgs {
        const a = this.createInput(noBibId)
        return {
            where: this.whereUniqueInput(),
            create: a,
            update: a
        }
    }
    connectOrCreateArgs(noBibId: boolean = false): Prisma.BibEntryCreateOrConnectWithoutBibInput {
        return {
            where: this.whereUniqueInput(),
            create: this.createInput(noBibId)
        }
    }
    connectArgs(): Prisma.BibEntryWhereUniqueInput {
        return this.whereUniqueInput()
    }
    tagList() {
        return this.tags.map((t) => t.value)
    }
    toSummarySheet(): BibEntrySummarySheetOutput {
        return {
            title: this.title || "N/A",
            author: this.author || "Unknown",
            journal: this.journal || "N/A",
            tags: this.tagList()
        }
    }
    toDataTable(): BibEntryDataTableOutput {
        return {
            id: this.id,
            title: this.title || "--",
            author: this.author || "--",
            read: this.read || false,
            added: this.added instanceof Date ? this.added : new Date(this.added)
        }
    }

    formatCitationForPageSpecificOutput(html: string, pageIndex: number) {
        let r = /<sup>[\d|\s]*<\/sup>/gm
        return replaceRecursively(html, r, `<sup>${pageIndex + 1}</sup>`)
    }
    toHtml(): React.ReactNode {
        if (this.htmlCitation && typeof this.tempPageIndex === "number") {
            let htmlContent = this.formatCitationForPageSpecificOutput(this.htmlCitation, this.tempPageIndex)
            return (
                <Link href={`/searchAll?${formatSearchAllParams({ citations: [this.id] })}`}>
                    <div id={`bib-${this.id}`} className={"flex flex-row justify-start items-start gap-4 text-sm text-gray-600 dark:text-gray-400"} key={`cit-${this.id}`} dangerouslySetInnerHTML={{ __html: htmlContent }} />
                </Link>
            )
        }
        return (<div key={`cit-${this.id}`}>
            {this.title}
        </div>)
    }
    static fromPrisma(item: BibEntryProps & { id: string }): BibEntry {
        return new BibEntry(item.id, item)
    }
    static fromFs(item: BibFilePresenter['entries_raw'][number], htmlCitation?: string): BibEntry {
        let d: BibEntryProps = {} as BibEntryProps
        for (const k in item.fields) {
            let v = item.getFieldAsString(k)
            if (v) {
                d[k] = typeof v === "string" ? v : String(v)
            }
        }
        let entry = new BibEntry(item._id, d)
        if (!entry.htmlCitation && htmlCitation) {
            entry.htmlCitation = htmlCitation
        }
        return entry
    }
    static async fromId(id: string): Promise<BibEntry | null> {
        const query = await getUniversalQuery("getBibEntry")
        let entry: BibEntryReturned = await query(id)
        if (entry) {
            return BibEntry.fromPrisma(entry)
        }
        return null
    }
    static fromFsList(items: BibFilePresenter['entries_raw']): BibEntry[] {
        return items.map((item) => BibEntry.fromFs(item))
    }
    static fromList(items: BibEntryPrismaAcceptedTypes[] | null | undefined): BibEntry[] {
        if (!items || items.length === 0) return []
        return items.map((item) => item instanceof BibEntry ? item : BibEntry.fromPrisma(item))
    }
}
