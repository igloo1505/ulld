"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk3QFF6GPIcjs = require('./chunk-3QFF6GPI.cjs');


var _chunk6B46VHFIcjs = require('./chunk-6B46VHFI.cjs');


var _chunkUNUMUJ42cjs = require('./chunk-UNUMUJ42.cjs');

// src/database/inputTypeSchemas/KanBanListUpdateToOneWithWhereWithoutCardsInputSchema.ts
var _zod = require('zod');
var KanBanListUpdateToOneWithWhereWithoutCardsInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkUNUMUJ42cjs.KanBanListWhereInputSchema).optional(),
  data: _zod.z.union([_zod.z.lazy(() => _chunk6B46VHFIcjs.KanBanListUpdateWithoutCardsInputSchema), _zod.z.lazy(() => _chunk3QFF6GPIcjs.KanBanListUncheckedUpdateWithoutCardsInputSchema)])
}).strict();
var KanBanListUpdateToOneWithWhereWithoutCardsInputSchema_default = KanBanListUpdateToOneWithWhereWithoutCardsInputSchema;




exports.KanBanListUpdateToOneWithWhereWithoutCardsInputSchema = KanBanListUpdateToOneWithWhereWithoutCardsInputSchema; exports.KanBanListUpdateToOneWithWhereWithoutCardsInputSchema_default = KanBanListUpdateToOneWithWhereWithoutCardsInputSchema_default;
//# sourceMappingURL=chunk-3SDRKGEJ.cjs.map