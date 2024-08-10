import type {
    Prisma,
    BibEntry as PrismaBibEntry,
} from "@ulld/database/internalDatabaseTypes";
import { CitationGroup } from "./CitationGroup";
import { MdxNote } from "./MdxNote";
import { BibEntryProps } from "./protocols/bibEntry";
import { PartialReadingListEntry, ReadingList } from "./readingList";
import { Tag } from "./tag";
import { BibCore } from "./Bib";
import type { BibFilePresenter } from "bibtex";
import { formatSearchAllParams } from "@ulld/state/searchParamSchemas/utilities/formatSearchAllParams";
import { getUniversalQuery } from "../../actions/universal/getUniversalClient";
import { replaceRecursively } from "@ulld/utilities/utils/general";
import { ParsedBibEntryProps, bibEntryPropsSchema } from "./schemas/general";
import Link from "next/link";
import { BibEntryReturned } from "../../trpcTypes/main";
import { Topic } from "./topic";
import { Subject } from "./subject";
import type { serverClient } from "../../trpc/serverClient";


type FromPrismaEntry = Awaited<ReturnType<typeof serverClient.bibliography.getBibEntry>> | Awaited<ReturnType<typeof serverClient.bibliography.getBib>>["entries"] | Awaited<ReturnType<typeof serverClient.bibliography.syncBib>>["entries"]

export type BibEntryPrismaAcceptedTypes =
    | BibEntry
    | PrismaBibEntry
    | (Partial<PrismaBibEntry> & { id: string })
    | PartialReadingListEntry["bibEntries"][number];

export interface BibEntrySummarySheetOutput {
    title: string;
    author: string;
    journal: string;
    tags: string[];
}

export interface BibEntryDataTableOutput {
    id: string;
    title: string;
    author: string;
    read: boolean;
    added?: Date;
}

