"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkMVJIKWWQcjs = require('./chunk-MVJIKWWQ.cjs');


var _chunk64OUIQUOcjs = require('./chunk-64OUIQUO.cjs');


var _chunkWMQC5L2Zcjs = require('./chunk-WMQC5L2Z.cjs');

// src/database/inputTypeSchemas/KanBanListUpdateWithWhereUniqueWithoutKanbanInputSchema.ts
var _zod = require('zod');
var KanBanListUpdateWithWhereUniqueWithoutKanbanInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkWMQC5L2Zcjs.KanBanListWhereUniqueInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunk64OUIQUOcjs.KanBanListUpdateWithoutKanbanInputSchema), _zod.z.lazy(() => _chunkMVJIKWWQcjs.KanBanListUncheckedUpdateWithoutKanbanInputSchema)])
}).strict();
var KanBanListUpdateWithWhereUniqueWithoutKanbanInputSchema_default = KanBanListUpdateWithWhereUniqueWithoutKanbanInputSchema;




exports.KanBanListUpdateWithWhereUniqueWithoutKanbanInputSchema = KanBanListUpdateWithWhereUniqueWithoutKanbanInputSchema; exports.KanBanListUpdateWithWhereUniqueWithoutKanbanInputSchema_default = KanBanListUpdateWithWhereUniqueWithoutKanbanInputSchema_default;
//# sourceMappingURL=chunk-MX5QLLT7.cjs.map