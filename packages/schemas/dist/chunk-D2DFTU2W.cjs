"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkZKJQNPLOcjs = require('./chunk-ZKJQNPLO.cjs');


var _chunkDUGN4FHRcjs = require('./chunk-DUGN4FHR.cjs');


var _chunkW2Q2D26Lcjs = require('./chunk-W2Q2D26L.cjs');


var _chunkBYE7K7T6cjs = require('./chunk-BYE7K7T6.cjs');


var _chunkWMQC5L2Zcjs = require('./chunk-WMQC5L2Z.cjs');

// src/database/inputTypeSchemas/KanBanListCreateNestedManyWithoutKanbanInputSchema.ts
var _zod = require('zod');
var KanBanListCreateNestedManyWithoutKanbanInputSchema = _zod.z.object({
  create: _zod.z.union([_zod.z.lazy(() => _chunkW2Q2D26Lcjs.KanBanListCreateWithoutKanbanInputSchema), _zod.z.lazy(() => _chunkW2Q2D26Lcjs.KanBanListCreateWithoutKanbanInputSchema).array(), _zod.z.lazy(() => _chunkBYE7K7T6cjs.KanBanListUncheckedCreateWithoutKanbanInputSchema), _zod.z.lazy(() => _chunkBYE7K7T6cjs.KanBanListUncheckedCreateWithoutKanbanInputSchema).array()]).optional(),
  connectOrCreate: _zod.z.union([_zod.z.lazy(() => _chunkDUGN4FHRcjs.KanBanListCreateOrConnectWithoutKanbanInputSchema), _zod.z.lazy(() => _chunkDUGN4FHRcjs.KanBanListCreateOrConnectWithoutKanbanInputSchema).array()]).optional(),
  createMany: _zod.z.lazy(() => _chunkZKJQNPLOcjs.KanBanListCreateManyKanbanInputEnvelopeSchema).optional(),
  connect: _zod.z.union([_zod.z.lazy(() => _chunkWMQC5L2Zcjs.KanBanListWhereUniqueInputSchema), _zod.z.lazy(() => _chunkWMQC5L2Zcjs.KanBanListWhereUniqueInputSchema).array()]).optional()
}).strict();
var KanBanListCreateNestedManyWithoutKanbanInputSchema_default = KanBanListCreateNestedManyWithoutKanbanInputSchema;




exports.KanBanListCreateNestedManyWithoutKanbanInputSchema = KanBanListCreateNestedManyWithoutKanbanInputSchema; exports.KanBanListCreateNestedManyWithoutKanbanInputSchema_default = KanBanListCreateNestedManyWithoutKanbanInputSchema_default;
//# sourceMappingURL=chunk-D2DFTU2W.cjs.map