"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkLDZNGXK5cjs = require('./chunk-LDZNGXK5.cjs');


var _chunk6JWX7MA3cjs = require('./chunk-6JWX7MA3.cjs');


var _chunkHGFNG2SEcjs = require('./chunk-HGFNG2SE.cjs');

// src/database/inputTypeSchemas/TagUncheckedUpdateManyWithoutQAPairInputSchema.ts
var _zod = require('zod');
var TagUncheckedUpdateManyWithoutQAPairInputSchema = _zod.z.object({
  value: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkHGFNG2SEcjs.StringFieldUpdateOperationsInputSchema)]).optional(),
  kanbanId: _zod.z.union([_zod.z.number().int(), _zod.z.lazy(() => _chunkLDZNGXK5cjs.NullableIntFieldUpdateOperationsInputSchema)]).optional().nullable(),
  createdAt: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => _chunk6JWX7MA3cjs.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  lastAccess: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => _chunk6JWX7MA3cjs.DateTimeFieldUpdateOperationsInputSchema)]).optional()
}).strict();
var TagUncheckedUpdateManyWithoutQAPairInputSchema_default = TagUncheckedUpdateManyWithoutQAPairInputSchema;




exports.TagUncheckedUpdateManyWithoutQAPairInputSchema = TagUncheckedUpdateManyWithoutQAPairInputSchema; exports.TagUncheckedUpdateManyWithoutQAPairInputSchema_default = TagUncheckedUpdateManyWithoutQAPairInputSchema_default;
//# sourceMappingURL=chunk-QVI3DT6U.cjs.map