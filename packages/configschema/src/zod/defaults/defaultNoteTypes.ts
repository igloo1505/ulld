import { DocumentTypeConfigInput } from "../documentConfigSchema.js";

export const defaultNoteTypes: DocumentTypeConfigInput[] = [
    {
        id: "dailyNote",
        fs: "/dailyNotes",
        label: "Daily Notes"
    }
]
