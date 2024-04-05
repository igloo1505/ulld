import { DefinitionProtocol } from "./protocols/definition";
import type { Prisma, Definition as PrismaDefinition } from "@prisma/client"
import { MdxNote } from "./MdxNote";
import { DefinitionZodObjectOutput, definitionZodObject } from "./schemas/definitionSchema";


// TODO: Get alphabetical label here for sorting later. Don't try to alphabetize in real time.
export class Definition extends DefinitionProtocol {
    mdxNote?: MdxNote
    mdxNoteId?: number | null
    id: string
    label?: string | null
    content?: string | null
    constructor(data: DefinitionZodObjectOutput) {
        super()
        this.mdxNote = data.mdxNote
        this.mdxNoteId = data.mdxNoteId
        this.id = data.id
        this.content = data.content
        this.label = data.label
    }
    toPlainObject() {
        return {
            id: this.id,
            label: this.label,
            content: this.content,
            mdxNoteId: this.mdxNoteId
        }
    }
    whereInput() {
        return {
            id: this.id
        } satisfies Prisma.DefinitionWhereInput
    }
    whereUniqueInput() {
        return this.whereInput()
    }
    createInput() {
        return {
            label: this.label,
            content: this.content || null,
            id: this.id
        } satisfies Prisma.DefinitionCreateWithoutMdxNoteInput
    }
    createArgs() {
        return {
            data: this.createInput()
        } satisfies Prisma.DefinitionCreateArgs
    }
    upsertArgs() {
        const _args = this.createInput()
        return {
            where: this.whereUniqueInput(),
            create: _args,
            update: _args
        } satisfies Prisma.DefinitionUpsertArgs
    }
    connectOrCreateArgs() {
        return {
            where: this.whereUniqueInput(),
            create: this.createInput()
        } satisfies Prisma.DefinitionCreateOrConnectWithoutMdxNoteInput
    }
    fromPrisma(item: PrismaDefinition): Definition {
        const props = definitionZodObject.parse(item)
        return new Definition(props)
    }
    async getAlphabeticalLabel(): Promise<string> {
        return this.label || this.id
    }
}
