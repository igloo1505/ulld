"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkCNQ52NQLcjs = require('./chunk-CNQ52NQL.cjs');


var _chunkAR2UMILXcjs = require('./chunk-AR2UMILX.cjs');


var _chunk5I6ZZEFLcjs = require('./chunk-5I6ZZEFL.cjs');


var _chunkFKYR7TNKcjs = require('./chunk-FKYR7TNK.cjs');


var _chunk3UGQGYK7cjs = require('./chunk-3UGQGYK7.cjs');

// src/database/inputTypeSchemas/KanBanListCreateNestedManyWithoutKanbanInputSchema.ts
var _zod = require('zod');
var KanBanListCreateNestedManyWithoutKanbanInputSchema = _zod.z.object({
  create: _zod.z.union([_zod.z.lazy(() => _chunk5I6ZZEFLcjs.KanBanListCreateWithoutKanbanInputSchema), _zod.z.lazy(() => _chunk5I6ZZEFLcjs.KanBanListCreateWithoutKanbanInputSchema).array(), _zod.z.lazy(() => _chunkFKYR7TNKcjs.KanBanListUncheckedCreateWithoutKanbanInputSchema), _zod.z.lazy(() => _chunkFKYR7TNKcjs.KanBanListUncheckedCreateWithoutKanbanInputSchema).array()]).optional(),
  connectOrCreate: _zod.z.union([_zod.z.lazy(() => _chunkAR2UMILXcjs.KanBanListCreateOrConnectWithoutKanbanInputSchema), _zod.z.lazy(() => _chunkAR2UMILXcjs.KanBanListCreateOrConnectWithoutKanbanInputSchema).array()]).optional(),
  createMany: _zod.z.lazy(() => _chunkCNQ52NQLcjs.KanBanListCreateManyKanbanInputEnvelopeSchema).optional(),
  connect: _zod.z.union([_zod.z.lazy(() => _chunk3UGQGYK7cjs.KanBanListWhereUniqueInputSchema), _zod.z.lazy(() => _chunk3UGQGYK7cjs.KanBanListWhereUniqueInputSchema).array()]).optional()
}).strict();
var KanBanListCreateNestedManyWithoutKanbanInputSchema_default = KanBanListCreateNestedManyWithoutKanbanInputSchema;




exports.KanBanListCreateNestedManyWithoutKanbanInputSchema = KanBanListCreateNestedManyWithoutKanbanInputSchema; exports.KanBanListCreateNestedManyWithoutKanbanInputSchema_default = KanBanListCreateNestedManyWithoutKanbanInputSchema_default;
//# sourceMappingURL=chunk-TVVQ25TT.cjs.map