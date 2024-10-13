"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkDN3GUCEKcjs = require('./chunk-DN3GUCEK.cjs');

// src/zod/internalDocumentTypes.ts
var _zod = require('zod');
var internalDocTypes = _zod.z.union([
  _zod.z.literal("bookmarks"),
  _zod.z.literal("snippets")
]);
var internalDocumentTypeConfigSchema = _chunkDN3GUCEKcjs.documentTypeConfigSchemaBase.partial({
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





exports.internalDocTypes = internalDocTypes; exports.internalDocumentTypeConfigSchema = internalDocumentTypeConfigSchema; exports.internalDocumentTypes = internalDocumentTypes;
//# sourceMappingURL=chunk-YRKEHSSO.cjs.map