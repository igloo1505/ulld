import { ParsedAppConfig } from "@ulld/configschema/types";
import { MdxNote } from "../MdxNote";
import type { Prisma } from '@ulld/database/internalDatabaseTypes';
export declare const mdxNoteArrayToConnectOrCreate: (notes: MdxNote[], config?: ParsedAppConfig) => {
    connectOrCreate: Prisma.MdxNoteCreateOrConnectWithoutTagsInput[];
};
//# sourceMappingURL=conversionUtilities.d.ts.map