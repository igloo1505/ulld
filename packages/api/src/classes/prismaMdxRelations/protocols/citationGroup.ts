import { CitationGroupReturned } from "../../../trpcTypes";
import type { CitationGroup } from "../CitationGroup";
import type { PrismaMdxRelationshipProtocol } from "../type";
import type { Prisma } from "@ulld/database"



export abstract class CitationGroupProtocol implements PrismaMdxRelationshipProtocol<Prisma.CitationsGroupDelegate> {
    abstract createArgs(): Prisma.CitationsGroupCreateArgs
    abstract upsertArgs(): Prisma.CitationsGroupUpsertArgs
    abstract connectOrCreateArgs(): Prisma.CitationsGroupCreateOrConnectWithoutEntriesInput
    abstract whereUniqueInput(): Prisma.CitationsGroupWhereUniqueInput
    abstract createInput(): Prisma.CitationsGroupCreateInput
    abstract whereInput(): Prisma.CitationsGroupWhereInput
    static fromPrisma: (item: NonNullable<CitationGroupReturned>) => CitationGroup
}

