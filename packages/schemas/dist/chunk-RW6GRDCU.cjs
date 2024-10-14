"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkS2Z5Q3ZEcjs = require('./chunk-S2Z5Q3ZE.cjs');

// src/database/inputTypeSchemas/BibEntryCreateManyBibInputEnvelopeSchema.ts
var _zod = require('zod');
var BibEntryCreateManyBibInputEnvelopeSchema = _zod.z.object({
  data: _zod.z.union([_zod.z.lazy(() => _chunkS2Z5Q3ZEcjs.BibEntryCreateManyBibInputSchema), _zod.z.lazy(() => _chunkS2Z5Q3ZEcjs.BibEntryCreateManyBibInputSchema).array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var BibEntryCreateManyBibInputEnvelopeSchema_default = BibEntryCreateManyBibInputEnvelopeSchema;




exports.BibEntryCreateManyBibInputEnvelopeSchema = BibEntryCreateManyBibInputEnvelopeSchema; exports.BibEntryCreateManyBibInputEnvelopeSchema_default = BibEntryCreateManyBibInputEnvelopeSchema_default;
//# sourceMappingURL=chunk-RW6GRDCU.cjs.map