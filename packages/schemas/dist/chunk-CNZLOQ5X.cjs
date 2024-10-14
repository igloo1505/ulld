"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkGULLXI2Ocjs = require('./chunk-GULLXI2O.cjs');


var _chunkEJAC45RJcjs = require('./chunk-EJAC45RJ.cjs');


var _chunkR4BX55A7cjs = require('./chunk-R4BX55A7.cjs');


var _chunkTAJNKUCKcjs = require('./chunk-TAJNKUCK.cjs');


var _chunkGADYTP7Kcjs = require('./chunk-GADYTP7K.cjs');

// src/database/inputTypeSchemas/KanBanCardCreateNestedManyWithoutKanBanListInputSchema.ts
var _zod = require('zod');
var KanBanCardCreateNestedManyWithoutKanBanListInputSchema = _zod.z.object({
  create: _zod.z.union([_zod.z.lazy(() => _chunkR4BX55A7cjs.KanBanCardCreateWithoutKanBanListInputSchema), _zod.z.lazy(() => _chunkR4BX55A7cjs.KanBanCardCreateWithoutKanBanListInputSchema).array(), _zod.z.lazy(() => _chunkTAJNKUCKcjs.KanBanCardUncheckedCreateWithoutKanBanListInputSchema), _zod.z.lazy(() => _chunkTAJNKUCKcjs.KanBanCardUncheckedCreateWithoutKanBanListInputSchema).array()]).optional(),
  connectOrCreate: _zod.z.union([_zod.z.lazy(() => _chunkEJAC45RJcjs.KanBanCardCreateOrConnectWithoutKanBanListInputSchema), _zod.z.lazy(() => _chunkEJAC45RJcjs.KanBanCardCreateOrConnectWithoutKanBanListInputSchema).array()]).optional(),
  createMany: _zod.z.lazy(() => _chunkGULLXI2Ocjs.KanBanCardCreateManyKanBanListInputEnvelopeSchema).optional(),
  connect: _zod.z.union([_zod.z.lazy(() => _chunkGADYTP7Kcjs.KanBanCardWhereUniqueInputSchema), _zod.z.lazy(() => _chunkGADYTP7Kcjs.KanBanCardWhereUniqueInputSchema).array()]).optional()
}).strict();
var KanBanCardCreateNestedManyWithoutKanBanListInputSchema_default = KanBanCardCreateNestedManyWithoutKanBanListInputSchema;




exports.KanBanCardCreateNestedManyWithoutKanBanListInputSchema = KanBanCardCreateNestedManyWithoutKanBanListInputSchema; exports.KanBanCardCreateNestedManyWithoutKanBanListInputSchema_default = KanBanCardCreateNestedManyWithoutKanBanListInputSchema_default;
//# sourceMappingURL=chunk-CNZLOQ5X.cjs.map