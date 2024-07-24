import { IpynbNote } from "./IpynbNote";
import { MdxNote } from "./MdxNote";
import { Prisma } from '@prisma/client';
import { SequentialListProtocol } from "./protocols/sequentialList";
export declare class SequentialList extends SequentialListProtocol {
    sequentialKey: string;
    mdxNotes?: MdxNote[];
    ipynbNotes?: IpynbNote[];
    constructor(sequentialKey: string);
    whereInput(): {
        sequentialKey: string;
    };
    whereUniqueInput(): {
        sequentialKey: string;
    };
    createInput(): {
        Ipynb?: {
            connectOrCreate: Prisma.IpynbCreateOrConnectWithoutTagsInput[];
        } | undefined;
        MdxNote?: {
            connectOrCreate: Prisma.MdxNoteCreateOrConnectWithoutTagsInput[];
        } | undefined;
        sequentialKey: string;
    };
    createArgs(): {
        data: {
            Ipynb?: {
                connectOrCreate: Prisma.IpynbCreateOrConnectWithoutTagsInput[];
            } | undefined;
            MdxNote?: {
                connectOrCreate: Prisma.MdxNoteCreateOrConnectWithoutTagsInput[];
            } | undefined;
            sequentialKey: string;
        };
    };
    connectOrCreateArgs(): {
        where: {
            sequentialKey: string;
        };
        create: {
            Ipynb?: {
                connectOrCreate: Prisma.IpynbCreateOrConnectWithoutTagsInput[];
            } | undefined;
            MdxNote?: {
                connectOrCreate: Prisma.MdxNoteCreateOrConnectWithoutTagsInput[];
            } | undefined;
            sequentialKey: string;
        };
    };
    upsertArgs(): {
        where: {
            sequentialKey: string;
        };
        create: {
            Ipynb?: {
                connectOrCreate: Prisma.IpynbCreateOrConnectWithoutTagsInput[];
            } | undefined;
            MdxNote?: {
                connectOrCreate: Prisma.MdxNoteCreateOrConnectWithoutTagsInput[];
            } | undefined;
            sequentialKey: string;
        };
        update: {
            Ipynb?: {
                connectOrCreate: Prisma.IpynbCreateOrConnectWithoutTagsInput[];
            } | undefined;
            MdxNote?: {
                connectOrCreate: Prisma.MdxNoteCreateOrConnectWithoutTagsInput[];
            } | undefined;
            sequentialKey: string;
        };
    };
}
//# sourceMappingURL=SequentialList.d.ts.map