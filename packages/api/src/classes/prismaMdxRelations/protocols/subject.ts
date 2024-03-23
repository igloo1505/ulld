import type { Subject } from "../subject";
import type { PrismaMdxRelationshipProtocol } from "../type";
import type { Prisma, Subject as PrismaSubject } from "@ulld/database/internalDatabaseTypes"


export abstract class SubjectProtocol implements PrismaMdxRelationshipProtocol<Prisma.SubjectDelegate> {
    abstract whereInput(): Prisma.SubjectWhereInput
    abstract whereUniqueInput(): Prisma.SubjectWhereUniqueInput
    abstract createInput(): Prisma.SubjectCreateInput
    abstract createArgs(): Prisma.SubjectCreateArgs
    abstract upsertArgs(): Prisma.SubjectUpsertArgs
    abstract connectOrCreateArgs(): Prisma.SubjectCreateOrConnectWithoutMdxNotesInput
    static fromPrisma: (item: PrismaSubject) => Subject
}
