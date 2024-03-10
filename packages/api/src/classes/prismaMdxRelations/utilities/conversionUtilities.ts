import { ParsedAppConfig, getInternalConfig } from "@ulld/configschema";
import { MdxNote } from "../MdxNote";
import type { Prisma } from '@prisma/client'


export const mdxNoteArrayToConnectOrCreate = (notes: MdxNote[], config?: ParsedAppConfig) => {
    const _config = config || getInternalConfig()
    return { connectOrCreate: notes.map((n) => n.connectOrCreateArgs([], _config)).filter((a) => Boolean(a)) as Prisma.MdxNoteCreateOrConnectWithoutTagsInput[] }
}
