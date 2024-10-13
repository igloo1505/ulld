"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkVBWN4YJJcjs = require('./chunk-VBWN4YJJ.cjs');


var _chunk6JWX7MA3cjs = require('./chunk-6JWX7MA3.cjs');


var _chunkHGFNG2SEcjs = require('./chunk-HGFNG2SE.cjs');

// src/database/inputTypeSchemas/ReadingListUncheckedUpdateManyWithoutMdxNotesInputSchema.ts
var _zod = require('zod');
var ReadingListUncheckedUpdateManyWithoutMdxNotesInputSchema = _zod.z.object({
  name: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkHGFNG2SEcjs.StringFieldUpdateOperationsInputSchema)]).optional(),
  description: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkVBWN4YJJcjs.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  createdAt: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => _chunk6JWX7MA3cjs.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  lastUpdate: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => _chunk6JWX7MA3cjs.DateTimeFieldUpdateOperationsInputSchema)]).optional()
}).strict();
var ReadingListUncheckedUpdateManyWithoutMdxNotesInputSchema_default = ReadingListUncheckedUpdateManyWithoutMdxNotesInputSchema;




exports.ReadingListUncheckedUpdateManyWithoutMdxNotesInputSchema = ReadingListUncheckedUpdateManyWithoutMdxNotesInputSchema; exports.ReadingListUncheckedUpdateManyWithoutMdxNotesInputSchema_default = ReadingListUncheckedUpdateManyWithoutMdxNotesInputSchema_default;
//# sourceMappingURL=chunk-G7WS5DE7.cjs.map