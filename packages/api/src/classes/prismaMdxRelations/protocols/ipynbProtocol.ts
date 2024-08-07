import { ParsableExtensions } from "@ulld/configschema/zod/secondaryConfigParse/getParsableExtensions";
import { serverClient } from "../../../trpc/serverClient";
import { IpynbNote } from "../IpynbNote";
import { NoteBase } from "../NoteBase";
import { PrismaMdxRelationshipProtocol } from "../type";
import { Prisma } from "@ulld/database/internalDatabaseTypes"


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

