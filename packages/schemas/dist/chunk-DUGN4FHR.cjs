"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkW2Q2D26Lcjs = require('./chunk-W2Q2D26L.cjs');


var _chunkBYE7K7T6cjs = require('./chunk-BYE7K7T6.cjs');


var _chunkWMQC5L2Zcjs = require('./chunk-WMQC5L2Z.cjs');

// src/database/inputTypeSchemas/KanBanListCreateOrConnectWithoutKanbanInputSchema.ts
var _zod = require('zod');
var KanBanListCreateOrConnectWithoutKanbanInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkWMQC5L2Zcjs.KanBanListWhereUniqueInputSchema),
  create: _zod.z.union([_zod.z.lazy(() => _chunkW2Q2D26Lcjs.KanBanListCreateWithoutKanbanInputSchema), _zod.z.lazy(() => _chunkBYE7K7T6cjs.KanBanListUncheckedCreateWithoutKanbanInputSchema)])
}).strict();
var KanBanListCreateOrConnectWithoutKanbanInputSchema_default = KanBanListCreateOrConnectWithoutKanbanInputSchema;




exports.KanBanListCreateOrConnectWithoutKanbanInputSchema = KanBanListCreateOrConnectWithoutKanbanInputSchema; exports.KanBanListCreateOrConnectWithoutKanbanInputSchema_default = KanBanListCreateOrConnectWithoutKanbanInputSchema_default;
//# sourceMappingURL=chunk-DUGN4FHR.cjs.map