import type { SpecificNoteQueryManager } from "@ulld/api/classes/specificNoteQuery/specificNoteQueryManager";

export type NotePageProps = Awaited<ReturnType<typeof SpecificNoteQueryManager.formatNoteProps>>;
