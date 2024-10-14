"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkYVTZ3K7Zcjs = require('./chunk-YVTZ3K7Z.cjs');


var _chunkBAZQIFUNcjs = require('./chunk-BAZQIFUN.cjs');


var _chunkWMQC5L2Zcjs = require('./chunk-WMQC5L2Z.cjs');

// src/database/inputTypeSchemas/KanBanListCreateOrConnectWithoutCardsInputSchema.ts
var _zod = require('zod');
var KanBanListCreateOrConnectWithoutCardsInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkWMQC5L2Zcjs.KanBanListWhereUniqueInputSchema),
  create: _zod.z.union([_zod.z.lazy(() => _chunkYVTZ3K7Zcjs.KanBanListCreateWithoutCardsInputSchema), _zod.z.lazy(() => _chunkBAZQIFUNcjs.KanBanListUncheckedCreateWithoutCardsInputSchema)])
}).strict();
var KanBanListCreateOrConnectWithoutCardsInputSchema_default = KanBanListCreateOrConnectWithoutCardsInputSchema;




exports.KanBanListCreateOrConnectWithoutCardsInputSchema = KanBanListCreateOrConnectWithoutCardsInputSchema; exports.KanBanListCreateOrConnectWithoutCardsInputSchema_default = KanBanListCreateOrConnectWithoutCardsInputSchema_default;
//# sourceMappingURL=chunk-VVUU647G.cjs.map