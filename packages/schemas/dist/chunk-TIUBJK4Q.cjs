"use strict";Object.defineProperty(exports, "__esModule", {value: true});




var _chunkVJ3IVZTKcjs = require('./chunk-VJ3IVZTK.cjs');


var _chunkAPWXRLAAcjs = require('./chunk-APWXRLAA.cjs');


var _chunkHZVDKVK4cjs = require('./chunk-HZVDKVK4.cjs');


var _chunkJRYBOYMNcjs = require('./chunk-JRYBOYMN.cjs');


var _chunkZI4N5EPRcjs = require('./chunk-ZI4N5EPR.cjs');


var _chunkCPSW4INCcjs = require('./chunk-CPSW4INC.cjs');

// src/database/inputTypeSchemas/EquationUncheckedCreateInputSchema.ts
var _zod = require('zod');
var EquationUncheckedCreateInputSchema = _zod.z.object({
  id: _zod.z.number().int().optional(),
  equationId: _zod.z.string().optional().nullable(),
  title: _zod.z.string(),
  desc: _zod.z.string().optional().nullable(),
  content: _zod.z.string(),
  asPython: _zod.z.string().optional().nullable(),
  variableLegend: _zod.z.union([_zod.z.lazy(() => _chunkZI4N5EPRcjs.JsonNullValueInputSchema), _chunkCPSW4INCcjs.InputJsonValueSchema]).optional(),
  variables: _zod.z.union([_zod.z.lazy(() => _chunkHZVDKVK4cjs.EquationCreatevariablesInputSchema), _zod.z.string().array()]).optional(),
  keywords: _zod.z.union([_zod.z.lazy(() => _chunkJRYBOYMNcjs.EquationCreatekeywordsInputSchema), _zod.z.string().array()]).optional(),
  createdAt: _zod.z.coerce.date().optional(),
  lastAccess: _zod.z.coerce.date().optional(),
  relatedValues: _zod.z.lazy(() => _chunkAPWXRLAAcjs.RelatedValuesUncheckedCreateNestedManyWithoutEquationsInputSchema).optional(),
  tags: _zod.z.lazy(() => _chunkVJ3IVZTKcjs.TagUncheckedCreateNestedManyWithoutEquationsInputSchema).optional(),
  topics: _zod.z.lazy(() => _chunkVJ3IVZTKcjs.TopicUncheckedCreateNestedManyWithoutEquationsInputSchema).optional(),
  subjects: _zod.z.lazy(() => _chunkVJ3IVZTKcjs.SubjectUncheckedCreateNestedManyWithoutEquationsInputSchema).optional(),
  mdxNotes: _zod.z.lazy(() => _chunkVJ3IVZTKcjs.MdxNoteUncheckedCreateNestedManyWithoutEquationsInputSchema).optional()
}).strict();
var EquationUncheckedCreateInputSchema_default = EquationUncheckedCreateInputSchema;




exports.EquationUncheckedCreateInputSchema = EquationUncheckedCreateInputSchema; exports.EquationUncheckedCreateInputSchema_default = EquationUncheckedCreateInputSchema_default;
//# sourceMappingURL=chunk-TIUBJK4Q.cjs.map