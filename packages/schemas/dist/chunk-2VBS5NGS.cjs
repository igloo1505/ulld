"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkKDLOGXM5cjs = require('./chunk-KDLOGXM5.cjs');

// src/database/inputTypeSchemas/BibEntryCreateManyBibInputEnvelopeSchema.ts
var _zod = require('zod');
var BibEntryCreateManyBibInputEnvelopeSchema = _zod.z.object({
  data: _zod.z.union([_zod.z.lazy(() => _chunkKDLOGXM5cjs.BibEntryCreateManyBibInputSchema), _zod.z.lazy(() => _chunkKDLOGXM5cjs.BibEntryCreateManyBibInputSchema).array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var BibEntryCreateManyBibInputEnvelopeSchema_default = BibEntryCreateManyBibInputEnvelopeSchema;




exports.BibEntryCreateManyBibInputEnvelopeSchema = BibEntryCreateManyBibInputEnvelopeSchema; exports.BibEntryCreateManyBibInputEnvelopeSchema_default = BibEntryCreateManyBibInputEnvelopeSchema_default;
//# sourceMappingURL=chunk-2VBS5NGS.cjs.map