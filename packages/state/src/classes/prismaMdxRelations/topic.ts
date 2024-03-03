import type { Prisma, Topic as PrismaTopic, MdxNote as PrismaMdxNote } from "@prisma/client"
import { TopicProtocol } from "./protocols/topic";
import { MdxNote } from "./MdxNote";
import { MdxNoteWithAll } from "#/types/prisma/bib/returnTypes";
import { mdxNoteArrayToConnectOrCreate } from "./utilities/conversionUtilities";
import { ParsedAppConfig } from "#/lib/config/zod/secondaryConfigParse/main";
import { getInternalConfig } from "#/lib/config/zod/getInternalConfig";


export class Topic extends TopicProtocol {
    MdxNotes: MdxNote[] = []
    constructor(public name: string) {
        super()
    }

    toPlainObject() {
        return {
            name: this.name
        }
    }

    createArgs(config?: ParsedAppConfig) {
        const _config = config || getInternalConfig()
        let d: Prisma.TopicCreateArgs = {
            data: this.createInput(_config)
        }
        return d
    }
    createInput(config: ParsedAppConfig) {
        let d: Prisma.TopicCreateInput = {
            name: this.name,
            MdxNotes: {
                ...mdxNoteArrayToConnectOrCreate(this.MdxNotes, config)
            }
        }
        return d
    }
    upsertArgs(config?: ParsedAppConfig) {
        const _config = config || getInternalConfig()
        let ci = this.createInput(_config)
        let d: Prisma.TopicUpsertArgs = {
            where: this.whereUniqueInput(),
            update: ci,
            create: ci
        }
        return d
    }
    whereUniqueInput() {
        let d: Prisma.TopicWhereUniqueInput = {
            name: this.name
        }
        return d
    }
    whereInput() {
        let d: Prisma.TopicWhereUniqueInput = {
            name: this.name
        }
        return d
    }

    MdxNoteFindAllRelated(orderBy: "lastSync" | "firstSync" = "lastSync", skip: number = 0, take: number = 20) {
        let d: Prisma.MdxNoteFindManyArgs = {
            where: {
                topics: {
                    some: {
                        name: this.name
                    }
                }
            },
            orderBy: {
                [orderBy]: "desc"
            },
            skip: skip,
            take: take
        }
        return d
    }

    connectOrCreateArgs() {
        let d: Prisma.TopicCreateOrConnectWithoutMdxNotesInput = {
            where: {
                name: this.name
            },
            create: {
                name: this.name
            }
        }
        return d
    }

    static fromPrisma(item: PrismaTopic & { MdxNotes?: PrismaMdxNote[] }): Topic {
        let newTopic = new Topic(item.name)
        if (item.MdxNotes) {
            newTopic.MdxNotes = item.MdxNotes.map((n) => n instanceof MdxNote ? n : MdxNote.fromPrisma(n as NonNullable<MdxNoteWithAll>))
        }
        return newTopic
    }
    static fromList(items: (PrismaTopic | Topic)[]): Topic[] {
        return items.map((item) => item instanceof Topic ? item : Topic.fromPrisma(item))
    }
}
