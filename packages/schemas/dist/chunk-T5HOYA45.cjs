"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkAHGSEPI3cjs = require('./chunk-AHGSEPI3.cjs');


var _chunk54IOCE2Kcjs = require('./chunk-54IOCE2K.cjs');


var _chunkKRVWBH4Lcjs = require('./chunk-KRVWBH4L.cjs');


var _chunkFGUG347Ycjs = require('./chunk-FGUG347Y.cjs');


var _chunk67ASKHYDcjs = require('./chunk-67ASKHYD.cjs');

// src/database/inputTypeSchemas/KanBanCardUpsertWithWhereUniqueWithoutKanBanListInputSchema.ts
var _zod = require('zod');
var KanBanCardUpsertWithWhereUniqueWithoutKanBanListInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunk67ASKHYDcjs.KanBanCardWhereUniqueInputSchema),
  update: _zod.z.union([_zod.z.lazy(() => _chunkAHGSEPI3cjs.KanBanCardUpdateWithoutKanBanListInputSchema), _zod.z.lazy(() => _chunk54IOCE2Kcjs.KanBanCardUncheckedUpdateWithoutKanBanListInputSchema)]),
  create: _zod.z.union([_zod.z.lazy(() => _chunkKRVWBH4Lcjs.KanBanCardCreateWithoutKanBanListInputSchema), _zod.z.lazy(() => _chunkFGUG347Ycjs.KanBanCardUncheckedCreateWithoutKanBanListInputSchema)])
}).strict();
var KanBanCardUpsertWithWhereUniqueWithoutKanBanListInputSchema_default = KanBanCardUpsertWithWhereUniqueWithoutKanBanListInputSchema;




exports.KanBanCardUpsertWithWhereUniqueWithoutKanBanListInputSchema = KanBanCardUpsertWithWhereUniqueWithoutKanBanListInputSchema; exports.KanBanCardUpsertWithWhereUniqueWithoutKanBanListInputSchema_default = KanBanCardUpsertWithWhereUniqueWithoutKanBanListInputSchema_default;
//# sourceMappingURL=chunk-T5HOYA45.cjs.map