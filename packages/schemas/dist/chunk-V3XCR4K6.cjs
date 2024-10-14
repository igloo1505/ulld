"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkSJLKWSGXcjs = require('./chunk-SJLKWSGX.cjs');


var _chunkWUSGPU4Ncjs = require('./chunk-WUSGPU4N.cjs');


var _chunkGADYTP7Kcjs = require('./chunk-GADYTP7K.cjs');

// src/database/inputTypeSchemas/KanBanCardUpdateWithWhereUniqueWithoutKanBanListInputSchema.ts
var _zod = require('zod');
var KanBanCardUpdateWithWhereUniqueWithoutKanBanListInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkGADYTP7Kcjs.KanBanCardWhereUniqueInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunkSJLKWSGXcjs.KanBanCardUpdateWithoutKanBanListInputSchema), _zod.z.lazy(() => _chunkWUSGPU4Ncjs.KanBanCardUncheckedUpdateWithoutKanBanListInputSchema)])
}).strict();
var KanBanCardUpdateWithWhereUniqueWithoutKanBanListInputSchema_default = KanBanCardUpdateWithWhereUniqueWithoutKanBanListInputSchema;




exports.KanBanCardUpdateWithWhereUniqueWithoutKanBanListInputSchema = KanBanCardUpdateWithWhereUniqueWithoutKanBanListInputSchema; exports.KanBanCardUpdateWithWhereUniqueWithoutKanBanListInputSchema_default = KanBanCardUpdateWithWhereUniqueWithoutKanBanListInputSchema_default;
//# sourceMappingURL=chunk-V3XCR4K6.cjs.map