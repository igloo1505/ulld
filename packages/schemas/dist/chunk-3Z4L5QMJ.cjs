"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk3QFF6GPIcjs = require('./chunk-3QFF6GPI.cjs');


var _chunk6B46VHFIcjs = require('./chunk-6B46VHFI.cjs');


var _chunkYVTZ3K7Zcjs = require('./chunk-YVTZ3K7Z.cjs');


var _chunkBAZQIFUNcjs = require('./chunk-BAZQIFUN.cjs');


var _chunkUNUMUJ42cjs = require('./chunk-UNUMUJ42.cjs');

// src/database/inputTypeSchemas/KanBanListUpsertWithoutCardsInputSchema.ts
var _zod = require('zod');
var KanBanListUpsertWithoutCardsInputSchema = _zod.z.object({
  update: _zod.z.union([_zod.z.lazy(() => _chunk6B46VHFIcjs.KanBanListUpdateWithoutCardsInputSchema), _zod.z.lazy(() => _chunk3QFF6GPIcjs.KanBanListUncheckedUpdateWithoutCardsInputSchema)]),
  create: _zod.z.union([_zod.z.lazy(() => _chunkYVTZ3K7Zcjs.KanBanListCreateWithoutCardsInputSchema), _zod.z.lazy(() => _chunkBAZQIFUNcjs.KanBanListUncheckedCreateWithoutCardsInputSchema)]),
  where: _zod.z.lazy(() => _chunkUNUMUJ42cjs.KanBanListWhereInputSchema).optional()
}).strict();
var KanBanListUpsertWithoutCardsInputSchema_default = KanBanListUpsertWithoutCardsInputSchema;




exports.KanBanListUpsertWithoutCardsInputSchema = KanBanListUpsertWithoutCardsInputSchema; exports.KanBanListUpsertWithoutCardsInputSchema_default = KanBanListUpsertWithoutCardsInputSchema_default;
//# sourceMappingURL=chunk-3Z4L5QMJ.cjs.map