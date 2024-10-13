"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkDQMKBUO4cjs = require('./chunk-DQMKBUO4.cjs');


var _chunkI2A36NYXcjs = require('./chunk-I2A36NYX.cjs');







var _chunk2TN6PYK3cjs = require('./chunk-2TN6PYK3.cjs');


var _chunkMWYLY42Ocjs = require('./chunk-MWYLY42O.cjs');


var _chunkKKFWEL4Wcjs = require('./chunk-KKFWEL4W.cjs');

// src/database/outputTypeSchemas/EquationUpdateArgsSchema.ts
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
var EquationUpdateArgsSchema = _zod.z.object({
  select: EquationSelectSchema.optional(),
  include: _chunk2TN6PYK3cjs.EquationIncludeSchema.optional(),
  data: _zod.z.union([_chunkI2A36NYXcjs.EquationUpdateInputSchema, _chunkDQMKBUO4cjs.EquationUncheckedUpdateInputSchema]),
  where: _chunkKKFWEL4Wcjs.EquationWhereUniqueInputSchema
}).strict();
var EquationUpdateArgsSchema_default = EquationUpdateArgsSchema;





exports.EquationSelectSchema = EquationSelectSchema; exports.EquationUpdateArgsSchema = EquationUpdateArgsSchema; exports.EquationUpdateArgsSchema_default = EquationUpdateArgsSchema_default;
//# sourceMappingURL=chunk-V3NR7FQ7.cjs.map