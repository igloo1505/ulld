import { serverClient } from "#/trpc/serverClient";
import { IpynbNote } from "../IpynbNote";
import { NoteBase } from "../NoteBase";
import { PrismaMdxRelationshipProtocol } from "../type";
import { Prisma } from "@prisma/client"


export type IpynbPrismaReturnType = Awaited<ReturnType<typeof serverClient["getPrismaIpynb"]>>

export type IypnbFsReturnType = Awaited<ReturnType<typeof serverClient["getFsIpynb"]>>

export abstract class IpynbProtocol extends NoteBase implements PrismaMdxRelationshipProtocol<Prisma.IpynbDelegate> {
    constructor(rootRelativePath: string, extension: string) {
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

