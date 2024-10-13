"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkWDFUEALAcjs = require('./chunk-WDFUEALA.cjs');


var _chunkEHIPTTX4cjs = require('./chunk-EHIPTTX4.cjs');


var _chunk3UGQGYK7cjs = require('./chunk-3UGQGYK7.cjs');

// src/database/inputTypeSchemas/KanBanListCreateOrConnectWithoutCardsInputSchema.ts
var _zod = require('zod');
var KanBanListCreateOrConnectWithoutCardsInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunk3UGQGYK7cjs.KanBanListWhereUniqueInputSchema),
  create: _zod.z.union([_zod.z.lazy(() => _chunkWDFUEALAcjs.KanBanListCreateWithoutCardsInputSchema), _zod.z.lazy(() => _chunkEHIPTTX4cjs.KanBanListUncheckedCreateWithoutCardsInputSchema)])
}).strict();
var KanBanListCreateOrConnectWithoutCardsInputSchema_default = KanBanListCreateOrConnectWithoutCardsInputSchema;




exports.KanBanListCreateOrConnectWithoutCardsInputSchema = KanBanListCreateOrConnectWithoutCardsInputSchema; exports.KanBanListCreateOrConnectWithoutCardsInputSchema_default = KanBanListCreateOrConnectWithoutCardsInputSchema_default;
//# sourceMappingURL=chunk-EW6IP4RA.cjs.map