import { CitationGroupReturned, BibEntryReturned } from "../../trpcTypes/main";
import { BibEntry } from "./BibEntry";
import type { Prisma, CitationsGroup as PrismaCitationGroup } from "@ulld/database/internalDatabaseTypes";
import { CitationGroupPropsOutput } from "./schemas/general";
export declare class CitationGroup {
    entries: BibEntry[];
    name: string;
    description: string | null | undefined;
    constructor(props: CitationGroupPropsOutput);
    toPlainObject(): {
        name: string;
        description?: string | null | undefined;
    };
    whereUniqueInput(): Prisma.CitationsGroupWhereUniqueInput;
    whereInput(): Prisma.CitationsGroupWhereUniqueInput;
    createInput(): Prisma.CitationsGroupCreateInput;
    createArgs(): Prisma.CitationsGroupCreateArgs<import("@prisma/client/runtime/library").DefaultArgs>;
    upsertArgs(): Prisma.CitationsGroupUpsertArgs<import("@prisma/client/runtime/library").DefaultArgs>;
    connectOrCreateArgs(): Prisma.CitationsGroupCreateOrConnectWithoutEntriesInput;
    static fromPrisma(entry: NonNullable<CitationGroupReturned> | PrismaCitationGroup & {
        entries: undefined;
    } | Partial<NonNullable<BibEntryReturned>['citationGroups'][number]>): CitationGroup;
    static fromList(items: (PrismaCitationGroup & {
        entries?: undefined;
    } | CitationGroup | Partial<NonNullable<BibEntryReturned>['citationGroups'][number]>)[] | null | undefined): CitationGroup[];
}
//# sourceMappingURL=CitationGroup.d.ts.map