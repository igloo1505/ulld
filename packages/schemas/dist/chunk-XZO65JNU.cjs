"use strict";Object.defineProperty(exports, "__esModule", {value: true});






var _chunkUNUMUJ42cjs = require('./chunk-UNUMUJ42.cjs');


var _chunkL7ZRMRIIcjs = require('./chunk-L7ZRMRII.cjs');


var _chunk5AWIXPHDcjs = require('./chunk-5AWIXPHD.cjs');


var _chunk2V5AKF3Qcjs = require('./chunk-2V5AKF3Q.cjs');


var _chunk2L755XMWcjs = require('./chunk-2L755XMW.cjs');


var _chunkXUF4Q3ZJcjs = require('./chunk-XUF4Q3ZJ.cjs');

// src/database/inputTypeSchemas/EquationWhereUniqueInputSchema.ts
var _zod = require('zod');
var EquationWhereUniqueInputSchema = _zod.z.union([
  _zod.z.object({
    id: _zod.z.number().int(),
    equationId: _zod.z.string()
  }),
  _zod.z.object({
    id: _zod.z.number().int()
  }),
  _zod.z.object({
    equationId: _zod.z.string()
  })
]).and(_zod.z.object({
  id: _zod.z.number().int().optional(),
  equationId: _zod.z.string().optional(),
  AND: _zod.z.union([_zod.z.lazy(() => _chunkUNUMUJ42cjs.EquationWhereInputSchema), _zod.z.lazy(() => _chunkUNUMUJ42cjs.EquationWhereInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => _chunkUNUMUJ42cjs.EquationWhereInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => _chunkUNUMUJ42cjs.EquationWhereInputSchema), _zod.z.lazy(() => _chunkUNUMUJ42cjs.EquationWhereInputSchema).array()]).optional(),
  title: _zod.z.union([_zod.z.lazy(() => _chunkXUF4Q3ZJcjs.StringFilterSchema), _zod.z.string()]).optional(),
  desc: _zod.z.union([_zod.z.lazy(() => _chunk2V5AKF3Qcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  content: _zod.z.union([_zod.z.lazy(() => _chunkXUF4Q3ZJcjs.StringFilterSchema), _zod.z.string()]).optional(),
  asPython: _zod.z.union([_zod.z.lazy(() => _chunk2V5AKF3Qcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  variableLegend: _zod.z.lazy(() => _chunkL7ZRMRIIcjs.JsonFilterSchema).optional(),
  variables: _zod.z.lazy(() => _chunk5AWIXPHDcjs.StringNullableListFilterSchema).optional(),
  keywords: _zod.z.lazy(() => _chunk5AWIXPHDcjs.StringNullableListFilterSchema).optional(),
  createdAt: _zod.z.union([_zod.z.lazy(() => _chunk2L755XMWcjs.DateTimeFilterSchema), _zod.z.coerce.date()]).optional(),
  lastAccess: _zod.z.union([_zod.z.lazy(() => _chunk2L755XMWcjs.DateTimeFilterSchema), _zod.z.coerce.date()]).optional(),
  relatedValues: _zod.z.lazy(() => _chunkUNUMUJ42cjs.RelatedValuesListRelationFilterSchema).optional(),
  tags: _zod.z.lazy(() => _chunkUNUMUJ42cjs.TagListRelationFilterSchema).optional(),
  topics: _zod.z.lazy(() => _chunkUNUMUJ42cjs.TopicListRelationFilterSchema).optional(),
  subjects: _zod.z.lazy(() => _chunkUNUMUJ42cjs.SubjectListRelationFilterSchema).optional(),
  mdxNotes: _zod.z.lazy(() => _chunkUNUMUJ42cjs.MdxNoteListRelationFilterSchema).optional()
}).strict());
var EquationWhereUniqueInputSchema_default = EquationWhereUniqueInputSchema;




exports.EquationWhereUniqueInputSchema = EquationWhereUniqueInputSchema; exports.EquationWhereUniqueInputSchema_default = EquationWhereUniqueInputSchema_default;
//# sourceMappingURL=chunk-XZO65JNU.cjs.map