"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkKKFZCIPXcjs = require('./chunk-KKFZCIPX.cjs');


var _chunkYC4LZVP2cjs = require('./chunk-YC4LZVP2.cjs');


var _chunkL2XG7MBScjs = require('./chunk-L2XG7MBS.cjs');


var _chunkVILHLG4Ccjs = require('./chunk-VILHLG4C.cjs');


var _chunkCNQ52NQLcjs = require('./chunk-CNQ52NQL.cjs');


var _chunkAR2UMILXcjs = require('./chunk-AR2UMILX.cjs');


var _chunk5I6ZZEFLcjs = require('./chunk-5I6ZZEFL.cjs');


var _chunkFKYR7TNKcjs = require('./chunk-FKYR7TNK.cjs');


var _chunk3UGQGYK7cjs = require('./chunk-3UGQGYK7.cjs');

// src/database/inputTypeSchemas/KanBanListUpdateManyWithoutKanbanNestedInputSchema.ts
var _zod = require('zod');
var KanBanListUpdateManyWithoutKanbanNestedInputSchema = _zod.z.object({
  create: _zod.z.union([_zod.z.lazy(() => _chunk5I6ZZEFLcjs.KanBanListCreateWithoutKanbanInputSchema), _zod.z.lazy(() => _chunk5I6ZZEFLcjs.KanBanListCreateWithoutKanbanInputSchema).array(), _zod.z.lazy(() => _chunkFKYR7TNKcjs.KanBanListUncheckedCreateWithoutKanbanInputSchema), _zod.z.lazy(() => _chunkFKYR7TNKcjs.KanBanListUncheckedCreateWithoutKanbanInputSchema).array()]).optional(),
  connectOrCreate: _zod.z.union([_zod.z.lazy(() => _chunkAR2UMILXcjs.KanBanListCreateOrConnectWithoutKanbanInputSchema), _zod.z.lazy(() => _chunkAR2UMILXcjs.KanBanListCreateOrConnectWithoutKanbanInputSchema).array()]).optional(),
  upsert: _zod.z.union([_zod.z.lazy(() => _chunkVILHLG4Ccjs.KanBanListUpsertWithWhereUniqueWithoutKanbanInputSchema), _zod.z.lazy(() => _chunkVILHLG4Ccjs.KanBanListUpsertWithWhereUniqueWithoutKanbanInputSchema).array()]).optional(),
  createMany: _zod.z.lazy(() => _chunkCNQ52NQLcjs.KanBanListCreateManyKanbanInputEnvelopeSchema).optional(),
  set: _zod.z.union([_zod.z.lazy(() => _chunk3UGQGYK7cjs.KanBanListWhereUniqueInputSchema), _zod.z.lazy(() => _chunk3UGQGYK7cjs.KanBanListWhereUniqueInputSchema).array()]).optional(),
  disconnect: _zod.z.union([_zod.z.lazy(() => _chunk3UGQGYK7cjs.KanBanListWhereUniqueInputSchema), _zod.z.lazy(() => _chunk3UGQGYK7cjs.KanBanListWhereUniqueInputSchema).array()]).optional(),
  delete: _zod.z.union([_zod.z.lazy(() => _chunk3UGQGYK7cjs.KanBanListWhereUniqueInputSchema), _zod.z.lazy(() => _chunk3UGQGYK7cjs.KanBanListWhereUniqueInputSchema).array()]).optional(),
  connect: _zod.z.union([_zod.z.lazy(() => _chunk3UGQGYK7cjs.KanBanListWhereUniqueInputSchema), _zod.z.lazy(() => _chunk3UGQGYK7cjs.KanBanListWhereUniqueInputSchema).array()]).optional(),
  update: _zod.z.union([_zod.z.lazy(() => _chunkKKFZCIPXcjs.KanBanListUpdateWithWhereUniqueWithoutKanbanInputSchema), _zod.z.lazy(() => _chunkKKFZCIPXcjs.KanBanListUpdateWithWhereUniqueWithoutKanbanInputSchema).array()]).optional(),
  updateMany: _zod.z.union([_zod.z.lazy(() => _chunkYC4LZVP2cjs.KanBanListUpdateManyWithWhereWithoutKanbanInputSchema), _zod.z.lazy(() => _chunkYC4LZVP2cjs.KanBanListUpdateManyWithWhereWithoutKanbanInputSchema).array()]).optional(),
  deleteMany: _zod.z.union([_zod.z.lazy(() => _chunkL2XG7MBScjs.KanBanListScalarWhereInputSchema), _zod.z.lazy(() => _chunkL2XG7MBScjs.KanBanListScalarWhereInputSchema).array()]).optional()
}).strict();
var KanBanListUpdateManyWithoutKanbanNestedInputSchema_default = KanBanListUpdateManyWithoutKanbanNestedInputSchema;




exports.KanBanListUpdateManyWithoutKanbanNestedInputSchema = KanBanListUpdateManyWithoutKanbanNestedInputSchema; exports.KanBanListUpdateManyWithoutKanbanNestedInputSchema_default = KanBanListUpdateManyWithoutKanbanNestedInputSchema_default;
//# sourceMappingURL=chunk-U6PNJMDP.cjs.map