import type { Prisma, ReadingList as PrismaReadingList, BibEntry as PrismaBibEntry } from "@ulld/database/internalDatabaseTypes"
import { ReadingListProtocol } from "../protocols/readingList"
import { BibEntry, BibEntryPrismaAcceptedTypes } from "./BibEntry";
import {MdxNote} from "./MdxNote"
import { readingListZodObject } from "../../../schemas/search/parsing";
import { ReadingListPropsOutput, bibEntryPropsSchema } from "./schemas/general";
import { IpynbNote } from "../IpynbNote";


export interface PartialReadingListEntry {
    bibEntries: {
        id: string;
        title: string | null;
        added: Date;
    }[]
    name: string;
    description: string | null;
    createdAt: Date;
}

export type AcceptedReadingListProps = PartialReadingListEntry | ReadingList | PrismaReadingList & { bibEntries?: undefined }



export class ReadingList {
    bibEntries: BibEntry[] = []
    name: string
    description?: string | null
    mdxNotes: MdxNote[] = []
    createdAt: Date
    lastUpdate: Date | undefined | null
    ipynbNotes: IpynbNote[]
    constructor(props: ReadingListPropsOutput) {
    this.name = props.name
    this.description = props.description
    this.bibEntries = bibEntryPropsSchema.array().parse(props.bibEntries).map((a) => new BibEntry(a))
    this.mdxNotes = props.mdxNotes
    this.ipynbNotes = props.ipynbNotes
    this.createdAt = props.createdAt
    this.lastUpdate = props.lastUpdate
    }

    toPlainObject() {
        return readingListZodObject.parse(this)
    }

    whereInput() {
        let d: Prisma.ReadingListWhereInput = {
            name: this.name
        }
        return d
    }
    createInput() {
        let d: Prisma.ReadingListCreateInput = {
            name: this.name,
            description: this.description || null,
            bibEntries: {
                connectOrCreate: this.bibEntries.map((b) => b.connectOrCreate())
            }
        }
        return d
    }
    whereUniqueInput() {
        let d: Prisma.ReadingListWhereUniqueInput = {
            name: this.name
        }
        return d
    }
    createArgs() {
        let d: Prisma.ReadingListCreateArgs = {
            data: this.createInput()
        }
        return d
    }
    connectOrCreateArgs() {
        let d: Prisma.ReadingListCreateOrConnectWithoutBibEntriesInput = {
            where: this.whereUniqueInput(),
            create: this.createInput()
        }
        return d
    }
    upsertArgs() {
        let ci = this.createInput()
        let d: Prisma.ReadingListUpsertArgs = {
            where: this.whereUniqueInput(),
            create: ci,
            update: ci
        }
        return d
    }
    static fromPrisma(item: AcceptedReadingListProps) {
        let newReadingList = new ReadingList(item.name, item.description, item.bibEntries, item.createdAt)
        return newReadingList
    }
    static fromList(items: AcceptedReadingListProps[] | undefined | null) {
        if (!items || items.length === 0) return []
        return items.map((item) => item instanceof ReadingList ? item : ReadingList.fromPrisma(item))
    }
}
