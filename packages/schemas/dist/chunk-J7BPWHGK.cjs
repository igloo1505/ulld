"use strict";Object.defineProperty(exports, "__esModule", {value: true});






var _chunk2TN6PYK3cjs = require('./chunk-2TN6PYK3.cjs');


var _chunkMWYLY42Ocjs = require('./chunk-MWYLY42O.cjs');


var _chunkTXRBUPFUcjs = require('./chunk-TXRBUPFU.cjs');


var _chunkKKFWEL4Wcjs = require('./chunk-KKFWEL4W.cjs');


var _chunkGXKT2J7Acjs = require('./chunk-GXKT2J7A.cjs');


var _chunkXQKVAOTYcjs = require('./chunk-XQKVAOTY.cjs');

// src/database/outputTypeSchemas/EquationFindFirstArgsSchema.ts
var _zod = require('zod');
var EquationSelectSchema = _zod.z.object({
  id: _zod.z.boolean().optional(),
  equationId: _zod.z.boolean().optional(),
  title: _zod.z.boolean().optional(),
  desc: _zod.z.boolean().optional(),
  content: _zod.z.boolean().optional(),
  asPython: _zod.z.boolean().optional(),
  variableLegend: _zod.z.boolean().optional(),
  variables: _zod.z.boolean().optional(),
  keywords: _zod.z.boolean().optional(),
  createdAt: _zod.z.boolean().optional(),
  lastAccess: _zod.z.boolean().optional(),
  relatedValues: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2TN6PYK3cjs.RelatedValuesFindManyArgsSchema)]).optional(),
  tags: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2TN6PYK3cjs.TagFindManyArgsSchema)]).optional(),
  topics: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2TN6PYK3cjs.TopicFindManyArgsSchema)]).optional(),
  subjects: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2TN6PYK3cjs.SubjectFindManyArgsSchema)]).optional(),
  mdxNotes: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2TN6PYK3cjs.MdxNoteFindManyArgsSchema)]).optional(),
  _count: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunkMWYLY42Ocjs.EquationCountOutputTypeArgsSchema)]).optional()
}).strict();
var EquationFindFirstArgsSchema = _zod.z.object({
  select: EquationSelectSchema.optional(),
  include: _chunk2TN6PYK3cjs.EquationIncludeSchema.optional(),
  where: _chunkXQKVAOTYcjs.EquationWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkTXRBUPFUcjs.EquationOrderByWithRelationInputSchema.array(), _chunkTXRBUPFUcjs.EquationOrderByWithRelationInputSchema]).optional(),
  cursor: _chunkKKFWEL4Wcjs.EquationWhereUniqueInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional(),
  distinct: _zod.z.union([_chunkGXKT2J7Acjs.EquationScalarFieldEnumSchema, _chunkGXKT2J7Acjs.EquationScalarFieldEnumSchema.array()]).optional()
}).strict();
var EquationFindFirstArgsSchema_default = EquationFindFirstArgsSchema;





exports.EquationSelectSchema = EquationSelectSchema; exports.EquationFindFirstArgsSchema = EquationFindFirstArgsSchema; exports.EquationFindFirstArgsSchema_default = EquationFindFirstArgsSchema_default;
//# sourceMappingURL=chunk-J7BPWHGK.cjs.map