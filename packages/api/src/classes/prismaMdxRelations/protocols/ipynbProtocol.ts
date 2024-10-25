import type { ParsableExtensions } from "@ulld/types";
import type { Prisma } from "@ulld/database/internalDatabaseTypes"
import type { serverClient } from "../../../trpc/serverClient";
import type { IpynbNote } from "../IpynbNote";
import { NoteBase } from "../NoteBase";
import type { PrismaMdxRelationshipProtocol } from "../type";


export type IpynbPrismaReturnType = Awaited<ReturnType<typeof serverClient["notebook"]["getPrismaIpynb"]>>

export type IypnbFsReturnType = Awaited<ReturnType<typeof serverClient["notebook"]["getFsIpynb"]>>

export abstract class IpynbProtocol extends NoteBase implements PrismaMdxRelationshipProtocol<Prisma.IpynbDelegate> {
    constructor(rootRelativePath: string, extension: ParsableExtensions = ".ipynb") {
        super(rootRelativePath, extension)
    }
    abstract createArgs(): Prisma.IpynbCreateArgs | null
    abstract upsertArgs(): Prisma.IpynbUpsertArgs | null
    abstract connectOrCreateArgs(): Prisma.IpynbCreateOrConnectWithoutTagsInput | null
    abstract whereUniqueInput(): Prisma.IpynbWhereUniqueInput | null
    abstract createInput(): Prisma.IpynbCreateInput | null
    abstract whereInput(): Prisma.IpynbWhereInput | null
    static fromPrisma: (item: NonNullable<IpynbPrismaReturnType>) => IpynbNote
    static fromList: (items: (IpynbPrismaReturnType | undefined | null)[]) => IpynbNote[]
}

