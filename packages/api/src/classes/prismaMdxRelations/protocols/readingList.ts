import { ReadingListReturned } from "../../../trpcTypes";
import type { ReadingList } from "../readingList";
import type { PrismaMdxRelationshipProtocol } from "../type";
import type { Prisma } from "@ulld/database"


export abstract class ReadingListProtocol implements PrismaMdxRelationshipProtocol<Prisma.ReadingListDelegate> {
    abstract createArgs(): Prisma.ReadingListCreateArgs
    abstract upsertArgs(): Prisma.ReadingListUpsertArgs
    abstract connectOrCreateArgs(): Prisma.ReadingListCreateOrConnectWithoutBibEntriesInput
    abstract whereUniqueInput(): Prisma.ReadingListWhereUniqueInput
    abstract createInput(): Prisma.ReadingListCreateInput
    abstract whereInput(): Prisma.ReadingListWhereInput
    static fromPrisma: (item: NonNullable<ReadingListReturned>) => ReadingList
}

