"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkEPH6L2T7cjs = require('./chunk-EPH6L2T7.cjs');


var _chunkIDXHH7OJcjs = require('./chunk-IDXHH7OJ.cjs');


var _chunkHHR6Z4QKcjs = require('./chunk-HHR6Z4QK.cjs');


var _chunkYGCZ3T7Tcjs = require('./chunk-YGCZ3T7T.cjs');

// src/database/inputTypeSchemas/KanBanListUpdateInputSchema.ts
var _zod = require('zod');
var KanBanListUpdateInputSchema = _zod.z.object({
  indexWithinBoard: _zod.z.union([_zod.z.number().int(), _zod.z.lazy(() => _chunkYGCZ3T7Tcjs.IntFieldUpdateOperationsInputSchema)]).optional(),
  title: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkHHR6Z4QKcjs.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  cards: _zod.z.lazy(() => _chunkIDXHH7OJcjs.KanBanCardUpdateManyWithoutKanBanListNestedInputSchema).optional(),
  Kanban: _zod.z.lazy(() => _chunkEPH6L2T7cjs.KanbanUpdateOneWithoutListsNestedInputSchema).optional()
}).strict();
var KanBanListUpdateInputSchema_default = KanBanListUpdateInputSchema;




exports.KanBanListUpdateInputSchema = KanBanListUpdateInputSchema; exports.KanBanListUpdateInputSchema_default = KanBanListUpdateInputSchema_default;
//# sourceMappingURL=chunk-7UD6JHCA.cjs.map