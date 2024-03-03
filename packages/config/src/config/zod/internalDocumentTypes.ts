import { Route } from "next";
import { documentTypeConfigSchemaBase } from "./documentConfigSchema";
import { z } from 'zod'


export const internalDocumentTypeConfigSchema = documentTypeConfigSchemaBase.partial({
    fs: true
})

export type InternalDocumentConfigType = z.output<typeof internalDocumentTypeConfigSchema>

export const internalDocumentTypes: z.input<typeof internalDocumentTypeConfigSchema>[] = [
    {
        "id": "bookmarks",
        "keywords": [
            "bookmarks"
        ],
        "url": "/bookmarks" as Route,
        "label": "Bookmarks",
        "docType": "bookmarks",
    },
    {
        "id": "settings",
        "keywords": [
            "settings"
        ],
        "url": "/settings" as Route,
        "label": "Settings",
        "docType": "none",
    },
    {
        "id": "pdfs",
        "keywords": [
            "pdf",
            "papers",
            "research"
        ],
        "url": "/pdf" as Route,
        "label": "Pdfs",
        "docType": "pdf-collection",
        "fs": "/resources/pdf",
    },
    {
        "id": "bibliography",
        "keywords": [
            "bib",
            "references",
            "citations"
        ],
        "url": "/bibliography" as Route,
        "label": "Bibliography",
        "docType": "bibliography",
    },
    {
        "id": "addSnippets",
        "url": "/snippets/add" as Route,
        "label": "Add Snippets",
        "docType": "none",
    },
    {
        "id": "snippets",
        "url": "/snippets" as Route,
        "label": "Snippets",
        "docType": "snippet",
    },
]
