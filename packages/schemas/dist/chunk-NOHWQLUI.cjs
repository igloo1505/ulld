"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk4HCQC4XGcjs = require('./chunk-4HCQC4XG.cjs');


var _chunkI5XF7I5Vcjs = require('./chunk-I5XF7I5V.cjs');

// src/database/inputTypeSchemas/KanbanUpdateManyMutationInputSchema.ts
var _zod = require('zod');
var KanbanUpdateManyMutationInputSchema = _zod.z.object({
  title: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkI5XF7I5Vcjs.StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => _chunk4HCQC4XGcjs.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  lastUpdate: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => _chunk4HCQC4XGcjs.DateTimeFieldUpdateOperationsInputSchema)]).optional()
}).strict();
var KanbanUpdateManyMutationInputSchema_default = KanbanUpdateManyMutationInputSchema;




exports.KanbanUpdateManyMutationInputSchema = KanbanUpdateManyMutationInputSchema; exports.KanbanUpdateManyMutationInputSchema_default = KanbanUpdateManyMutationInputSchema_default;
//# sourceMappingURL=chunk-NOHWQLUI.cjs.map