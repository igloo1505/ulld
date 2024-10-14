"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkMX5QLLT7cjs = require('./chunk-MX5QLLT7.cjs');


var _chunkQY5UIDOLcjs = require('./chunk-QY5UIDOL.cjs');


var _chunk5IP7IA4Kcjs = require('./chunk-5IP7IA4K.cjs');


var _chunkZ42FN5FWcjs = require('./chunk-Z42FN5FW.cjs');


var _chunkZKJQNPLOcjs = require('./chunk-ZKJQNPLO.cjs');


var _chunkDUGN4FHRcjs = require('./chunk-DUGN4FHR.cjs');


var _chunkW2Q2D26Lcjs = require('./chunk-W2Q2D26L.cjs');


var _chunkBYE7K7T6cjs = require('./chunk-BYE7K7T6.cjs');


var _chunkWMQC5L2Zcjs = require('./chunk-WMQC5L2Z.cjs');

// src/database/inputTypeSchemas/KanBanListUpdateManyWithoutKanbanNestedInputSchema.ts
var _zod = require('zod');
var KanBanListUpdateManyWithoutKanbanNestedInputSchema = _zod.z.object({
  create: _zod.z.union([_zod.z.lazy(() => _chunkW2Q2D26Lcjs.KanBanListCreateWithoutKanbanInputSchema), _zod.z.lazy(() => _chunkW2Q2D26Lcjs.KanBanListCreateWithoutKanbanInputSchema).array(), _zod.z.lazy(() => _chunkBYE7K7T6cjs.KanBanListUncheckedCreateWithoutKanbanInputSchema), _zod.z.lazy(() => _chunkBYE7K7T6cjs.KanBanListUncheckedCreateWithoutKanbanInputSchema).array()]).optional(),
  connectOrCreate: _zod.z.union([_zod.z.lazy(() => _chunkDUGN4FHRcjs.KanBanListCreateOrConnectWithoutKanbanInputSchema), _zod.z.lazy(() => _chunkDUGN4FHRcjs.KanBanListCreateOrConnectWithoutKanbanInputSchema).array()]).optional(),
  upsert: _zod.z.union([_zod.z.lazy(() => _chunkZ42FN5FWcjs.KanBanListUpsertWithWhereUniqueWithoutKanbanInputSchema), _zod.z.lazy(() => _chunkZ42FN5FWcjs.KanBanListUpsertWithWhereUniqueWithoutKanbanInputSchema).array()]).optional(),
  createMany: _zod.z.lazy(() => _chunkZKJQNPLOcjs.KanBanListCreateManyKanbanInputEnvelopeSchema).optional(),
  set: _zod.z.union([_zod.z.lazy(() => _chunkWMQC5L2Zcjs.KanBanListWhereUniqueInputSchema), _zod.z.lazy(() => _chunkWMQC5L2Zcjs.KanBanListWhereUniqueInputSchema).array()]).optional(),
  disconnect: _zod.z.union([_zod.z.lazy(() => _chunkWMQC5L2Zcjs.KanBanListWhereUniqueInputSchema), _zod.z.lazy(() => _chunkWMQC5L2Zcjs.KanBanListWhereUniqueInputSchema).array()]).optional(),
  delete: _zod.z.union([_zod.z.lazy(() => _chunkWMQC5L2Zcjs.KanBanListWhereUniqueInputSchema), _zod.z.lazy(() => _chunkWMQC5L2Zcjs.KanBanListWhereUniqueInputSchema).array()]).optional(),
  connect: _zod.z.union([_zod.z.lazy(() => _chunkWMQC5L2Zcjs.KanBanListWhereUniqueInputSchema), _zod.z.lazy(() => _chunkWMQC5L2Zcjs.KanBanListWhereUniqueInputSchema).array()]).optional(),
  update: _zod.z.union([_zod.z.lazy(() => _chunkMX5QLLT7cjs.KanBanListUpdateWithWhereUniqueWithoutKanbanInputSchema), _zod.z.lazy(() => _chunkMX5QLLT7cjs.KanBanListUpdateWithWhereUniqueWithoutKanbanInputSchema).array()]).optional(),
  updateMany: _zod.z.union([_zod.z.lazy(() => _chunkQY5UIDOLcjs.KanBanListUpdateManyWithWhereWithoutKanbanInputSchema), _zod.z.lazy(() => _chunkQY5UIDOLcjs.KanBanListUpdateManyWithWhereWithoutKanbanInputSchema).array()]).optional(),
  deleteMany: _zod.z.union([_zod.z.lazy(() => _chunk5IP7IA4Kcjs.KanBanListScalarWhereInputSchema), _zod.z.lazy(() => _chunk5IP7IA4Kcjs.KanBanListScalarWhereInputSchema).array()]).optional()
}).strict();
var KanBanListUpdateManyWithoutKanbanNestedInputSchema_default = KanBanListUpdateManyWithoutKanbanNestedInputSchema;




exports.KanBanListUpdateManyWithoutKanbanNestedInputSchema = KanBanListUpdateManyWithoutKanbanNestedInputSchema; exports.KanBanListUpdateManyWithoutKanbanNestedInputSchema_default = KanBanListUpdateManyWithoutKanbanNestedInputSchema_default;
//# sourceMappingURL=chunk-EOEQ3KTZ.cjs.map