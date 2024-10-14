"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkXKHMZYAAcjs = require('./chunk-XKHMZYAA.cjs');


var _chunkLAHMCABPcjs = require('./chunk-LAHMCABP.cjs');


var _chunkVTZFISLTcjs = require('./chunk-VTZFISLT.cjs');

// src/database/inputTypeSchemas/KanBanCardUpdateManyWithWhereWithoutKanBanListInputSchema.ts
var _zod = require('zod');
var KanBanCardUpdateManyWithWhereWithoutKanBanListInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkXKHMZYAAcjs.KanBanCardScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunkVTZFISLTcjs.KanBanCardUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunkLAHMCABPcjs.KanBanCardUncheckedUpdateManyWithoutKanBanListInputSchema)])
}).strict();
var KanBanCardUpdateManyWithWhereWithoutKanBanListInputSchema_default = KanBanCardUpdateManyWithWhereWithoutKanBanListInputSchema;




exports.KanBanCardUpdateManyWithWhereWithoutKanBanListInputSchema = KanBanCardUpdateManyWithWhereWithoutKanBanListInputSchema; exports.KanBanCardUpdateManyWithWhereWithoutKanBanListInputSchema_default = KanBanCardUpdateManyWithWhereWithoutKanBanListInputSchema_default;
//# sourceMappingURL=chunk-73BLLM4M.cjs.map