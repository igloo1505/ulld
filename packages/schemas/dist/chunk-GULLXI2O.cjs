"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkBA7ZZHBNcjs = require('./chunk-BA7ZZHBN.cjs');

// src/database/inputTypeSchemas/KanBanCardCreateManyKanBanListInputEnvelopeSchema.ts
var _zod = require('zod');
var KanBanCardCreateManyKanBanListInputEnvelopeSchema = _zod.z.object({
  data: _zod.z.union([_zod.z.lazy(() => _chunkBA7ZZHBNcjs.KanBanCardCreateManyKanBanListInputSchema), _zod.z.lazy(() => _chunkBA7ZZHBNcjs.KanBanCardCreateManyKanBanListInputSchema).array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var KanBanCardCreateManyKanBanListInputEnvelopeSchema_default = KanBanCardCreateManyKanBanListInputEnvelopeSchema;




exports.KanBanCardCreateManyKanBanListInputEnvelopeSchema = KanBanCardCreateManyKanBanListInputEnvelopeSchema; exports.KanBanCardCreateManyKanBanListInputEnvelopeSchema_default = KanBanCardCreateManyKanBanListInputEnvelopeSchema_default;
//# sourceMappingURL=chunk-GULLXI2O.cjs.map