import type { Prisma, Topic as PrismaTopic, MdxNote as PrismaMdxNote } from "@ulld/database/internalDatabaseTypes";
import { MdxNote } from "./MdxNote";
import { ParsedAppConfig } from "@ulld/configschema/types";
import { TopicZodOutput } from "@ulld/configschema/configUtilityTypes/docTypes";
export declare class Topic {
    MdxNotes: MdxNote[];
    value: string;
    kanbanId?: number | null | undefined;
    constructor(props: TopicZodOutput);
    toPlainObject(): {
        value: string;
    };
    createArgs(config?: ParsedAppConfig): Prisma.TopicCreateArgs<import("@prisma/client/runtime/library").DefaultArgs>;
    createInput(config: ParsedAppConfig): Prisma.TopicCreateInput;
    upsertArgs(config?: ParsedAppConfig): Prisma.TopicUpsertArgs<import("@prisma/client/runtime/library").DefaultArgs>;
    whereUniqueInput(): Prisma.TopicWhereUniqueInput;
    whereInput(): Prisma.TopicWhereUniqueInput;
    MdxNoteFindAllRelated(orderBy?: "lastSync" | "firstSync", skip?: number, take?: number): Prisma.MdxNoteFindManyArgs<import("@prisma/client/runtime/library").DefaultArgs>;
    connectOrCreateArgs(): Prisma.TopicCreateOrConnectWithoutMdxNotesInput;
    static fromPrisma(item: PrismaTopic & {
        MdxNotes?: PrismaMdxNote[];
    }): Topic;
    static fromList(items: (PrismaTopic | Topic)[]): Topic[];
}
//# sourceMappingURL=topic.d.ts.map