"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkIDXHH7OJcjs = require('./chunk-IDXHH7OJ.cjs');


var _chunkHHR6Z4QKcjs = require('./chunk-HHR6Z4QK.cjs');


var _chunkYGCZ3T7Tcjs = require('./chunk-YGCZ3T7T.cjs');

// src/database/inputTypeSchemas/KanBanListUpdateWithoutKanbanInputSchema.ts
var _zod = require('zod');
var KanBanListUpdateWithoutKanbanInputSchema = _zod.z.object({
  indexWithinBoard: _zod.z.union([_zod.z.number().int(), _zod.z.lazy(() => _chunkYGCZ3T7Tcjs.IntFieldUpdateOperationsInputSchema)]).optional(),
  title: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkHHR6Z4QKcjs.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  cards: _zod.z.lazy(() => _chunkIDXHH7OJcjs.KanBanCardUpdateManyWithoutKanBanListNestedInputSchema).optional()
}).strict();
var KanBanListUpdateWithoutKanbanInputSchema_default = KanBanListUpdateWithoutKanbanInputSchema;




exports.KanBanListUpdateWithoutKanbanInputSchema = KanBanListUpdateWithoutKanbanInputSchema; exports.KanBanListUpdateWithoutKanbanInputSchema_default = KanBanListUpdateWithoutKanbanInputSchema_default;
//# sourceMappingURL=chunk-64OUIQUO.cjs.map