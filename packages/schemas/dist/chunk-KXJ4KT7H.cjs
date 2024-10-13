"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkNOMQGCYRcjs = require('./chunk-NOMQGCYR.cjs');

// src/database/inputTypeSchemas/KanBanCardCreateManyKanBanListInputEnvelopeSchema.ts
var _zod = require('zod');
var KanBanCardCreateManyKanBanListInputEnvelopeSchema = _zod.z.object({
  data: _zod.z.union([_zod.z.lazy(() => _chunkNOMQGCYRcjs.KanBanCardCreateManyKanBanListInputSchema), _zod.z.lazy(() => _chunkNOMQGCYRcjs.KanBanCardCreateManyKanBanListInputSchema).array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var KanBanCardCreateManyKanBanListInputEnvelopeSchema_default = KanBanCardCreateManyKanBanListInputEnvelopeSchema;




exports.KanBanCardCreateManyKanBanListInputEnvelopeSchema = KanBanCardCreateManyKanBanListInputEnvelopeSchema; exports.KanBanCardCreateManyKanBanListInputEnvelopeSchema_default = KanBanCardCreateManyKanBanListInputEnvelopeSchema_default;
//# sourceMappingURL=chunk-KXJ4KT7H.cjs.map