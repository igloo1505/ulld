import { MdxNoteParseParams } from "@ulld/api/classes/prismaMdxRelations/mdxNote";
import type { SpecificNoteQueryManager } from "@ulld/api/classes/specificNoteQuery/specificNoteQueryManager";

export type NotePageProps = Awaited<ReturnType<typeof SpecificNoteQueryManager.formatNoteProps>> & {
    parsers: {
        mdx: MdxNoteParseParams
    }
}
