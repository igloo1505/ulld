"use strict";Object.defineProperty(exports, "__esModule", {value: true});




var _chunk6UVIQKPKcjs = require('./chunk-6UVIQKPK.cjs');


var _chunk667O4ZWOcjs = require('./chunk-667O4ZWO.cjs');


var _chunkOTEDZX57cjs = require('./chunk-OTEDZX57.cjs');


var _chunkTD2WYWGAcjs = require('./chunk-TD2WYWGA.cjs');


var _chunkOO7BVO2Hcjs = require('./chunk-OO7BVO2H.cjs');

// src/database/inputTypeSchemas/EquationUncheckedCreateWithoutRelatedValuesInputSchema.ts
var _zod = require('zod');
var EquationUncheckedCreateWithoutRelatedValuesInputSchema = _zod.z.object({
  id: _zod.z.number().int().optional(),
  equationId: _zod.z.string().optional().nullable(),
  title: _zod.z.string(),
  desc: _zod.z.string().optional().nullable(),
  content: _zod.z.string(),
  asPython: _zod.z.string().optional().nullable(),
  variableLegend: _zod.z.union([_zod.z.lazy(() => _chunkTD2WYWGAcjs.JsonNullValueInputSchema), _chunkOO7BVO2Hcjs.InputJsonValueSchema]).optional(),
  variables: _zod.z.union([_zod.z.lazy(() => _chunk667O4ZWOcjs.EquationCreatevariablesInputSchema), _zod.z.string().array()]).optional(),
  keywords: _zod.z.union([_zod.z.lazy(() => _chunkOTEDZX57cjs.EquationCreatekeywordsInputSchema), _zod.z.string().array()]).optional(),
  createdAt: _zod.z.coerce.date().optional(),
  lastAccess: _zod.z.coerce.date().optional(),
  tags: _zod.z.lazy(() => _chunk6UVIQKPKcjs.TagUncheckedCreateNestedManyWithoutEquationsInputSchema).optional(),
  topics: _zod.z.lazy(() => _chunk6UVIQKPKcjs.TopicUncheckedCreateNestedManyWithoutEquationsInputSchema).optional(),
  subjects: _zod.z.lazy(() => _chunk6UVIQKPKcjs.SubjectUncheckedCreateNestedManyWithoutEquationsInputSchema).optional(),
  mdxNotes: _zod.z.lazy(() => _chunk6UVIQKPKcjs.MdxNoteUncheckedCreateNestedManyWithoutEquationsInputSchema).optional()
}).strict();
var EquationUncheckedCreateWithoutRelatedValuesInputSchema_default = EquationUncheckedCreateWithoutRelatedValuesInputSchema;




exports.EquationUncheckedCreateWithoutRelatedValuesInputSchema = EquationUncheckedCreateWithoutRelatedValuesInputSchema; exports.EquationUncheckedCreateWithoutRelatedValuesInputSchema_default = EquationUncheckedCreateWithoutRelatedValuesInputSchema_default;
//# sourceMappingURL=chunk-C3V2CAYX.cjs.map