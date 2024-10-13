"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkEW6IP4RAcjs = require('./chunk-EW6IP4RA.cjs');


var _chunkWDFUEALAcjs = require('./chunk-WDFUEALA.cjs');


var _chunkEHIPTTX4cjs = require('./chunk-EHIPTTX4.cjs');


var _chunk3UGQGYK7cjs = require('./chunk-3UGQGYK7.cjs');

// src/database/inputTypeSchemas/KanBanListCreateNestedOneWithoutCardsInputSchema.ts
var _zod = require('zod');
var KanBanListCreateNestedOneWithoutCardsInputSchema = _zod.z.object({
  create: _zod.z.union([_zod.z.lazy(() => _chunkWDFUEALAcjs.KanBanListCreateWithoutCardsInputSchema), _zod.z.lazy(() => _chunkEHIPTTX4cjs.KanBanListUncheckedCreateWithoutCardsInputSchema)]).optional(),
  connectOrCreate: _zod.z.lazy(() => _chunkEW6IP4RAcjs.KanBanListCreateOrConnectWithoutCardsInputSchema).optional(),
  connect: _zod.z.lazy(() => _chunk3UGQGYK7cjs.KanBanListWhereUniqueInputSchema).optional()
}).strict();
var KanBanListCreateNestedOneWithoutCardsInputSchema_default = KanBanListCreateNestedOneWithoutCardsInputSchema;




exports.KanBanListCreateNestedOneWithoutCardsInputSchema = KanBanListCreateNestedOneWithoutCardsInputSchema; exports.KanBanListCreateNestedOneWithoutCardsInputSchema_default = KanBanListCreateNestedOneWithoutCardsInputSchema_default;
//# sourceMappingURL=chunk-HA7QBAUJ.cjs.map