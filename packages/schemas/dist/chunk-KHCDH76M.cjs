"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkKRVWBH4Lcjs = require('./chunk-KRVWBH4L.cjs');


var _chunkFGUG347Ycjs = require('./chunk-FGUG347Y.cjs');


var _chunk67ASKHYDcjs = require('./chunk-67ASKHYD.cjs');

// src/database/inputTypeSchemas/KanBanCardCreateOrConnectWithoutKanBanListInputSchema.ts
var _zod = require('zod');
var KanBanCardCreateOrConnectWithoutKanBanListInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunk67ASKHYDcjs.KanBanCardWhereUniqueInputSchema),
  create: _zod.z.union([_zod.z.lazy(() => _chunkKRVWBH4Lcjs.KanBanCardCreateWithoutKanBanListInputSchema), _zod.z.lazy(() => _chunkFGUG347Ycjs.KanBanCardUncheckedCreateWithoutKanBanListInputSchema)])
}).strict();
var KanBanCardCreateOrConnectWithoutKanBanListInputSchema_default = KanBanCardCreateOrConnectWithoutKanBanListInputSchema;




exports.KanBanCardCreateOrConnectWithoutKanBanListInputSchema = KanBanCardCreateOrConnectWithoutKanBanListInputSchema; exports.KanBanCardCreateOrConnectWithoutKanBanListInputSchema_default = KanBanCardCreateOrConnectWithoutKanBanListInputSchema_default;
//# sourceMappingURL=chunk-KHCDH76M.cjs.map