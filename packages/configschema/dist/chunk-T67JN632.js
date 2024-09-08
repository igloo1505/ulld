import {
  documentTypeConfigSchemaBase
} from "./chunk-Q45QUJC2.js";

// src/zod/internalDocumentTypes.ts
import { z } from "zod";
var internalDocTypes = z.union([
  z.literal("bookmarks"),
  z.literal("snippets")
]);
var internalDocumentTypeConfigSchema = documentTypeConfigSchemaBase.partial({
  fs: true
});
var internalDocumentTypes = [
  {
    "id": "bookmarks",
    "keywords": [
      "bookmarks"
    ],
    "url": "/bookmarks",
    "label": "Bookmarks",
    "docType": "bookmarks"
  },
  {
    "id": "settings",
    "keywords": [
      "settings"
    ],
    "url": "/settings",
    "label": "Settings",
    "docType": "none"
  },
  {
    "id": "pdfs",
    "keywords": [
      "pdf",
      "papers",
      "research"
    ],
    "url": "/pdf",
    "label": "Pdfs",
    "docType": "pdf-collection",
    "fs": "/resources/pdf"
  },
  {
    "id": "bibliography",
    "keywords": [
      "bib",
      "references",
      "citations"
    ],
    "url": "/bibliography",
    "label": "Bibliography",
    "docType": "bibliography"
  },
  {
    "id": "addSnippets",
    "url": "/snippets/add",
    "label": "Add Snippets",
    "docType": "none"
  },
  {
    "id": "snippets",
    "url": "/snippets",
    "label": "Snippets",
    "docType": "snippet"
  }
];

export {
  internalDocTypes,
  internalDocumentTypeConfigSchema,
  internalDocumentTypes
};
//# sourceMappingURL=chunk-T67JN632.js.map