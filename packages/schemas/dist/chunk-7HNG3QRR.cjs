"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkOCRVORUIcjs = require('./chunk-OCRVORUI.cjs');


var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/NoteTypeOrderByRelevanceInputSchema.ts
var _zod = require('zod');
var NoteTypeOrderByRelevanceInputSchema = _zod.z.object({
  fields: _zod.z.union([_zod.z.lazy(() => _chunkOCRVORUIcjs.NoteTypeOrderByRelevanceFieldEnumSchema), _zod.z.lazy(() => _chunkOCRVORUIcjs.NoteTypeOrderByRelevanceFieldEnumSchema).array()]),
  sort: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema),
  search: _zod.z.string()
}).strict();
var NoteTypeOrderByRelevanceInputSchema_default = NoteTypeOrderByRelevanceInputSchema;




exports.NoteTypeOrderByRelevanceInputSchema = NoteTypeOrderByRelevanceInputSchema; exports.NoteTypeOrderByRelevanceInputSchema_default = NoteTypeOrderByRelevanceInputSchema_default;
//# sourceMappingURL=chunk-7HNG3QRR.cjs.map