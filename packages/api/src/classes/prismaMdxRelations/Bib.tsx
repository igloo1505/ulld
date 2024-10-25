import { type BibFilePresenter, parseBibFile } from "bibtex";
import type { AppConfigSchemaOutput } from "@ulld/configschema/types";
import type {
    Prisma,
    Bib as PrismaBib,
} from "@ulld/database/internalDatabaseTypes";
import { getUniversalQuery } from "../../actions/universal/getUniversalClient";
import { BibEntry, type BibEntryDataTableOutput } from "./BibEntry";
import {
    type BibPropsOutput,
    bibCoreSchema,
    bibEntryPropsSchema,
    bibEntryTransform,
} from "./schemas/general";

interface IsbnQueryParams { }

export class BibCore {
    entries: BibEntry[] = [];
    id = 1;
    filename = "citations.bib";
    lastAccess: Date | undefined | null = undefined;
    firstSync: Date | undefined | null = undefined;
    constructor(props?: BibPropsOutput) {
        if (props) {
            this.firstSync = props.firstSync;
            this.lastAccess = props.lastAccess;
            this.filename = props.filename;
            this.id = props.id;
            this.entries = bibEntryPropsSchema
                .innerType()
                .partial()
                .transform((x) => {
                    if(typeof x.BibId !== "number"){
                        x.BibId = 1
                    }
                    return x
                })
                .array()
                .parse(props.entries)
                .map((a) => new BibEntry(bibEntryPropsSchema.parse(a)));
        }
    }
    // TODO: Need to implement this again according to google scholar/books docs
    async queryIsbn(params: IsbnQueryParams) { }
    whereUniqueInput(): Prisma.BibWhereUniqueInput {
        return {
            id: this.id,
        };
    }
    whereInput(): Prisma.BibWhereInput {
        return {
            id: this.id,
        };
    }
    createInput(): Prisma.BibCreateInput {
        return {
            id: this.id || 1,
            entries: {
                connectOrCreate: this.entries.map((e) => e.connectOrCreateArgsIfExists()).filter((x) => Boolean(x.where.id)),
            },
            filename: this.filename,
        };
    }
    updateInput(): Prisma.BibUpdateInput {
        return {
            id: this.id || 1,
            entries: {
                upsert: this.entries.map((e) => e.upsertArgs(true)),
            },
            filename: this.filename,
        };
    }

    addEntries(data: BibEntry | BibEntry[]) {
        if (!Array.isArray(data)) {
            this.entries.push(data);
            return;
        }
        this.entries = this.entries.concat(data);
    }
    createArgs(): Prisma.BibCreateArgs {
        return {
            data: this.createInput(),
        };
    }
    upsertArgs(): Prisma.BibUpsertArgs {
        const input = this.createInput();
        return {
            where: this.whereUniqueInput(),
            create: input,
            update: this.updateInput(),
        };
    }
    connectOrCreateArgs(): Prisma.BibCreateOrConnectWithoutEntriesInput {
        return {
            where: this.whereUniqueInput(),
            create: this.createInput(),
        };
    }
    itemFromId(id: string) {
        return this.entries.find((e) => e.id === id);
    }
    initEmptyBib() {
        // TODO: Handle this entirely here
        console.log(
            `This needs to be handled. initEmptyBib in CitationsManager class currently does nothing.`,
        );
    }
    getCitationsInNote(content: string) {
        const regex = /\[@(?<citation>\S*)]/gi;
        const data = [];
        let m;
        do {
            m = regex.exec(content);
            if (m) {
                data.push(m[1]);
            }
        } while (m);
        return data;
    }
    toDataTable(): BibEntryDataTableOutput[] {
        return this.entries.map((e) => e.toDataTable());
    }
    findEntryById(id: string) {
        return this.entries.find((e) => e.id === id);
    }
    async readFile(file?: string) {
        const _bibFile = file || this.filename;
        if (!_bibFile) {
            return;
        }
        let content: string | undefined;
        let parsed: BibFilePresenter | undefined;
        const query = await getUniversalQuery("readBibFromFileSystem");
        const res = await query();
        content = res.data.bib;
        if (content) {
            parsed = this.readBibtexString(content);
        }
        if (parsed) {
            this.entries = this.entries.concat(
                BibEntry.fromFsList(parsed.entries_raw),
            );
        }
        return parsed;
    }
    readBibtexString(content: string): BibFilePresenter {
        return parseBibFile(content);
    }
    readFileObject(
        file: File,
        autoAppend = false,
        callback?: (result: any) => void,
    ) {
        const reader = new FileReader();
        reader.onload = async () => {
            if (reader.result) {
                const parsed = parseBibFile(reader.result as string);
                const newEntries = BibEntry.fromFsList(parsed.entries_raw);
                this.addEntries(newEntries);
            }
            callback && callback(reader.result);
        };
        reader.readAsText(file);
    }
    sortEntriesByDate() {
        // TODO: Handle this. Don't return anything but sort entries in place
    }
    static fromPrisma(item: PrismaBib, config: AppConfigSchemaOutput): BibCore {
        if (!item) {
            return new BibCore({
                id: 1,
                filename: config.bibPath,
                entries: [],
            });
        }
        const parsed = bibCoreSchema.parse(item);
        return new BibCore(parsed);
    }
}
