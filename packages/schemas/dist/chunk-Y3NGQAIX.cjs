"use strict";Object.defineProperty(exports, "__esModule", {value: true});



var _chunk6UVIQKPKcjs = require('./chunk-6UVIQKPK.cjs');

// src/database/inputTypeSchemas/ReadingListCreateInputSchema.ts
var _zod = require('zod');
var ReadingListCreateInputSchema = _zod.z.object({
  name: _zod.z.string(),
  description: _zod.z.string().optional().nullable(),
  createdAt: _zod.z.coerce.date().optional(),
  lastUpdate: _zod.z.coerce.date().optional(),
  bibEntries: _zod.z.lazy(() => _chunk6UVIQKPKcjs.BibEntryCreateNestedManyWithoutReadingListInputSchema).optional(),
  mdxNotes: _zod.z.lazy(() => _chunk6UVIQKPKcjs.MdxNoteCreateNestedManyWithoutReadingListInputSchema).optional(),
  ipynbNotes: _zod.z.lazy(() => _chunk6UVIQKPKcjs.IpynbCreateNestedManyWithoutReadingListInputSchema).optional()
}).strict();
var ReadingListCreateInputSchema_default = ReadingListCreateInputSchema;




exports.ReadingListCreateInputSchema = ReadingListCreateInputSchema; exports.ReadingListCreateInputSchema_default = ReadingListCreateInputSchema_default;
//# sourceMappingURL=chunk-Y3NGQAIX.cjs.map