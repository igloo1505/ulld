import type {
    MinimalParsableAppConfigOutput,
} from "@ulld/configschema/types";
import type { ParsableExtensionsSchema } from "@ulld/configschema/zod/secondaryConfigParse/getParsableExtensions";
import type { Prisma, MdxNote as PrismaMdxNote } from "@ulld/database/internalDatabaseTypes";
import type { AutoSettingWithRegex } from "../../../trpc/types";
import type { MdxNote } from "../MdxNote";
import { NoteBase } from "../NoteBase";
import type { PrismaMdxRelationshipProtocol } from "../type";


export type AutoSettingProp = AutoSettingWithRegex[] | null | undefined


export abstract class MdxNoteProtocol extends NoteBase implements PrismaMdxRelationshipProtocol<Prisma.MdxNoteDelegate>  {
    constructor(rootRelativePath: string | undefined | null, extension: ParsableExtensionsSchema = ".mdx") {
        super(rootRelativePath, extension)
    }
    abstract createArgs(autoSettings: AutoSettingProp, config: MinimalParsableAppConfigOutput): Prisma.MdxNoteCreateArgs | undefined
    abstract upsertArgs(autoSettings: AutoSettingProp, config: MinimalParsableAppConfigOutput): Prisma.MdxNoteUpsertArgs | undefined
    abstract connectOrCreateArgs(autoSettings: AutoSettingProp, config: MinimalParsableAppConfigOutput): Prisma.MdxNoteCreateOrConnectWithoutTagsInput | undefined
    abstract whereUniqueInput(config: MinimalParsableAppConfigOutput): Prisma.MdxNoteWhereUniqueInput
    abstract createInput(autoSettings: AutoSettingProp, config: MinimalParsableAppConfigOutput): Prisma.MdxNoteCreateInput | undefined
    abstract whereInput(config: MinimalParsableAppConfigOutput): Prisma.MdxNoteWhereInput
    static fromPrisma: (item: PrismaMdxNote) => MdxNote
}
