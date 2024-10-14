"use strict";Object.defineProperty(exports, "__esModule", {value: true});



var _chunkVJ3IVZTKcjs = require('./chunk-VJ3IVZTK.cjs');

// src/database/inputTypeSchemas/ReadingListUncheckedCreateInputSchema.ts
var _zod = require('zod');
var ReadingListUncheckedCreateInputSchema = _zod.z.object({
  name: _zod.z.string(),
  description: _zod.z.string().optional().nullable(),
  createdAt: _zod.z.coerce.date().optional(),
  lastUpdate: _zod.z.coerce.date().optional(),
  bibEntries: _zod.z.lazy(() => _chunkVJ3IVZTKcjs.BibEntryUncheckedCreateNestedManyWithoutReadingListInputSchema).optional(),
  mdxNotes: _zod.z.lazy(() => _chunkVJ3IVZTKcjs.MdxNoteUncheckedCreateNestedManyWithoutReadingListInputSchema).optional(),
  ipynbNotes: _zod.z.lazy(() => _chunkVJ3IVZTKcjs.IpynbUncheckedCreateNestedManyWithoutReadingListInputSchema).optional()
}).strict();
var ReadingListUncheckedCreateInputSchema_default = ReadingListUncheckedCreateInputSchema;




exports.ReadingListUncheckedCreateInputSchema = ReadingListUncheckedCreateInputSchema; exports.ReadingListUncheckedCreateInputSchema_default = ReadingListUncheckedCreateInputSchema_default;
//# sourceMappingURL=chunk-CUON643H.cjs.map