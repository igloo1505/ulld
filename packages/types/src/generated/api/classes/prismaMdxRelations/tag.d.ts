import type { Prisma, Tag as PrismaTag } from "@ulld/database/internalDatabaseTypes";
import { TagZodOutput } from "@ulld/configschema/configUtilityTypes/docTypes";
export declare class Tag {
    kanbanId: number | null;
    value: string;
    constructor(props: TagZodOutput);
    toPlainObject(): {
        value: string;
    };
    createArgs(): Prisma.TagCreateArgs<import("@prisma/client/runtime/library").DefaultArgs>;
    connectOrCreateArgs(): Prisma.TagCreateOrConnectWithoutMdxNotesInput;
    upsertArgs(): Prisma.TagUpsertArgs<import("@prisma/client/runtime/library").DefaultArgs>;
    whereUniqueInput(): Prisma.TagWhereUniqueInput;
    whereInput(): Prisma.TagWhereUniqueInput;
    createInput(): Prisma.TagCreateInput;
    static fromPrisma(item: PrismaTag): Tag;
    static fromList(items: (Tag | PrismaTag)[] | undefined | null): Tag[];
}
//# sourceMappingURL=tag.d.ts.map