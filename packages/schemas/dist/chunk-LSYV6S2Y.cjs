"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk4HCQC4XGcjs = require('./chunk-4HCQC4XG.cjs');


var _chunkI5XF7I5Vcjs = require('./chunk-I5XF7I5V.cjs');

// src/database/inputTypeSchemas/SubjectUncheckedUpdateManyWithoutKanbanInputSchema.ts
var _zod = require('zod');
var SubjectUncheckedUpdateManyWithoutKanbanInputSchema = _zod.z.object({
  value: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkI5XF7I5Vcjs.StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => _chunk4HCQC4XGcjs.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  lastAccess: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => _chunk4HCQC4XGcjs.DateTimeFieldUpdateOperationsInputSchema)]).optional()
}).strict();
var SubjectUncheckedUpdateManyWithoutKanbanInputSchema_default = SubjectUncheckedUpdateManyWithoutKanbanInputSchema;




exports.SubjectUncheckedUpdateManyWithoutKanbanInputSchema = SubjectUncheckedUpdateManyWithoutKanbanInputSchema; exports.SubjectUncheckedUpdateManyWithoutKanbanInputSchema_default = SubjectUncheckedUpdateManyWithoutKanbanInputSchema_default;
//# sourceMappingURL=chunk-LSYV6S2Y.cjs.map