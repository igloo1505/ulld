import type { Tag } from "../tag";
import type { PrismaMdxRelationshipProtocol } from "../type";
import type { Prisma, Tag as PrismaTag } from "@ulld/database/internalDatabaseTypes"


export abstract class TagProtocol implements PrismaMdxRelationshipProtocol<Prisma.TagDelegate> {
    abstract createArgs(): Prisma.TagCreateArgs
    abstract upsertArgs(): Prisma.TagUpsertArgs
    abstract connectOrCreateArgs(): Prisma.TagCreateOrConnectWithoutMdxNotesInput
    abstract whereUniqueInput(): Prisma.TagWhereUniqueInput
    abstract createInput(): Prisma.TagCreateInput
    abstract whereInput(): Prisma.TagWhereInput
    static fromPrisma: (item: PrismaTag) => Tag
}
