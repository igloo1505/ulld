import { type BibFilePresenter, parseBibFile } from "bibtex";
import { BibEntry, type BibEntryDataTableOutput, type BibEntryPrismaAcceptedTypes } from "./BibEntry";
import { BibProtocol } from "./protocols/bib";
import type { Prisma } from '@ulld/database/internalDatabaseTypes'
import { getInternalConfig } from "@ulld/configschema/zod/getInternalConfig";
import { getUniversalQuery } from "../../actions/universal/getUniversalClient";
import { BibWithEntries } from "../../trpcInternalMethods/bib/main";
import { BibReturnType } from "../../trpcTypes/main";


interface IsbnQueryParams {
}


export class BibCore extends BibProtocol {
    entries: BibEntry[] = []
    lastSync: Date | string | undefined = undefined
    constructor(public id: number = 1, public filename: string = "citations.bib", entries: BibEntryPrismaAcceptedTypes[] = []) {
        super()
        this.entries = BibEntry.fromList(entries)
    }
    // TODO: Need to implement this again according to google scholar/books docs
    async queryIsbn(params: IsbnQueryParams) {
    }
    whereUniqueInput(): Prisma.BibWhereUniqueInput {
        return {
            id: this.id
        }
    }
    whereInput(): Prisma.BibWhereInput {
        return {
            id: this.id
        }
    }
    createInput(): Prisma.BibCreateInput {
        return {
            id: this.id || 1,
            entries: {
                connectOrCreate: this.entries.map((e) => e.connectOrCreateArgs(true))
            },
            filename: this.filename
        }
    }
    updateInput(): Prisma.BibUpdateInput {
        return {
            id: this.id || 1,
            entries: {
                upsert: this.entries.map((e) => e.upsertArgs(true))
            },
            filename: this.filename
        }
    }

    addEntries(data: BibEntry | BibEntry[]) {
        if (!Array.isArray(data)) {
            this.entries.push(data)
            return
        }
        this.entries = this.entries.concat(data)
    }
    createArgs(): Prisma.BibCreateArgs {
        return {
            data: this.createInput()
        }
    }
    upsertArgs(): Prisma.BibUpsertArgs {
        let input = this.createInput()
        return {
            where: this.whereUniqueInput(),
            create: input,
            update: this.updateInput()
        }
    }
    connectOrCreateArgs(): Prisma.BibCreateOrConnectWithoutEntriesInput {
        return {
            where: this.whereUniqueInput(),
            create: this.createInput()
        }
    }
    itemFromId(id: string) {
        return this.entries.find((e) => e.id === id)
    }
    initEmptyBib() {
        // TODO: Handle this entirely here
        console.log(`This needs to be handled. initEmptyBib in CitationsManager class currently does nothing.`)
    }
    getCitationsInNote(content: string) {
        let regex = /\[@(?<citation>\S*)]/gi
        let data = []
        let m;
        do {
            m = regex.exec(content);
            if (m) {
                data.push(m[1])
            }
        } while (m);
        return data
    }
    toDataTable(): BibEntryDataTableOutput[] {
        return this.entries.map((e) => e.toDataTable())
    }
    findEntryById(id: string) {
        return this.entries.find((e) => e.id === id)
    }
    async readFile(file?: string) {
        let _bibFile = file || this.filename
        if (!_bibFile) {
            return
        }
        let content = []
        let parsed: BibFilePresenter | undefined
        const query = await getUniversalQuery("readBibFromFileSystem")
        const res = await query()
        content = res.data.bib
        if (content) {
            parsed = this.readBibtexString(content)
        }
        if (parsed) {
            this.entries = this.entries.concat(BibEntry.fromFsList(parsed.entries_raw))
        }
        return parsed
    }
    readBibtexString(content: string): BibFilePresenter {
        return parseBibFile(content)
    }
    readFileObject(file: File, autoAppend: boolean = false, callback?: (result: any) => void) {
        const reader = new FileReader()
        reader.onload = async () => {
            if (reader.result) {
                let parsed = parseBibFile(reader.result as string)
                let newEntries = BibEntry.fromFsList(parsed.entries_raw)
                this.addEntries(newEntries)
            }
            callback && callback(reader.result)
        }
        reader.readAsText(file)
    }
    sortEntriesByDate() {
        // TODO: Handle this. Don't return anything but sort entries in place
    }
    static fromPrisma(item: NonNullable<BibReturnType> | NonNullable<BibWithEntries> | {
        id: number;
        filename: string;
        lastSync: Date;
        entries: BibEntryPrismaAcceptedTypes[] | undefined
    },
        _config?: ParsedAppConfig
    ): BibCore {
        if (!item) {
            const config = _config || getInternalConfig()
            return new BibCore(1, config.bibPath || "citations.bib", [])
        }
        return new BibCore(item?.id, item?.filename, item.entries || [])
    }
}
