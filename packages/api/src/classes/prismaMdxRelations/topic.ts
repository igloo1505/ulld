import type { Prisma, Topic as PrismaTopic, MdxNote as PrismaMdxNote } from "@ulld/database/internalDatabaseTypes"
import { MdxNote } from "./MdxNote";
import { mdxNoteArrayToConnectOrCreate } from "./utilities/conversionUtilities";
import { ParsedAppConfig } from "@ulld/configschema/types";
import {  getInternalConfig } from "@ulld/configschema/zod/getInternalConfig";
import { TopicZodOutput, topicZodObject } from "@ulld/configschema/configUtilityTypes/docTypes";


export class Topic {
    MdxNotes: MdxNote[] = []
    value: string
    kanbanId?: number | null | undefined = null
    constructor(props: TopicZodOutput) {
        this.value = props.value
    }

    toPlainObject() {
        return {
            value: this.value
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
            value: this.value,
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
            value: this.value
        }
        return d
    }
    whereInput() {
        let d: Prisma.TopicWhereUniqueInput = {
            value: this.value
        }
        return d
    }

    MdxNoteFindAllRelated(orderBy: "lastSync" | "firstSync" = "lastSync", skip: number = 0, take: number = 20) {
        let d: Prisma.MdxNoteFindManyArgs = {
            where: {
                topics: {
                    some: {
                        value: this.value
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
                value: this.value
            },
            create: {
                value: this.value
            }
        }
        return d
    }

    static fromPrisma(item: PrismaTopic & { MdxNotes?: PrismaMdxNote[] }): Topic {
        let parsed = topicZodObject.parse(item)
        let newTopic = new Topic(parsed)
        return newTopic
    }
    static fromList(items: (PrismaTopic | Topic)[]): Topic[] {
        return items.map((item) => item instanceof Topic ? item : Topic.fromPrisma(item))
    }
}
