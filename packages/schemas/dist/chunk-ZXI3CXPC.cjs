"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkHA7QBAUJcjs = require('./chunk-HA7QBAUJ.cjs');

// src/database/inputTypeSchemas/KanBanCardCreateInputSchema.ts
var _zod = require('zod');
var KanBanCardCreateInputSchema = _zod.z.object({
  indexWithinList: _zod.z.number().int(),
  label: _zod.z.string().optional().nullable(),
  details: _zod.z.string().optional().nullable(),
  KanBanList: _zod.z.lazy(() => _chunkHA7QBAUJcjs.KanBanListCreateNestedOneWithoutCardsInputSchema).optional()
}).strict();
var KanBanCardCreateInputSchema_default = KanBanCardCreateInputSchema;




exports.KanBanCardCreateInputSchema = KanBanCardCreateInputSchema; exports.KanBanCardCreateInputSchema_default = KanBanCardCreateInputSchema_default;
//# sourceMappingURL=chunk-ZXI3CXPC.cjs.map