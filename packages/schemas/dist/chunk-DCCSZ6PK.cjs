"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk3SDRKGEJcjs = require('./chunk-3SDRKGEJ.cjs');


var _chunk3Z4L5QMJcjs = require('./chunk-3Z4L5QMJ.cjs');


var _chunk3QFF6GPIcjs = require('./chunk-3QFF6GPI.cjs');


var _chunk6B46VHFIcjs = require('./chunk-6B46VHFI.cjs');


var _chunkVVUU647Gcjs = require('./chunk-VVUU647G.cjs');


var _chunkYVTZ3K7Zcjs = require('./chunk-YVTZ3K7Z.cjs');


var _chunkBAZQIFUNcjs = require('./chunk-BAZQIFUN.cjs');


var _chunkWMQC5L2Zcjs = require('./chunk-WMQC5L2Z.cjs');


var _chunkUNUMUJ42cjs = require('./chunk-UNUMUJ42.cjs');

// src/database/inputTypeSchemas/KanBanListUpdateOneWithoutCardsNestedInputSchema.ts
var _zod = require('zod');
var KanBanListUpdateOneWithoutCardsNestedInputSchema = _zod.z.object({
  create: _zod.z.union([_zod.z.lazy(() => _chunkYVTZ3K7Zcjs.KanBanListCreateWithoutCardsInputSchema), _zod.z.lazy(() => _chunkBAZQIFUNcjs.KanBanListUncheckedCreateWithoutCardsInputSchema)]).optional(),
  connectOrCreate: _zod.z.lazy(() => _chunkVVUU647Gcjs.KanBanListCreateOrConnectWithoutCardsInputSchema).optional(),
  upsert: _zod.z.lazy(() => _chunk3Z4L5QMJcjs.KanBanListUpsertWithoutCardsInputSchema).optional(),
  disconnect: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunkUNUMUJ42cjs.KanBanListWhereInputSchema)]).optional(),
  delete: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunkUNUMUJ42cjs.KanBanListWhereInputSchema)]).optional(),
  connect: _zod.z.lazy(() => _chunkWMQC5L2Zcjs.KanBanListWhereUniqueInputSchema).optional(),
  update: _zod.z.union([_zod.z.lazy(() => _chunk3SDRKGEJcjs.KanBanListUpdateToOneWithWhereWithoutCardsInputSchema), _zod.z.lazy(() => _chunk6B46VHFIcjs.KanBanListUpdateWithoutCardsInputSchema), _zod.z.lazy(() => _chunk3QFF6GPIcjs.KanBanListUncheckedUpdateWithoutCardsInputSchema)]).optional()
}).strict();
var KanBanListUpdateOneWithoutCardsNestedInputSchema_default = KanBanListUpdateOneWithoutCardsNestedInputSchema;




exports.KanBanListUpdateOneWithoutCardsNestedInputSchema = KanBanListUpdateOneWithoutCardsNestedInputSchema; exports.KanBanListUpdateOneWithoutCardsNestedInputSchema_default = KanBanListUpdateOneWithoutCardsNestedInputSchema_default;
//# sourceMappingURL=chunk-DCCSZ6PK.cjs.map