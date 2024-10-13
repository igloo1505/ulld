"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkTB5NRNYFcjs = require('./chunk-TB5NRNYF.cjs');

// src/database/inputTypeSchemas/DefinitionCreateManyMdxNoteInputEnvelopeSchema.ts
var _zod = require('zod');
var DefinitionCreateManyMdxNoteInputEnvelopeSchema = _zod.z.object({
  data: _zod.z.union([_zod.z.lazy(() => _chunkTB5NRNYFcjs.DefinitionCreateManyMdxNoteInputSchema), _zod.z.lazy(() => _chunkTB5NRNYFcjs.DefinitionCreateManyMdxNoteInputSchema).array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var DefinitionCreateManyMdxNoteInputEnvelopeSchema_default = DefinitionCreateManyMdxNoteInputEnvelopeSchema;




exports.DefinitionCreateManyMdxNoteInputEnvelopeSchema = DefinitionCreateManyMdxNoteInputEnvelopeSchema; exports.DefinitionCreateManyMdxNoteInputEnvelopeSchema_default = DefinitionCreateManyMdxNoteInputEnvelopeSchema_default;
//# sourceMappingURL=chunk-B7JANBUY.cjs.map