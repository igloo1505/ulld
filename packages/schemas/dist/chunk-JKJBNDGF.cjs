"use strict";Object.defineProperty(exports, "__esModule", {value: true});



var _chunkF67HEIG4cjs = require('./chunk-F67HEIG4.cjs');


var _chunkVBWN4YJJcjs = require('./chunk-VBWN4YJJ.cjs');


var _chunk6JWX7MA3cjs = require('./chunk-6JWX7MA3.cjs');


var _chunkHGFNG2SEcjs = require('./chunk-HGFNG2SE.cjs');

// src/database/inputTypeSchemas/ReadingListUncheckedUpdateInputSchema.ts
var _zod = require('zod');
var ReadingListUncheckedUpdateInputSchema = _zod.z.object({
  name: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkHGFNG2SEcjs.StringFieldUpdateOperationsInputSchema)]).optional(),
  description: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkVBWN4YJJcjs.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  createdAt: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => _chunk6JWX7MA3cjs.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  lastUpdate: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => _chunk6JWX7MA3cjs.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  bibEntries: _zod.z.lazy(() => _chunkF67HEIG4cjs.BibEntryUncheckedUpdateManyWithoutReadingListNestedInputSchema).optional(),
  mdxNotes: _zod.z.lazy(() => _chunkF67HEIG4cjs.MdxNoteUncheckedUpdateManyWithoutReadingListNestedInputSchema).optional(),
  ipynbNotes: _zod.z.lazy(() => _chunkF67HEIG4cjs.IpynbUncheckedUpdateManyWithoutReadingListNestedInputSchema).optional()
}).strict();
var ReadingListUncheckedUpdateInputSchema_default = ReadingListUncheckedUpdateInputSchema;




exports.ReadingListUncheckedUpdateInputSchema = ReadingListUncheckedUpdateInputSchema; exports.ReadingListUncheckedUpdateInputSchema_default = ReadingListUncheckedUpdateInputSchema_default;
//# sourceMappingURL=chunk-JKJBNDGF.cjs.map