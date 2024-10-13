"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkKXJ4KT7Hcjs = require('./chunk-KXJ4KT7H.cjs');


var _chunkKHCDH76Mcjs = require('./chunk-KHCDH76M.cjs');


var _chunkKRVWBH4Lcjs = require('./chunk-KRVWBH4L.cjs');


var _chunkFGUG347Ycjs = require('./chunk-FGUG347Y.cjs');


var _chunk67ASKHYDcjs = require('./chunk-67ASKHYD.cjs');

// src/database/inputTypeSchemas/KanBanCardCreateNestedManyWithoutKanBanListInputSchema.ts
var _zod = require('zod');
var KanBanCardCreateNestedManyWithoutKanBanListInputSchema = _zod.z.object({
  create: _zod.z.union([_zod.z.lazy(() => _chunkKRVWBH4Lcjs.KanBanCardCreateWithoutKanBanListInputSchema), _zod.z.lazy(() => _chunkKRVWBH4Lcjs.KanBanCardCreateWithoutKanBanListInputSchema).array(), _zod.z.lazy(() => _chunkFGUG347Ycjs.KanBanCardUncheckedCreateWithoutKanBanListInputSchema), _zod.z.lazy(() => _chunkFGUG347Ycjs.KanBanCardUncheckedCreateWithoutKanBanListInputSchema).array()]).optional(),
  connectOrCreate: _zod.z.union([_zod.z.lazy(() => _chunkKHCDH76Mcjs.KanBanCardCreateOrConnectWithoutKanBanListInputSchema), _zod.z.lazy(() => _chunkKHCDH76Mcjs.KanBanCardCreateOrConnectWithoutKanBanListInputSchema).array()]).optional(),
  createMany: _zod.z.lazy(() => _chunkKXJ4KT7Hcjs.KanBanCardCreateManyKanBanListInputEnvelopeSchema).optional(),
  connect: _zod.z.union([_zod.z.lazy(() => _chunk67ASKHYDcjs.KanBanCardWhereUniqueInputSchema), _zod.z.lazy(() => _chunk67ASKHYDcjs.KanBanCardWhereUniqueInputSchema).array()]).optional()
}).strict();
var KanBanCardCreateNestedManyWithoutKanBanListInputSchema_default = KanBanCardCreateNestedManyWithoutKanBanListInputSchema;




exports.KanBanCardCreateNestedManyWithoutKanBanListInputSchema = KanBanCardCreateNestedManyWithoutKanBanListInputSchema; exports.KanBanCardCreateNestedManyWithoutKanBanListInputSchema_default = KanBanCardCreateNestedManyWithoutKanBanListInputSchema_default;
//# sourceMappingURL=chunk-6ZSKOP5V.cjs.map