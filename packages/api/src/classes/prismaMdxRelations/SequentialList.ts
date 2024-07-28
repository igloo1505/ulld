import { IpynbNote } from "./IpynbNote";
import { MdxNote } from "./MdxNote";
import { Prisma } from '@ulld/database'
import { SequentialListProtocol } from "./protocols/sequentialList";
import { mdxNoteArrayToConnectOrCreate } from "./utilities/conversionUtilities";


export class SequentialList extends SequentialListProtocol {
    mdxNotes?: MdxNote[]
    ipynbNotes?: IpynbNote[]
    constructor(public sequentialKey: string) {
        super()
    }
    whereInput() {
        return {
            sequentialKey: this.sequentialKey
        } satisfies Prisma.SequentialNoteListWhereInput
    }
    whereUniqueInput() {
        return {
            sequentialKey: this.sequentialKey
        } satisfies Prisma.SequentialNoteListWhereInput
    }
    createInput() {
        return {
            sequentialKey: this.sequentialKey,
            ...(this.mdxNotes && {
                MdxNote: {
                    // connectOrCreate: this.mdxNotes.map((n) => n.connectOrCreateArgs())
                    ...mdxNoteArrayToConnectOrCreate(this.mdxNotes)
                }
            }),
            ...(this.ipynbNotes && {
                Ipynb: {
                    connectOrCreate: this.ipynbNotes.map((n) => n.connectOrCreateArgs())
                }
            })
        } satisfies Prisma.SequentialNoteListCreateInput
    }
    createArgs() {
        return {
            data: this.createInput()
        } satisfies Prisma.SequentialNoteListCreateArgs
    }
    connectOrCreateArgs() {
        return {
            where: this.whereUniqueInput(),
            create: this.createInput(),
        } satisfies Prisma.SequentialNoteListCreateOrConnectWithoutIpynbInput
    }
    upsertArgs() {
        let ci = this.createInput()
        return {
            where: this.whereUniqueInput(),
            create: ci,
            update: ci
        } satisfies Prisma.SequentialNoteListUpsertArgs
    }
}
