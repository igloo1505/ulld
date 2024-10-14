"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkR4BX55A7cjs = require('./chunk-R4BX55A7.cjs');


var _chunkTAJNKUCKcjs = require('./chunk-TAJNKUCK.cjs');


var _chunkGADYTP7Kcjs = require('./chunk-GADYTP7K.cjs');

// src/database/inputTypeSchemas/KanBanCardCreateOrConnectWithoutKanBanListInputSchema.ts
var _zod = require('zod');
var KanBanCardCreateOrConnectWithoutKanBanListInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkGADYTP7Kcjs.KanBanCardWhereUniqueInputSchema),
  create: _zod.z.union([_zod.z.lazy(() => _chunkR4BX55A7cjs.KanBanCardCreateWithoutKanBanListInputSchema), _zod.z.lazy(() => _chunkTAJNKUCKcjs.KanBanCardUncheckedCreateWithoutKanBanListInputSchema)])
}).strict();
var KanBanCardCreateOrConnectWithoutKanBanListInputSchema_default = KanBanCardCreateOrConnectWithoutKanBanListInputSchema;




exports.KanBanCardCreateOrConnectWithoutKanBanListInputSchema = KanBanCardCreateOrConnectWithoutKanBanListInputSchema; exports.KanBanCardCreateOrConnectWithoutKanBanListInputSchema_default = KanBanCardCreateOrConnectWithoutKanBanListInputSchema_default;
//# sourceMappingURL=chunk-EJAC45RJ.cjs.map