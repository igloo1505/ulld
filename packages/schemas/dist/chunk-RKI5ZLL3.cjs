"use strict";Object.defineProperty(exports, "__esModule", {value: true});




var _chunk6UVIQKPKcjs = require('./chunk-6UVIQKPK.cjs');


var _chunkSJXJ6N67cjs = require('./chunk-SJXJ6N67.cjs');


var _chunk667O4ZWOcjs = require('./chunk-667O4ZWO.cjs');


var _chunkOTEDZX57cjs = require('./chunk-OTEDZX57.cjs');


var _chunkTD2WYWGAcjs = require('./chunk-TD2WYWGA.cjs');


var _chunkOO7BVO2Hcjs = require('./chunk-OO7BVO2H.cjs');

// src/database/inputTypeSchemas/EquationCreateInputSchema.ts
var _zod = require('zod');
var EquationCreateInputSchema = _zod.z.object({
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
  relatedValues: _zod.z.lazy(() => _chunkSJXJ6N67cjs.RelatedValuesCreateNestedManyWithoutEquationsInputSchema).optional(),
  tags: _zod.z.lazy(() => _chunk6UVIQKPKcjs.TagCreateNestedManyWithoutEquationsInputSchema).optional(),
  topics: _zod.z.lazy(() => _chunk6UVIQKPKcjs.TopicCreateNestedManyWithoutEquationsInputSchema).optional(),
  subjects: _zod.z.lazy(() => _chunk6UVIQKPKcjs.SubjectCreateNestedManyWithoutEquationsInputSchema).optional(),
  mdxNotes: _zod.z.lazy(() => _chunk6UVIQKPKcjs.MdxNoteCreateNestedManyWithoutEquationsInputSchema).optional()
}).strict();
var EquationCreateInputSchema_default = EquationCreateInputSchema;




exports.EquationCreateInputSchema = EquationCreateInputSchema; exports.EquationCreateInputSchema_default = EquationCreateInputSchema_default;
//# sourceMappingURL=chunk-RKI5ZLL3.cjs.map