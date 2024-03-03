import { SequentialList } from "../SequentialList";
import { PrismaMdxRelationshipProtocol } from "../type";
import type { Prisma, SequentialNoteList } from "@prisma/client"

export abstract class SequentialListProtocol implements PrismaMdxRelationshipProtocol<Prisma.SequentialNoteListDelegate> {
    abstract createArgs(): Prisma.SequentialNoteListCreateArgs
    abstract upsertArgs(): Prisma.SequentialNoteListUpsertArgs
    abstract connectOrCreateArgs(): Prisma.SequentialNoteListCreateOrConnectWithoutIpynbInput
    abstract whereUniqueInput(): Prisma.SequentialNoteListWhereUniqueInput
    abstract createInput(): Prisma.SequentialNoteListCreateInput
    abstract whereInput(): Prisma.SequentialNoteListWhereInput
    static fromPrisma: (item: SequentialNoteList) => SequentialList
}
