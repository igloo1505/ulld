import { type BibFilePresenter } from "bibtex";
import { BibEntry, type BibEntryDataTableOutput } from "./BibEntry";
import type { Prisma, Bib as PrismaBib } from '@ulld/database/internalDatabaseTypes';
import { ParsedAppConfig } from "@ulld/configschema/types";
import { BibPropsOutput } from "./schemas/general";
interface IsbnQueryParams {
}
export declare class BibCore {
    entries: BibEntry[];
    id: number;
    filename: string;
    lastSync: Date | undefined | null;
    firstSync: Date | undefined | null;
    constructor(props: BibPropsOutput);
    queryIsbn(params: IsbnQueryParams): Promise<void>;
    whereUniqueInput(): Prisma.BibWhereUniqueInput;
    whereInput(): Prisma.BibWhereInput;
    createInput(): Prisma.BibCreateInput;
    updateInput(): Prisma.BibUpdateInput;
    addEntries(data: BibEntry | BibEntry[]): void;
    createArgs(): Prisma.BibCreateArgs;
    upsertArgs(): Prisma.BibUpsertArgs;
    connectOrCreateArgs(): Prisma.BibCreateOrConnectWithoutEntriesInput;
    itemFromId(id: string): BibEntry | undefined;
    initEmptyBib(): void;
    getCitationsInNote(content: string): string[];
    toDataTable(): BibEntryDataTableOutput[];
    findEntryById(id: string): BibEntry | undefined;
    readFile(file?: string): Promise<BibFilePresenter | undefined>;
    readBibtexString(content: string): BibFilePresenter;
    readFileObject(file: File, autoAppend?: boolean, callback?: (result: any) => void): void;
    sortEntriesByDate(): void;
    static fromPrisma(item: PrismaBib, _config?: ParsedAppConfig): BibCore;
}
export {};
//# sourceMappingURL=Bib.d.ts.map