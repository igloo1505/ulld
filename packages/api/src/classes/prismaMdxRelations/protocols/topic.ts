import { ParsedAppConfig } from "@ulld/configschema/types";
import type { MdxNote } from "../MdxNote";
import type { Topic } from "../topic";
import type { PrismaMdxRelationshipProtocol } from "../type";
import type { Prisma, Topic as PrismaTopic } from "@ulld/database/internalDatabaseTypes"


export interface TopicWithNoteIds extends PrismaTopic {
    MdxNote: MdxNote[] | string[]
}

export abstract class TopicProtocol implements PrismaMdxRelationshipProtocol<Prisma.TopicDelegate> {
    abstract createArgs(config: ParsedAppConfig): Prisma.TopicCreateArgs
    abstract upsertArgs(config: ParsedAppConfig): Prisma.TopicUpsertArgs
    abstract connectOrCreateArgs(): Prisma.TopicCreateOrConnectWithoutMdxNotesInput
    abstract whereUniqueInput(): Prisma.TopicWhereUniqueInput
    abstract createInput(config: ParsedAppConfig): Prisma.TopicCreateInput
    abstract whereInput(): Prisma.TopicWhereInput
    static fromPrisma: (item: TopicWithNoteIds) => Topic
}
