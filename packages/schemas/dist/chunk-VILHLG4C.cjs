"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkCSGA2QYMcjs = require('./chunk-CSGA2QYM.cjs');


var _chunk3TNFE3YHcjs = require('./chunk-3TNFE3YH.cjs');


var _chunk5I6ZZEFLcjs = require('./chunk-5I6ZZEFL.cjs');


var _chunkFKYR7TNKcjs = require('./chunk-FKYR7TNK.cjs');


var _chunk3UGQGYK7cjs = require('./chunk-3UGQGYK7.cjs');

// src/database/inputTypeSchemas/KanBanListUpsertWithWhereUniqueWithoutKanbanInputSchema.ts
var _zod = require('zod');
var KanBanListUpsertWithWhereUniqueWithoutKanbanInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunk3UGQGYK7cjs.KanBanListWhereUniqueInputSchema),
  update: _zod.z.union([_zod.z.lazy(() => _chunk3TNFE3YHcjs.KanBanListUpdateWithoutKanbanInputSchema), _zod.z.lazy(() => _chunkCSGA2QYMcjs.KanBanListUncheckedUpdateWithoutKanbanInputSchema)]),
  create: _zod.z.union([_zod.z.lazy(() => _chunk5I6ZZEFLcjs.KanBanListCreateWithoutKanbanInputSchema), _zod.z.lazy(() => _chunkFKYR7TNKcjs.KanBanListUncheckedCreateWithoutKanbanInputSchema)])
}).strict();
var KanBanListUpsertWithWhereUniqueWithoutKanbanInputSchema_default = KanBanListUpsertWithWhereUniqueWithoutKanbanInputSchema;




exports.KanBanListUpsertWithWhereUniqueWithoutKanbanInputSchema = KanBanListUpsertWithWhereUniqueWithoutKanbanInputSchema; exports.KanBanListUpsertWithWhereUniqueWithoutKanbanInputSchema_default = KanBanListUpsertWithWhereUniqueWithoutKanbanInputSchema_default;
//# sourceMappingURL=chunk-VILHLG4C.cjs.map