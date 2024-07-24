import { Definition } from "../definition";
import type { PrismaMdxRelationshipProtocol } from "../type";
import type { Prisma, Definition as PrismaDefinition } from "@ulld/database/internalDatabaseTypes";
export declare abstract class DefinitionProtocol implements PrismaMdxRelationshipProtocol<Prisma.DefinitionDelegate> {
    abstract whereInput(): Prisma.DefinitionWhereInput;
    abstract whereUniqueInput(): Prisma.DefinitionWhereUniqueInput;
    abstract createInput(): Prisma.DefinitionCreateWithoutMdxNoteInput;
    abstract createArgs(): Prisma.DefinitionCreateArgs;
    abstract upsertArgs(): Prisma.DefinitionUpsertArgs;
    abstract connectOrCreateArgs(): Prisma.DefinitionCreateOrConnectWithoutMdxNoteInput;
    static fromPrisma: (item: PrismaDefinition) => Definition;
}
//# sourceMappingURL=definition.d.ts.map