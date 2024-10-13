"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk6JWX7MA3cjs = require('./chunk-6JWX7MA3.cjs');


var _chunkHGFNG2SEcjs = require('./chunk-HGFNG2SE.cjs');

// src/database/inputTypeSchemas/TopicUpdateManyMutationInputSchema.ts
var _zod = require('zod');
var TopicUpdateManyMutationInputSchema = _zod.z.object({
  value: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkHGFNG2SEcjs.StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => _chunk6JWX7MA3cjs.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  lastAccess: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => _chunk6JWX7MA3cjs.DateTimeFieldUpdateOperationsInputSchema)]).optional()
}).strict();
var TopicUpdateManyMutationInputSchema_default = TopicUpdateManyMutationInputSchema;




exports.TopicUpdateManyMutationInputSchema = TopicUpdateManyMutationInputSchema; exports.TopicUpdateManyMutationInputSchema_default = TopicUpdateManyMutationInputSchema_default;
//# sourceMappingURL=chunk-7YFOWEK6.cjs.map