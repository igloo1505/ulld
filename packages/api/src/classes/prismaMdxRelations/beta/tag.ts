import type { Prisma, Tag as PrismaTag } from "@prisma/client"
import { TagProtocol } from "../protocols/tag";
import { TagZodOutput } from "@ulld/configschema/configUtilityTypes/docTypes";



export class Tag {
    kanbanId: string | null = null
    value: string
    constructor(props: TagZodOutput) {
        this.value = props.value
        this.kanbanId = props.kanbanId
    }
    toPlainObject() {
        return {
            value: this.value
        }
    }
    createArgs() {
        let d: Prisma.TagCreateArgs = {
            data: {
                value: this.value
            }
        }
        return d
    }
    connectOrCreateArgs() {
        let d: Prisma.TagCreateOrConnectWithoutMdxNotesInput = {
            where: {
                value: this.value
            },
            create: {
                value: this.value
            }
        }
        return d
    }
    upsertArgs() {
        let d: Prisma.TagUpsertArgs = {
            where: {
                value: this.value
            },
            create: {
                value: this.value
            },
            update: {
                value: this.value
            }
        }
        return d
    }
    whereUniqueInput() {
        let d: Prisma.TagWhereUniqueInput = {
            value: this.value
        }
        return d
    }

    whereInput() {
        let d: Prisma.TagWhereUniqueInput = {
            value: this.value
        }
        return d
    }
    createInput() {
        let d: Prisma.TagCreateInput = {
            value: this.value
        }
        return d
    }

    static fromPrisma(item: PrismaTag) {
        let newItem = new Tag(item.value)
        return newItem
    }
    static fromList(items: (Tag | PrismaTag)[] | undefined | null): Tag[] {
        if (!items || items.length === 0) return []
        return items.map((item) => item instanceof Tag ? item : Tag.fromPrisma(item))
    }
}
