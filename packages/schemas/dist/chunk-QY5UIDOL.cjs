"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk5IP7IA4Kcjs = require('./chunk-5IP7IA4K.cjs');


var _chunkAQ6FV2MCcjs = require('./chunk-AQ6FV2MC.cjs');


var _chunkZCQDI3SRcjs = require('./chunk-ZCQDI3SR.cjs');

// src/database/inputTypeSchemas/KanBanListUpdateManyWithWhereWithoutKanbanInputSchema.ts
var _zod = require('zod');
var KanBanListUpdateManyWithWhereWithoutKanbanInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunk5IP7IA4Kcjs.KanBanListScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunkZCQDI3SRcjs.KanBanListUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunkAQ6FV2MCcjs.KanBanListUncheckedUpdateManyWithoutKanbanInputSchema)])
}).strict();
var KanBanListUpdateManyWithWhereWithoutKanbanInputSchema_default = KanBanListUpdateManyWithWhereWithoutKanbanInputSchema;




exports.KanBanListUpdateManyWithWhereWithoutKanbanInputSchema = KanBanListUpdateManyWithWhereWithoutKanbanInputSchema; exports.KanBanListUpdateManyWithWhereWithoutKanbanInputSchema_default = KanBanListUpdateManyWithWhereWithoutKanbanInputSchema_default;
//# sourceMappingURL=chunk-QY5UIDOL.cjs.map