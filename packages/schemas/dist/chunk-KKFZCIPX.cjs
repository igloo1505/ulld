"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkCSGA2QYMcjs = require('./chunk-CSGA2QYM.cjs');


var _chunk3TNFE3YHcjs = require('./chunk-3TNFE3YH.cjs');


var _chunk3UGQGYK7cjs = require('./chunk-3UGQGYK7.cjs');

// src/database/inputTypeSchemas/KanBanListUpdateWithWhereUniqueWithoutKanbanInputSchema.ts
var _zod = require('zod');
var KanBanListUpdateWithWhereUniqueWithoutKanbanInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunk3UGQGYK7cjs.KanBanListWhereUniqueInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunk3TNFE3YHcjs.KanBanListUpdateWithoutKanbanInputSchema), _zod.z.lazy(() => _chunkCSGA2QYMcjs.KanBanListUncheckedUpdateWithoutKanbanInputSchema)])
}).strict();
var KanBanListUpdateWithWhereUniqueWithoutKanbanInputSchema_default = KanBanListUpdateWithWhereUniqueWithoutKanbanInputSchema;




exports.KanBanListUpdateWithWhereUniqueWithoutKanbanInputSchema = KanBanListUpdateWithWhereUniqueWithoutKanbanInputSchema; exports.KanBanListUpdateWithWhereUniqueWithoutKanbanInputSchema_default = KanBanListUpdateWithWhereUniqueWithoutKanbanInputSchema_default;
//# sourceMappingURL=chunk-KKFZCIPX.cjs.map