"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkSJLKWSGXcjs = require('./chunk-SJLKWSGX.cjs');


var _chunkWUSGPU4Ncjs = require('./chunk-WUSGPU4N.cjs');


var _chunkR4BX55A7cjs = require('./chunk-R4BX55A7.cjs');


var _chunkTAJNKUCKcjs = require('./chunk-TAJNKUCK.cjs');


var _chunkGADYTP7Kcjs = require('./chunk-GADYTP7K.cjs');

// src/database/inputTypeSchemas/KanBanCardUpsertWithWhereUniqueWithoutKanBanListInputSchema.ts
var _zod = require('zod');
var KanBanCardUpsertWithWhereUniqueWithoutKanBanListInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkGADYTP7Kcjs.KanBanCardWhereUniqueInputSchema),
  update: _zod.z.union([_zod.z.lazy(() => _chunkSJLKWSGXcjs.KanBanCardUpdateWithoutKanBanListInputSchema), _zod.z.lazy(() => _chunkWUSGPU4Ncjs.KanBanCardUncheckedUpdateWithoutKanBanListInputSchema)]),
  create: _zod.z.union([_zod.z.lazy(() => _chunkR4BX55A7cjs.KanBanCardCreateWithoutKanBanListInputSchema), _zod.z.lazy(() => _chunkTAJNKUCKcjs.KanBanCardUncheckedCreateWithoutKanBanListInputSchema)])
}).strict();
var KanBanCardUpsertWithWhereUniqueWithoutKanBanListInputSchema_default = KanBanCardUpsertWithWhereUniqueWithoutKanBanListInputSchema;




exports.KanBanCardUpsertWithWhereUniqueWithoutKanBanListInputSchema = KanBanCardUpsertWithWhereUniqueWithoutKanBanListInputSchema; exports.KanBanCardUpsertWithWhereUniqueWithoutKanBanListInputSchema_default = KanBanCardUpsertWithWhereUniqueWithoutKanBanListInputSchema_default;
//# sourceMappingURL=chunk-XOIVTO2Y.cjs.map