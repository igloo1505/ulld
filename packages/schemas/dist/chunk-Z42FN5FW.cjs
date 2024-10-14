"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkMVJIKWWQcjs = require('./chunk-MVJIKWWQ.cjs');


var _chunk64OUIQUOcjs = require('./chunk-64OUIQUO.cjs');


var _chunkW2Q2D26Lcjs = require('./chunk-W2Q2D26L.cjs');


var _chunkBYE7K7T6cjs = require('./chunk-BYE7K7T6.cjs');


var _chunkWMQC5L2Zcjs = require('./chunk-WMQC5L2Z.cjs');

// src/database/inputTypeSchemas/KanBanListUpsertWithWhereUniqueWithoutKanbanInputSchema.ts
var _zod = require('zod');
var KanBanListUpsertWithWhereUniqueWithoutKanbanInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkWMQC5L2Zcjs.KanBanListWhereUniqueInputSchema),
  update: _zod.z.union([_zod.z.lazy(() => _chunk64OUIQUOcjs.KanBanListUpdateWithoutKanbanInputSchema), _zod.z.lazy(() => _chunkMVJIKWWQcjs.KanBanListUncheckedUpdateWithoutKanbanInputSchema)]),
  create: _zod.z.union([_zod.z.lazy(() => _chunkW2Q2D26Lcjs.KanBanListCreateWithoutKanbanInputSchema), _zod.z.lazy(() => _chunkBYE7K7T6cjs.KanBanListUncheckedCreateWithoutKanbanInputSchema)])
}).strict();
var KanBanListUpsertWithWhereUniqueWithoutKanbanInputSchema_default = KanBanListUpsertWithWhereUniqueWithoutKanbanInputSchema;




exports.KanBanListUpsertWithWhereUniqueWithoutKanbanInputSchema = KanBanListUpsertWithWhereUniqueWithoutKanbanInputSchema; exports.KanBanListUpsertWithWhereUniqueWithoutKanbanInputSchema_default = KanBanListUpsertWithWhereUniqueWithoutKanbanInputSchema_default;
//# sourceMappingURL=chunk-Z42FN5FW.cjs.map