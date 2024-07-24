import { ParsedAppConfig } from "@ulld/configschema/types";
import { AutoSettingWithRegex } from "../../../trpc/types";
import type { MdxNote } from "../MdxNote";
import { NoteBase } from "../NoteBase";
import type { PrismaMdxRelationshipProtocol } from "../type";
import type { Prisma, MdxNote as PrismaMdxNote } from "@ulld/database/internalDatabaseTypes";
import { ParsableExtensions } from "@ulld/configschema/zod/secondaryConfigParse/getParsableExtensions";
export declare abstract class MdxNoteProtocol extends NoteBase implements PrismaMdxRelationshipProtocol<Prisma.MdxNoteDelegate> {
    constructor(rootRelativePath: string | undefined | null, extension?: ParsableExtensions);
    abstract createArgs(autoSettings: AutoSettingWithRegex[], config: ParsedAppConfig): Prisma.MdxNoteCreateArgs | undefined;
    abstract upsertArgs(autoSettings: AutoSettingWithRegex[], config: ParsedAppConfig): Prisma.MdxNoteUpsertArgs | undefined;
    abstract connectOrCreateArgs(autoSettings: AutoSettingWithRegex[], config: ParsedAppConfig): Prisma.MdxNoteCreateOrConnectWithoutTagsInput | undefined;
    abstract whereUniqueInput(config: ParsedAppConfig): Prisma.MdxNoteWhereUniqueInput;
    abstract createInput(autoSettings: AutoSettingWithRegex[], config: ParsedAppConfig): Prisma.MdxNoteCreateInput | undefined;
    abstract whereInput(config: ParsedAppConfig): Prisma.MdxNoteWhereInput;
    static fromPrisma: (item: PrismaMdxNote) => MdxNote;
}
//# sourceMappingURL=mdxNote.d.ts.map