"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkNAPXQQJ3cjs = require('./chunk-NAPXQQJ3.cjs');


var _chunkVBWN4YJJcjs = require('./chunk-VBWN4YJJ.cjs');


var _chunk6JWX7MA3cjs = require('./chunk-6JWX7MA3.cjs');


var _chunkHGFNG2SEcjs = require('./chunk-HGFNG2SE.cjs');

// src/database/inputTypeSchemas/QuoteUncheckedUpdateManyInputSchema.ts
var _zod = require('zod');
var QuoteUncheckedUpdateManyInputSchema = _zod.z.object({
  body: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkHGFNG2SEcjs.StringFieldUpdateOperationsInputSchema)]).optional(),
  author: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkHGFNG2SEcjs.StringFieldUpdateOperationsInputSchema)]).optional(),
  source: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkVBWN4YJJcjs.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  pinned: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunkNAPXQQJ3cjs.BoolFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => _chunk6JWX7MA3cjs.DateTimeFieldUpdateOperationsInputSchema)]).optional()
}).strict();
var QuoteUncheckedUpdateManyInputSchema_default = QuoteUncheckedUpdateManyInputSchema;




exports.QuoteUncheckedUpdateManyInputSchema = QuoteUncheckedUpdateManyInputSchema; exports.QuoteUncheckedUpdateManyInputSchema_default = QuoteUncheckedUpdateManyInputSchema_default;
//# sourceMappingURL=chunk-HXBZ4SBL.cjs.map