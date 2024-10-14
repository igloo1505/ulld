"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkVVUU647Gcjs = require('./chunk-VVUU647G.cjs');


var _chunkYVTZ3K7Zcjs = require('./chunk-YVTZ3K7Z.cjs');


var _chunkBAZQIFUNcjs = require('./chunk-BAZQIFUN.cjs');


var _chunkWMQC5L2Zcjs = require('./chunk-WMQC5L2Z.cjs');

// src/database/inputTypeSchemas/KanBanListCreateNestedOneWithoutCardsInputSchema.ts
var _zod = require('zod');
var KanBanListCreateNestedOneWithoutCardsInputSchema = _zod.z.object({
  create: _zod.z.union([_zod.z.lazy(() => _chunkYVTZ3K7Zcjs.KanBanListCreateWithoutCardsInputSchema), _zod.z.lazy(() => _chunkBAZQIFUNcjs.KanBanListUncheckedCreateWithoutCardsInputSchema)]).optional(),
  connectOrCreate: _zod.z.lazy(() => _chunkVVUU647Gcjs.KanBanListCreateOrConnectWithoutCardsInputSchema).optional(),
  connect: _zod.z.lazy(() => _chunkWMQC5L2Zcjs.KanBanListWhereUniqueInputSchema).optional()
}).strict();
var KanBanListCreateNestedOneWithoutCardsInputSchema_default = KanBanListCreateNestedOneWithoutCardsInputSchema;




exports.KanBanListCreateNestedOneWithoutCardsInputSchema = KanBanListCreateNestedOneWithoutCardsInputSchema; exports.KanBanListCreateNestedOneWithoutCardsInputSchema_default = KanBanListCreateNestedOneWithoutCardsInputSchema_default;
//# sourceMappingURL=chunk-A6BLZIUR.cjs.map