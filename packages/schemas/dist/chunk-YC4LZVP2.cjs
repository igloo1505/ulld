"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkL2XG7MBScjs = require('./chunk-L2XG7MBS.cjs');


var _chunkHBOE5I7Tcjs = require('./chunk-HBOE5I7T.cjs');


var _chunkFYS4B3IJcjs = require('./chunk-FYS4B3IJ.cjs');

// src/database/inputTypeSchemas/KanBanListUpdateManyWithWhereWithoutKanbanInputSchema.ts
var _zod = require('zod');
var KanBanListUpdateManyWithWhereWithoutKanbanInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkL2XG7MBScjs.KanBanListScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunkFYS4B3IJcjs.KanBanListUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunkHBOE5I7Tcjs.KanBanListUncheckedUpdateManyWithoutKanbanInputSchema)])
}).strict();
var KanBanListUpdateManyWithWhereWithoutKanbanInputSchema_default = KanBanListUpdateManyWithWhereWithoutKanbanInputSchema;




exports.KanBanListUpdateManyWithWhereWithoutKanbanInputSchema = KanBanListUpdateManyWithWhereWithoutKanbanInputSchema; exports.KanBanListUpdateManyWithWhereWithoutKanbanInputSchema_default = KanBanListUpdateManyWithWhereWithoutKanbanInputSchema_default;
//# sourceMappingURL=chunk-YC4LZVP2.cjs.map