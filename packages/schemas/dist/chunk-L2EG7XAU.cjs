"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkAHGSEPI3cjs = require('./chunk-AHGSEPI3.cjs');


var _chunk54IOCE2Kcjs = require('./chunk-54IOCE2K.cjs');


var _chunk67ASKHYDcjs = require('./chunk-67ASKHYD.cjs');

// src/database/inputTypeSchemas/KanBanCardUpdateWithWhereUniqueWithoutKanBanListInputSchema.ts
var _zod = require('zod');
var KanBanCardUpdateWithWhereUniqueWithoutKanBanListInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunk67ASKHYDcjs.KanBanCardWhereUniqueInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunkAHGSEPI3cjs.KanBanCardUpdateWithoutKanBanListInputSchema), _zod.z.lazy(() => _chunk54IOCE2Kcjs.KanBanCardUncheckedUpdateWithoutKanBanListInputSchema)])
}).strict();
var KanBanCardUpdateWithWhereUniqueWithoutKanBanListInputSchema_default = KanBanCardUpdateWithWhereUniqueWithoutKanBanListInputSchema;




exports.KanBanCardUpdateWithWhereUniqueWithoutKanBanListInputSchema = KanBanCardUpdateWithWhereUniqueWithoutKanBanListInputSchema; exports.KanBanCardUpdateWithWhereUniqueWithoutKanBanListInputSchema_default = KanBanCardUpdateWithWhereUniqueWithoutKanBanListInputSchema_default;
//# sourceMappingURL=chunk-L2EG7XAU.cjs.map