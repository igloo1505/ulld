import type { Prisma, ReadingList as PrismaReadingList } from "@ulld/database/internalDatabaseTypes";
import { BibEntry } from "./BibEntry";
import { MdxNote } from "./MdxNote";
import { ReadingListPropsOutput } from "./schemas/general";
import { IpynbNote } from "./IpynbNote";
export interface PartialReadingListEntry {
    bibEntries: {
        id: string;
        title: string | null;
        added: Date;
    }[];
    name: string;
    description: string | null;
    createdAt: Date;
}
export type AcceptedReadingListProps = PartialReadingListEntry | ReadingList | PrismaReadingList & {
    bibEntries?: undefined;
};
export declare class ReadingList {
    bibEntries: BibEntry[];
    name: string;
    description?: string | null;
    mdxNotes: MdxNote[];
    createdAt: Date;
    lastUpdate: Date | undefined | null;
    ipynbNotes: IpynbNote[];
    constructor(props: ReadingListPropsOutput);
    toPlainObject(): {
        name: string;
        bibEntries: any[];
        description: string | null;
        createdAt: Date;
        lastUpdate: Date;
        ipynbNotes: any[];
        mdxNotes: any[];
    };
    whereInput(): Prisma.ReadingListWhereInput;
    createInput(): Prisma.ReadingListCreateInput;
    whereUniqueInput(): Prisma.ReadingListWhereUniqueInput;
    createArgs(): Prisma.ReadingListCreateArgs<import("@prisma/client/runtime/library").DefaultArgs>;
    connectOrCreateArgs(): Prisma.ReadingListCreateOrConnectWithoutBibEntriesInput;
    upsertArgs(): Prisma.ReadingListUpsertArgs<import("@prisma/client/runtime/library").DefaultArgs>;
    static fromPrisma(item: AcceptedReadingListProps): ReadingList;
    static fromList(items: AcceptedReadingListProps[] | undefined | null): ReadingList[];
}
//# sourceMappingURL=readingList.d.ts.map