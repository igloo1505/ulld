"use strict";Object.defineProperty(exports, "__esModule", {value: true});



var _chunkVJ3IVZTKcjs = require('./chunk-VJ3IVZTK.cjs');

// src/database/inputTypeSchemas/ReadingListCreateInputSchema.ts
var _zod = require('zod');
var ReadingListCreateInputSchema = _zod.z.object({
  name: _zod.z.string(),
  description: _zod.z.string().optional().nullable(),
  createdAt: _zod.z.coerce.date().optional(),
  lastUpdate: _zod.z.coerce.date().optional(),
  bibEntries: _zod.z.lazy(() => _chunkVJ3IVZTKcjs.BibEntryCreateNestedManyWithoutReadingListInputSchema).optional(),
  mdxNotes: _zod.z.lazy(() => _chunkVJ3IVZTKcjs.MdxNoteCreateNestedManyWithoutReadingListInputSchema).optional(),
  ipynbNotes: _zod.z.lazy(() => _chunkVJ3IVZTKcjs.IpynbCreateNestedManyWithoutReadingListInputSchema).optional()
}).strict();
var ReadingListCreateInputSchema_default = ReadingListCreateInputSchema;




exports.ReadingListCreateInputSchema = ReadingListCreateInputSchema; exports.ReadingListCreateInputSchema_default = ReadingListCreateInputSchema_default;
//# sourceMappingURL=chunk-S2NO5WC6.cjs.map