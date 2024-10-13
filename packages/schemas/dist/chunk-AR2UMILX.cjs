"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk5I6ZZEFLcjs = require('./chunk-5I6ZZEFL.cjs');


var _chunkFKYR7TNKcjs = require('./chunk-FKYR7TNK.cjs');


var _chunk3UGQGYK7cjs = require('./chunk-3UGQGYK7.cjs');

// src/database/inputTypeSchemas/KanBanListCreateOrConnectWithoutKanbanInputSchema.ts
var _zod = require('zod');
var KanBanListCreateOrConnectWithoutKanbanInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunk3UGQGYK7cjs.KanBanListWhereUniqueInputSchema),
  create: _zod.z.union([_zod.z.lazy(() => _chunk5I6ZZEFLcjs.KanBanListCreateWithoutKanbanInputSchema), _zod.z.lazy(() => _chunkFKYR7TNKcjs.KanBanListUncheckedCreateWithoutKanbanInputSchema)])
}).strict();
var KanBanListCreateOrConnectWithoutKanbanInputSchema_default = KanBanListCreateOrConnectWithoutKanbanInputSchema;




exports.KanBanListCreateOrConnectWithoutKanbanInputSchema = KanBanListCreateOrConnectWithoutKanbanInputSchema; exports.KanBanListCreateOrConnectWithoutKanbanInputSchema_default = KanBanListCreateOrConnectWithoutKanbanInputSchema_default;
//# sourceMappingURL=chunk-AR2UMILX.cjs.map