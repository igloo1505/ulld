"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkL2EG7XAUcjs = require('./chunk-L2EG7XAU.cjs');


var _chunkP5SK5FCRcjs = require('./chunk-P5SK5FCR.cjs');


var _chunkKRLUMOCVcjs = require('./chunk-KRLUMOCV.cjs');


var _chunkT5HOYA45cjs = require('./chunk-T5HOYA45.cjs');


var _chunkKXJ4KT7Hcjs = require('./chunk-KXJ4KT7H.cjs');


var _chunkKHCDH76Mcjs = require('./chunk-KHCDH76M.cjs');


var _chunkKRVWBH4Lcjs = require('./chunk-KRVWBH4L.cjs');


var _chunkFGUG347Ycjs = require('./chunk-FGUG347Y.cjs');


var _chunk67ASKHYDcjs = require('./chunk-67ASKHYD.cjs');

// src/database/inputTypeSchemas/KanBanCardUncheckedUpdateManyWithoutKanBanListNestedInputSchema.ts
var _zod = require('zod');
var KanBanCardUncheckedUpdateManyWithoutKanBanListNestedInputSchema = _zod.z.object({
  create: _zod.z.union([_zod.z.lazy(() => _chunkKRVWBH4Lcjs.KanBanCardCreateWithoutKanBanListInputSchema), _zod.z.lazy(() => _chunkKRVWBH4Lcjs.KanBanCardCreateWithoutKanBanListInputSchema).array(), _zod.z.lazy(() => _chunkFGUG347Ycjs.KanBanCardUncheckedCreateWithoutKanBanListInputSchema), _zod.z.lazy(() => _chunkFGUG347Ycjs.KanBanCardUncheckedCreateWithoutKanBanListInputSchema).array()]).optional(),
  connectOrCreate: _zod.z.union([_zod.z.lazy(() => _chunkKHCDH76Mcjs.KanBanCardCreateOrConnectWithoutKanBanListInputSchema), _zod.z.lazy(() => _chunkKHCDH76Mcjs.KanBanCardCreateOrConnectWithoutKanBanListInputSchema).array()]).optional(),
  upsert: _zod.z.union([_zod.z.lazy(() => _chunkT5HOYA45cjs.KanBanCardUpsertWithWhereUniqueWithoutKanBanListInputSchema), _zod.z.lazy(() => _chunkT5HOYA45cjs.KanBanCardUpsertWithWhereUniqueWithoutKanBanListInputSchema).array()]).optional(),
  createMany: _zod.z.lazy(() => _chunkKXJ4KT7Hcjs.KanBanCardCreateManyKanBanListInputEnvelopeSchema).optional(),
  set: _zod.z.union([_zod.z.lazy(() => _chunk67ASKHYDcjs.KanBanCardWhereUniqueInputSchema), _zod.z.lazy(() => _chunk67ASKHYDcjs.KanBanCardWhereUniqueInputSchema).array()]).optional(),
  disconnect: _zod.z.union([_zod.z.lazy(() => _chunk67ASKHYDcjs.KanBanCardWhereUniqueInputSchema), _zod.z.lazy(() => _chunk67ASKHYDcjs.KanBanCardWhereUniqueInputSchema).array()]).optional(),
  delete: _zod.z.union([_zod.z.lazy(() => _chunk67ASKHYDcjs.KanBanCardWhereUniqueInputSchema), _zod.z.lazy(() => _chunk67ASKHYDcjs.KanBanCardWhereUniqueInputSchema).array()]).optional(),
  connect: _zod.z.union([_zod.z.lazy(() => _chunk67ASKHYDcjs.KanBanCardWhereUniqueInputSchema), _zod.z.lazy(() => _chunk67ASKHYDcjs.KanBanCardWhereUniqueInputSchema).array()]).optional(),
  update: _zod.z.union([_zod.z.lazy(() => _chunkL2EG7XAUcjs.KanBanCardUpdateWithWhereUniqueWithoutKanBanListInputSchema), _zod.z.lazy(() => _chunkL2EG7XAUcjs.KanBanCardUpdateWithWhereUniqueWithoutKanBanListInputSchema).array()]).optional(),
  updateMany: _zod.z.union([_zod.z.lazy(() => _chunkP5SK5FCRcjs.KanBanCardUpdateManyWithWhereWithoutKanBanListInputSchema), _zod.z.lazy(() => _chunkP5SK5FCRcjs.KanBanCardUpdateManyWithWhereWithoutKanBanListInputSchema).array()]).optional(),
  deleteMany: _zod.z.union([_zod.z.lazy(() => _chunkKRLUMOCVcjs.KanBanCardScalarWhereInputSchema), _zod.z.lazy(() => _chunkKRLUMOCVcjs.KanBanCardScalarWhereInputSchema).array()]).optional()
}).strict();
var KanBanCardUncheckedUpdateManyWithoutKanBanListNestedInputSchema_default = KanBanCardUncheckedUpdateManyWithoutKanBanListNestedInputSchema;




exports.KanBanCardUncheckedUpdateManyWithoutKanBanListNestedInputSchema = KanBanCardUncheckedUpdateManyWithoutKanBanListNestedInputSchema; exports.KanBanCardUncheckedUpdateManyWithoutKanBanListNestedInputSchema_default = KanBanCardUncheckedUpdateManyWithoutKanBanListNestedInputSchema_default;
//# sourceMappingURL=chunk-75IFISXK.cjs.map