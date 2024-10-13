"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkEB4KGVZXcjs = require('./chunk-EB4KGVZX.cjs');


var _chunkP4QEDEUAcjs = require('./chunk-P4QEDEUA.cjs');


var _chunk47PTARKEcjs = require('./chunk-47PTARKE.cjs');


var _chunkA7AEKKVCcjs = require('./chunk-A7AEKKVC.cjs');


var _chunkEW6IP4RAcjs = require('./chunk-EW6IP4RA.cjs');


var _chunkWDFUEALAcjs = require('./chunk-WDFUEALA.cjs');


var _chunkEHIPTTX4cjs = require('./chunk-EHIPTTX4.cjs');


var _chunk3UGQGYK7cjs = require('./chunk-3UGQGYK7.cjs');


var _chunkXQKVAOTYcjs = require('./chunk-XQKVAOTY.cjs');

// src/database/inputTypeSchemas/KanBanListUpdateOneWithoutCardsNestedInputSchema.ts
var _zod = require('zod');
var KanBanListUpdateOneWithoutCardsNestedInputSchema = _zod.z.object({
  create: _zod.z.union([_zod.z.lazy(() => _chunkWDFUEALAcjs.KanBanListCreateWithoutCardsInputSchema), _zod.z.lazy(() => _chunkEHIPTTX4cjs.KanBanListUncheckedCreateWithoutCardsInputSchema)]).optional(),
  connectOrCreate: _zod.z.lazy(() => _chunkEW6IP4RAcjs.KanBanListCreateOrConnectWithoutCardsInputSchema).optional(),
  upsert: _zod.z.lazy(() => _chunkP4QEDEUAcjs.KanBanListUpsertWithoutCardsInputSchema).optional(),
  disconnect: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunkXQKVAOTYcjs.KanBanListWhereInputSchema)]).optional(),
  delete: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunkXQKVAOTYcjs.KanBanListWhereInputSchema)]).optional(),
  connect: _zod.z.lazy(() => _chunk3UGQGYK7cjs.KanBanListWhereUniqueInputSchema).optional(),
  update: _zod.z.union([_zod.z.lazy(() => _chunkEB4KGVZXcjs.KanBanListUpdateToOneWithWhereWithoutCardsInputSchema), _zod.z.lazy(() => _chunkA7AEKKVCcjs.KanBanListUpdateWithoutCardsInputSchema), _zod.z.lazy(() => _chunk47PTARKEcjs.KanBanListUncheckedUpdateWithoutCardsInputSchema)]).optional()
}).strict();
var KanBanListUpdateOneWithoutCardsNestedInputSchema_default = KanBanListUpdateOneWithoutCardsNestedInputSchema;




exports.KanBanListUpdateOneWithoutCardsNestedInputSchema = KanBanListUpdateOneWithoutCardsNestedInputSchema; exports.KanBanListUpdateOneWithoutCardsNestedInputSchema_default = KanBanListUpdateOneWithoutCardsNestedInputSchema_default;
//# sourceMappingURL=chunk-DURBXSYV.cjs.map