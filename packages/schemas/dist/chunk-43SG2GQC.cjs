"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkYJ6Z2P23cjs = require('./chunk-YJ6Z2P23.cjs');

// src/database/inputTypeSchemas/DefinitionCreateManyMdxNoteInputEnvelopeSchema.ts
var _zod = require('zod');
var DefinitionCreateManyMdxNoteInputEnvelopeSchema = _zod.z.object({
  data: _zod.z.union([_zod.z.lazy(() => _chunkYJ6Z2P23cjs.DefinitionCreateManyMdxNoteInputSchema), _zod.z.lazy(() => _chunkYJ6Z2P23cjs.DefinitionCreateManyMdxNoteInputSchema).array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var DefinitionCreateManyMdxNoteInputEnvelopeSchema_default = DefinitionCreateManyMdxNoteInputEnvelopeSchema;




exports.DefinitionCreateManyMdxNoteInputEnvelopeSchema = DefinitionCreateManyMdxNoteInputEnvelopeSchema; exports.DefinitionCreateManyMdxNoteInputEnvelopeSchema_default = DefinitionCreateManyMdxNoteInputEnvelopeSchema_default;
//# sourceMappingURL=chunk-43SG2GQC.cjs.map