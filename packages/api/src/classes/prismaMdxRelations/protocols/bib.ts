import { BibReturnType } from "../../../trpcTypes/main";
import type { BibCore } from "../Bib";
import type { PrismaMdxRelationshipProtocol } from "../type";
import type { Prisma, BibEntry as PrismaBibEntries } from "@ulld/database/internalDatabaseTypes"



export abstract class BibProtocol implements PrismaMdxRelationshipProtocol<Prisma.BibDelegate> {
    abstract createArgs(): Prisma.BibCreateArgs
    abstract upsertArgs(): Prisma.BibUpsertArgs
    abstract connectOrCreateArgs(): Prisma.BibCreateOrConnectWithoutEntriesInput
    abstract whereUniqueInput(): Prisma.BibWhereUniqueInput
    abstract createInput(): Prisma.BibCreateInput
    abstract whereInput(): Prisma.BibWhereInput
    static fromPrisma: (item: NonNullable<BibReturnType> | {
        id: number;
        filename: string;
        lastSync: Date;
        entries: PrismaBibEntries[]
    }
    ) => BibCore
}

