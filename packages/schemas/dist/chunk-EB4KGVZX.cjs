"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk47PTARKEcjs = require('./chunk-47PTARKE.cjs');


var _chunkA7AEKKVCcjs = require('./chunk-A7AEKKVC.cjs');


var _chunkXQKVAOTYcjs = require('./chunk-XQKVAOTY.cjs');

// src/database/inputTypeSchemas/KanBanListUpdateToOneWithWhereWithoutCardsInputSchema.ts
var _zod = require('zod');
var KanBanListUpdateToOneWithWhereWithoutCardsInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkXQKVAOTYcjs.KanBanListWhereInputSchema).optional(),
  data: _zod.z.union([_zod.z.lazy(() => _chunkA7AEKKVCcjs.KanBanListUpdateWithoutCardsInputSchema), _zod.z.lazy(() => _chunk47PTARKEcjs.KanBanListUncheckedUpdateWithoutCardsInputSchema)])
}).strict();
var KanBanListUpdateToOneWithWhereWithoutCardsInputSchema_default = KanBanListUpdateToOneWithWhereWithoutCardsInputSchema;




exports.KanBanListUpdateToOneWithWhereWithoutCardsInputSchema = KanBanListUpdateToOneWithWhereWithoutCardsInputSchema; exports.KanBanListUpdateToOneWithWhereWithoutCardsInputSchema_default = KanBanListUpdateToOneWithWhereWithoutCardsInputSchema_default;
//# sourceMappingURL=chunk-EB4KGVZX.cjs.map