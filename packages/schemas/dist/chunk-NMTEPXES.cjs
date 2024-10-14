"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkV3XCR4K6cjs = require('./chunk-V3XCR4K6.cjs');


var _chunk73BLLM4Mcjs = require('./chunk-73BLLM4M.cjs');


var _chunkXKHMZYAAcjs = require('./chunk-XKHMZYAA.cjs');


var _chunkXOIVTO2Ycjs = require('./chunk-XOIVTO2Y.cjs');


var _chunkGULLXI2Ocjs = require('./chunk-GULLXI2O.cjs');


var _chunkEJAC45RJcjs = require('./chunk-EJAC45RJ.cjs');


var _chunkR4BX55A7cjs = require('./chunk-R4BX55A7.cjs');


var _chunkTAJNKUCKcjs = require('./chunk-TAJNKUCK.cjs');


var _chunkGADYTP7Kcjs = require('./chunk-GADYTP7K.cjs');

// src/database/inputTypeSchemas/KanBanCardUncheckedUpdateManyWithoutKanBanListNestedInputSchema.ts
var _zod = require('zod');
var KanBanCardUncheckedUpdateManyWithoutKanBanListNestedInputSchema = _zod.z.object({
  create: _zod.z.union([_zod.z.lazy(() => _chunkR4BX55A7cjs.KanBanCardCreateWithoutKanBanListInputSchema), _zod.z.lazy(() => _chunkR4BX55A7cjs.KanBanCardCreateWithoutKanBanListInputSchema).array(), _zod.z.lazy(() => _chunkTAJNKUCKcjs.KanBanCardUncheckedCreateWithoutKanBanListInputSchema), _zod.z.lazy(() => _chunkTAJNKUCKcjs.KanBanCardUncheckedCreateWithoutKanBanListInputSchema).array()]).optional(),
  connectOrCreate: _zod.z.union([_zod.z.lazy(() => _chunkEJAC45RJcjs.KanBanCardCreateOrConnectWithoutKanBanListInputSchema), _zod.z.lazy(() => _chunkEJAC45RJcjs.KanBanCardCreateOrConnectWithoutKanBanListInputSchema).array()]).optional(),
  upsert: _zod.z.union([_zod.z.lazy(() => _chunkXOIVTO2Ycjs.KanBanCardUpsertWithWhereUniqueWithoutKanBanListInputSchema), _zod.z.lazy(() => _chunkXOIVTO2Ycjs.KanBanCardUpsertWithWhereUniqueWithoutKanBanListInputSchema).array()]).optional(),
  createMany: _zod.z.lazy(() => _chunkGULLXI2Ocjs.KanBanCardCreateManyKanBanListInputEnvelopeSchema).optional(),
  set: _zod.z.union([_zod.z.lazy(() => _chunkGADYTP7Kcjs.KanBanCardWhereUniqueInputSchema), _zod.z.lazy(() => _chunkGADYTP7Kcjs.KanBanCardWhereUniqueInputSchema).array()]).optional(),
  disconnect: _zod.z.union([_zod.z.lazy(() => _chunkGADYTP7Kcjs.KanBanCardWhereUniqueInputSchema), _zod.z.lazy(() => _chunkGADYTP7Kcjs.KanBanCardWhereUniqueInputSchema).array()]).optional(),
  delete: _zod.z.union([_zod.z.lazy(() => _chunkGADYTP7Kcjs.KanBanCardWhereUniqueInputSchema), _zod.z.lazy(() => _chunkGADYTP7Kcjs.KanBanCardWhereUniqueInputSchema).array()]).optional(),
  connect: _zod.z.union([_zod.z.lazy(() => _chunkGADYTP7Kcjs.KanBanCardWhereUniqueInputSchema), _zod.z.lazy(() => _chunkGADYTP7Kcjs.KanBanCardWhereUniqueInputSchema).array()]).optional(),
  update: _zod.z.union([_zod.z.lazy(() => _chunkV3XCR4K6cjs.KanBanCardUpdateWithWhereUniqueWithoutKanBanListInputSchema), _zod.z.lazy(() => _chunkV3XCR4K6cjs.KanBanCardUpdateWithWhereUniqueWithoutKanBanListInputSchema).array()]).optional(),
  updateMany: _zod.z.union([_zod.z.lazy(() => _chunk73BLLM4Mcjs.KanBanCardUpdateManyWithWhereWithoutKanBanListInputSchema), _zod.z.lazy(() => _chunk73BLLM4Mcjs.KanBanCardUpdateManyWithWhereWithoutKanBanListInputSchema).array()]).optional(),
  deleteMany: _zod.z.union([_zod.z.lazy(() => _chunkXKHMZYAAcjs.KanBanCardScalarWhereInputSchema), _zod.z.lazy(() => _chunkXKHMZYAAcjs.KanBanCardScalarWhereInputSchema).array()]).optional()
}).strict();
var KanBanCardUncheckedUpdateManyWithoutKanBanListNestedInputSchema_default = KanBanCardUncheckedUpdateManyWithoutKanBanListNestedInputSchema;




exports.KanBanCardUncheckedUpdateManyWithoutKanBanListNestedInputSchema = KanBanCardUncheckedUpdateManyWithoutKanBanListNestedInputSchema; exports.KanBanCardUncheckedUpdateManyWithoutKanBanListNestedInputSchema_default = KanBanCardUncheckedUpdateManyWithoutKanBanListNestedInputSchema_default;
//# sourceMappingURL=chunk-NMTEPXES.cjs.map