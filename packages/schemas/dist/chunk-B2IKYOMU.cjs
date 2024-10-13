"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk6JWX7MA3cjs = require('./chunk-6JWX7MA3.cjs');


var _chunkHGFNG2SEcjs = require('./chunk-HGFNG2SE.cjs');

// src/database/inputTypeSchemas/KanbanUpdateManyMutationInputSchema.ts
var _zod = require('zod');
var KanbanUpdateManyMutationInputSchema = _zod.z.object({
  title: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkHGFNG2SEcjs.StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => _chunk6JWX7MA3cjs.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  lastUpdate: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => _chunk6JWX7MA3cjs.DateTimeFieldUpdateOperationsInputSchema)]).optional()
}).strict();
var KanbanUpdateManyMutationInputSchema_default = KanbanUpdateManyMutationInputSchema;




exports.KanbanUpdateManyMutationInputSchema = KanbanUpdateManyMutationInputSchema; exports.KanbanUpdateManyMutationInputSchema_default = KanbanUpdateManyMutationInputSchema_default;
//# sourceMappingURL=chunk-B2IKYOMU.cjs.map