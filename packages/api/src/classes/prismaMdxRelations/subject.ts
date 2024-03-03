import { MdxNote as PrismaMdxNote, Prisma, Subject as PrismaSubject } from "@prisma/client"
import { SubjectProtocol } from "./protocols/subject"
import { MdxNote } from "./MdxNote"



export class Subject extends SubjectProtocol {
    MdxNotes: MdxNote[] = []
    constructor(public value: string, MdxNotes: (PrismaMdxNote | MdxNote)[] = []) {
        super()
        this.MdxNotes = MdxNote.fromList(MdxNotes)
    }

    toPlainObject() {
        return {
            value: this.value
        }
    }
    whereInput(): Prisma.SubjectWhereInput {
        return {
            value: this.value
        }
    }
    whereUniqueInput(): Prisma.SubjectWhereUniqueInput {
        return {
            value: this.value
        }
    }
    createInput(): Prisma.SubjectCreateInput {
        return {
            value: this.value
        }
    }
    createArgs(): Prisma.SubjectCreateArgs {
        return {
            data: this.createInput()
        }
    }
    upsertArgs(): Prisma.SubjectUpsertArgs {
        const _args = this.createInput()
        return {
            where: this.whereUniqueInput(),
            create: _args,
            update: _args
        }
    }
    connectOrCreateArgs(): Prisma.SubjectCreateOrConnectWithoutMdxNotesInput {
        return {
            where: this.whereUniqueInput(),
            create: this.createInput()
        }
    }
    static fromPrisma(item: PrismaSubject & { MdxNotes?: PrismaMdxNote[] }) {
        let newSubject = new Subject(item.value, item.MdxNotes || [])
        return newSubject
    }
    static fromList(items: (Subject | PrismaSubject & { MdxNotes?: PrismaMdxNote[] })[] | undefined | null) {
        if (!items || items.length === 0) return []
        return items.map((item) => item instanceof Subject ? item : Subject.fromPrisma(item))
    }
}
