import type { Prisma } from "@ulld/database/internalDatabaseTypes"


type DelegateTypes = Prisma.TagDelegate | Prisma.BibEntryDelegate | Prisma.CitationsGroupDelegate | Prisma.ReadingListDelegate | Prisma.MdxNoteDelegate | Prisma.TopicDelegate | Prisma.SubjectDelegate | Prisma.BibDelegate | Prisma.IpynbDelegate | Prisma.SequentialNoteListDelegate | Prisma.DefinitionDelegate

export interface PrismaMdxRelationshipProtocol<T extends DelegateTypes> {
    createArgs: (...props: any[]) => unknown
    upsertArgs: (...props: any[]) => unknown
    connectOrCreateArgs: (...props: any[]) => unknown
    whereUniqueInput: (...props: any[]) => unknown
    whereInput: (...props: any[]) => unknown
    createInput: (...props: any[]) => unknown
}
