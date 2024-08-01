import { DocumentTypeConfigInput } from "../documentConfigSchema";

export const defaultNoteTypes: DocumentTypeConfigInput[] = [
    {
        id: "dailyNote",
        fs: "/dailyNotes",
        label: "Daily Notes"
    }
]
