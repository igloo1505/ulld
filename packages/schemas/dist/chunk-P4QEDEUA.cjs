"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk47PTARKEcjs = require('./chunk-47PTARKE.cjs');


var _chunkA7AEKKVCcjs = require('./chunk-A7AEKKVC.cjs');


var _chunkWDFUEALAcjs = require('./chunk-WDFUEALA.cjs');


var _chunkEHIPTTX4cjs = require('./chunk-EHIPTTX4.cjs');


var _chunkXQKVAOTYcjs = require('./chunk-XQKVAOTY.cjs');

// src/database/inputTypeSchemas/KanBanListUpsertWithoutCardsInputSchema.ts
var _zod = require('zod');
var KanBanListUpsertWithoutCardsInputSchema = _zod.z.object({
  update: _zod.z.union([_zod.z.lazy(() => _chunkA7AEKKVCcjs.KanBanListUpdateWithoutCardsInputSchema), _zod.z.lazy(() => _chunk47PTARKEcjs.KanBanListUncheckedUpdateWithoutCardsInputSchema)]),
  create: _zod.z.union([_zod.z.lazy(() => _chunkWDFUEALAcjs.KanBanListCreateWithoutCardsInputSchema), _zod.z.lazy(() => _chunkEHIPTTX4cjs.KanBanListUncheckedCreateWithoutCardsInputSchema)]),
  where: _zod.z.lazy(() => _chunkXQKVAOTYcjs.KanBanListWhereInputSchema).optional()
}).strict();
var KanBanListUpsertWithoutCardsInputSchema_default = KanBanListUpsertWithoutCardsInputSchema;




exports.KanBanListUpsertWithoutCardsInputSchema = KanBanListUpsertWithoutCardsInputSchema; exports.KanBanListUpsertWithoutCardsInputSchema_default = KanBanListUpsertWithoutCardsInputSchema_default;
//# sourceMappingURL=chunk-P4QEDEUA.cjs.map