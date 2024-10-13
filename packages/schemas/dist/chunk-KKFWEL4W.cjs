"use strict";Object.defineProperty(exports, "__esModule", {value: true});






var _chunkXQKVAOTYcjs = require('./chunk-XQKVAOTY.cjs');


var _chunkF2KOFIOBcjs = require('./chunk-F2KOFIOB.cjs');


var _chunkJLEMYJRAcjs = require('./chunk-JLEMYJRA.cjs');


var _chunkWQNXU6XAcjs = require('./chunk-WQNXU6XA.cjs');


var _chunkFR5PAJGJcjs = require('./chunk-FR5PAJGJ.cjs');


var _chunk7NJCCFRTcjs = require('./chunk-7NJCCFRT.cjs');

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
  AND: _zod.z.union([_zod.z.lazy(() => _chunkXQKVAOTYcjs.EquationWhereInputSchema), _zod.z.lazy(() => _chunkXQKVAOTYcjs.EquationWhereInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => _chunkXQKVAOTYcjs.EquationWhereInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => _chunkXQKVAOTYcjs.EquationWhereInputSchema), _zod.z.lazy(() => _chunkXQKVAOTYcjs.EquationWhereInputSchema).array()]).optional(),
  title: _zod.z.union([_zod.z.lazy(() => _chunk7NJCCFRTcjs.StringFilterSchema), _zod.z.string()]).optional(),
  desc: _zod.z.union([_zod.z.lazy(() => _chunkWQNXU6XAcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  content: _zod.z.union([_zod.z.lazy(() => _chunk7NJCCFRTcjs.StringFilterSchema), _zod.z.string()]).optional(),
  asPython: _zod.z.union([_zod.z.lazy(() => _chunkWQNXU6XAcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  variableLegend: _zod.z.lazy(() => _chunkF2KOFIOBcjs.JsonFilterSchema).optional(),
  variables: _zod.z.lazy(() => _chunkJLEMYJRAcjs.StringNullableListFilterSchema).optional(),
  keywords: _zod.z.lazy(() => _chunkJLEMYJRAcjs.StringNullableListFilterSchema).optional(),
  createdAt: _zod.z.union([_zod.z.lazy(() => _chunkFR5PAJGJcjs.DateTimeFilterSchema), _zod.z.coerce.date()]).optional(),
  lastAccess: _zod.z.union([_zod.z.lazy(() => _chunkFR5PAJGJcjs.DateTimeFilterSchema), _zod.z.coerce.date()]).optional(),
  relatedValues: _zod.z.lazy(() => _chunkXQKVAOTYcjs.RelatedValuesListRelationFilterSchema).optional(),
  tags: _zod.z.lazy(() => _chunkXQKVAOTYcjs.TagListRelationFilterSchema).optional(),
  topics: _zod.z.lazy(() => _chunkXQKVAOTYcjs.TopicListRelationFilterSchema).optional(),
  subjects: _zod.z.lazy(() => _chunkXQKVAOTYcjs.SubjectListRelationFilterSchema).optional(),
  mdxNotes: _zod.z.lazy(() => _chunkXQKVAOTYcjs.MdxNoteListRelationFilterSchema).optional()
}).strict());
var EquationWhereUniqueInputSchema_default = EquationWhereUniqueInputSchema;




exports.EquationWhereUniqueInputSchema = EquationWhereUniqueInputSchema; exports.EquationWhereUniqueInputSchema_default = EquationWhereUniqueInputSchema_default;
//# sourceMappingURL=chunk-KKFWEL4W.cjs.map