export class BibEntry {
    Bib: BibCore | undefined = undefined;
    prismaEntry?: PrismaBibEntry;
    id: string;
    htmlCitation: string | null;
    tempPageIndex?: number | null;
    BibId?: number | null;
    readingList?: ReadingList[] | undefined | null = [];
    OwnWork?: boolean;
    ColleaguesWork?: boolean;
    read?: boolean;
    PdfPath?: string | null;
    address?: string | null;
    annote?: string | null;
    author?: string | null;
    booktitle?: string | null;
    chapter?: string | null;
    crossref?: string | null;
    doi?: string | null;
    edition?: string | null;
    editor?: string | null;
    email?: string | null;
    howpublished?: string | null;
    institution?: string | null;
    journal?: string | null;
    month?: string | null;
    note?: string | null;
    number?: string | null;
    organization?: string | null;
    pages?: string | null;
    publisher?: string | null;
    school?: string | null;
    series?: string | null;
    title?: string | null;
    volume?: string | null;
    type?: string | null;
    year?: string | null;
    numpages?: string | null;
    url?: string | null;
    issue?: string | null;
    issn?: string | null;
    abstract?: string | null;
    urldate?: string | null;
    keywords?: string | null;
    copyright?: string | null;
    added: Date | string = new Date();
    citationGroups: CitationGroup[] = [];
    tags: Tag[] = [];
    topics: Topic[] = [];
    subjects: Subject[] = [];
    MdxNotes: MdxNote[] | null = [];
    constructor(props: ParsedBibEntryProps, tempPageIndex?: number) {
        this.Bib = props.Bib;
        this.BibId = props.BibId;
        this.readingList = props.readingList;
        this.topics = props.topics;
        this.subjects = props.subjects;
        this.tags = props.tags;
        this.type = props.type;
        this.id = props.id;
        this.htmlCitation = props.htmlCitation;
        this.PdfPath = props.PdfPath;
        this.address = props.address;
        this.annote = props.annote;
        this.author = props.author;
        this.booktitle = props.booktitle;
        this.chapter = props.chapter;
        this.crossref = props.crossref;
        this.doi = props.doi;
        this.edition = props.edition;
        this.editor = props.editor;
        this.email = props.eail;
        this.howpublished = props.howpublished;
        this.institution = props.institution;
        this.journal = props.journal;
        this.month = props.month;
        this.note = props.note;
        this.number = props.number;
        this.organization = props.organization;
        this.pages = props.pages;
        this.publisher = props.publisher;
        this.school = props.school;
        this.series = props.series;
        this.title = props.title;
        this.volume = props.volume;
        this.year = props.year;
        this.numpages = props.numpages;
        this.url = props.url;
        this.issue = props.issue;
        this.issn = props.issn;
        this.abstract = props.abstract;
        this.urldate = props.urldate;
        this.keywords = props.keywords;
        this.copyright = props.copyright;
        this.read = props.read;
        this.OwnWork = props.OwnWork;
        this.ColleaguesWork = props.ColleaguesWork;
        this.added = props.added;
        this.id = props.id;
        this.citationGroups = props.citationGroups;
        this.tempPageIndex =
            typeof tempPageIndex === "number" ? tempPageIndex : undefined;
    }
    toPlainObject() {
        return {
            id: this.id,
            htmlCitation: this.htmlCitation,
            BibId: this.BibId,
            readingList: this.readingList
                ? this.readingList.map((r) => r.toPlainObject())
                : undefined,
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
            citationGroups: this.citationGroups
                ? this.citationGroups.map((g) => g.toPlainObject())
                : undefined,
            tags: this.tags.map((t) => t.toPlainObject()),
            MdxNote: this.MdxNotes,
            tempPageIndex: this.tempPageIndex,
        };
    }
    whereUniqueInput(): Prisma.BibEntryWhereUniqueInput {
        return {
            id: this.id,
        };
    }
    whereInput(): Prisma.BibEntryWhereInput {
        return {
            id: this.id,
        };
    }
    connectOrCreateArgsIfExists(){
        return {
            where: this.whereUniqueInput(),
            create: {
                id: this.id,
                ...(Boolean(this.readingList) && {
                    readingList: {
                        connectOrCreate: this.readingList?.map((r) =>
                            r.connectOrCreateArgs(),
                        ),
                    }
                }),
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
            },
        } satisfies Prisma.BibEntryCreateOrConnectWithoutBibInput;
    }
    connectOrCreateArgs(
        bibFileIds: string[],
        lowerCaseBibFileIds: string[],
    ): Prisma.BibEntryCreateOrConnectWithoutBibInput {
        const _id = bibFileIds[lowerCaseBibFileIds.indexOf(this.id)];
        let d: Prisma.BibEntryCreateOrConnectWithoutBibInput = {
            where: this.whereUniqueInput(),
            create: {
                id: _id,
                ...(Boolean(this.readingList) && {
                    readingList: {
                        connectOrCreate: this.readingList?.map((r) =>
                            r.connectOrCreateArgs(),
                        ),
                    }
                }),
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
            },
        };
        return d
    }
    createInput(noBibId: boolean = false): Prisma.BibEntryCreateInput {
        let d: Prisma.BibEntryCreateInput = {
            id: this.id,
            ...(this.Bib && {
                Bib: {
                    connectOrCreate: this.Bib.connectOrCreateArgs(),
                },
            }),
            ...(this.BibId && !noBibId && { BibId: this.BibId }),
            readingList: {
                connectOrCreate: this.readingList?.map((r) => r.connectOrCreateArgs()),
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
        };
        return d;
    }
    createArgs(): Prisma.BibEntryCreateArgs {
        return {
            data: this.createInput(),
        };
    }
    upsertArgs(noBibId: boolean = false): Prisma.BibEntryUpsertArgs {
        const a = this.createInput(noBibId);
        return {
            where: this.whereUniqueInput(),
            create: a,
            update: a,
        };
    }
    connectArgs(): Prisma.BibEntryWhereUniqueInput {
        return this.whereUniqueInput();
    }
    tagList() {
        return this.tags.map((t) => t.value);
    }
    toSummarySheet(): BibEntrySummarySheetOutput {
        return {
            title: this.title || "N/A",
            author: this.author || "Unknown",
            journal: this.journal || "N/A",
            tags: this.tagList(),
        };
    }
    toDataTable(): BibEntryDataTableOutput {
        return {
            id: this.id,
            title: this.title || "--",
            author: this.author || "--",
            read: this.read || false,
            added: this.added instanceof Date ? this.added : new Date(this.added),
        };
    }

    formatCitationForPageSpecificOutput(html: string, pageIndex: number) {
        let r = /<sup>[\d|\s]*<\/sup>/gm;
        return replaceRecursively(html, r, `<sup>${pageIndex + 1}</sup>`);
    }
    toHtml(): React.ReactNode {
        if (this.htmlCitation && typeof this.tempPageIndex === "number") {
            let htmlContent = this.formatCitationForPageSpecificOutput(
                this.htmlCitation,
                this.tempPageIndex,
            );
            return (
                <Link
                    href={`/searchAll?${formatSearchAllParams({ citations: [this.id] })}`}
                >
                    <div
                        id={`bib-${this.id}`}
                        className={
                            "flex flex-row justify-start items-start gap-4 text-sm text-gray-600 dark:text-gray-400"
                        }
                        key={`cit-${this.id}`}
                        dangerouslySetInnerHTML={{ __html: htmlContent }}
                    />
                </Link>
            );
        }
        return <div key={`cit-${this.id}`}>{this.title}</div>;
    }
    static fromPrisma(
        item: FromPrismaEntry,
    ): BibEntry {
        let parsed = bibEntryPropsSchema.parse(item);
        return new BibEntry(parsed);
    }
    static fromFs(
        item: BibFilePresenter["entries_raw"][number],
        bib: BibCore,
        htmlCitation?: string,
    ): BibEntry {
        let d: BibEntryProps = {
            htmlCitation,
            id: item._id
        } as BibEntryProps;
        for (const k in item.fields) {
            let v = item.getFieldAsString(k);
            if (v) {
                d[k] = typeof v === "string" ? v : String(v);
            }
        }
        let props = bibEntryPropsSchema.parse({
            ...d,
            type: item.type,
            Bib: bib,
            BibId: bib.id
        });
        let entry = new BibEntry(props);
        if (!entry.htmlCitation && htmlCitation) {
            entry.htmlCitation = htmlCitation;
        }
        return entry;
    }
    static async fromId(id: string): Promise<BibEntry | null> {
        const query = await getUniversalQuery("getBibEntry");
        let entry: BibEntryReturned = await query(id);
        if (entry) {
            /* let props = bibEntryPropsSchema.parse(entry) as ParsedBibEntryProps */
            return BibEntry.fromPrisma(entry);
        }
        return null;
    }
    static fromFsList(items: BibFilePresenter["entries_raw"]): BibEntry[] {
        let bib = new BibCore()
        return items.map((item) => BibEntry.fromFs(item, bib));
    }
    static fromList(
        items: BibEntryPrismaAcceptedTypes[] | null | undefined,
    ): BibEntry[] {
        if (!items || items.length === 0) return [];
        return items.map((item) => {
            if (item instanceof BibEntry) {
                return item;
            }
            let props = bibEntryPropsSchema.parse(item);
            return new BibEntry(props);
        });
    }
}
