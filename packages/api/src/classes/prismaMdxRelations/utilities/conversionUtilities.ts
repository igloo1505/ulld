import { ParsedAppConfig } from "@ulld/configschema/types";
import {  getInternalConfig } from "@ulld/configschema/zod/getInternalConfig";
import { MdxNote } from "../MdxNote";
import type { Prisma } from '@ulld/database/internalDatabaseTypes'


export const mdxNoteArrayToConnectOrCreate = (notes: MdxNote[], config?: ParsedAppConfig) => {
    const _config = config || getInternalConfig()
    return { connectOrCreate: notes.map((n) => n.connectOrCreateArgs([], _config)).filter((a) => Boolean(a)) as Prisma.MdxNoteCreateOrConnectWithoutTagsInput[] }
}
