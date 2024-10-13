"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkRKI5ZLL3cjs = require('./chunk-RKI5ZLL3.cjs');


var _chunkZDTKZ3W3cjs = require('./chunk-ZDTKZ3W3.cjs');


var _chunkDQMKBUO4cjs = require('./chunk-DQMKBUO4.cjs');


var _chunkI2A36NYXcjs = require('./chunk-I2A36NYX.cjs');







var _chunk2TN6PYK3cjs = require('./chunk-2TN6PYK3.cjs');


var _chunkMWYLY42Ocjs = require('./chunk-MWYLY42O.cjs');


var _chunkKKFWEL4Wcjs = require('./chunk-KKFWEL4W.cjs');

// src/database/outputTypeSchemas/EquationUpsertArgsSchema.ts
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
var EquationUpsertArgsSchema = _zod.z.object({
  select: EquationSelectSchema.optional(),
  include: _chunk2TN6PYK3cjs.EquationIncludeSchema.optional(),
  where: _chunkKKFWEL4Wcjs.EquationWhereUniqueInputSchema,
  create: _zod.z.union([_chunkRKI5ZLL3cjs.EquationCreateInputSchema, _chunkZDTKZ3W3cjs.EquationUncheckedCreateInputSchema]),
  update: _zod.z.union([_chunkI2A36NYXcjs.EquationUpdateInputSchema, _chunkDQMKBUO4cjs.EquationUncheckedUpdateInputSchema])
}).strict();
var EquationUpsertArgsSchema_default = EquationUpsertArgsSchema;





exports.EquationSelectSchema = EquationSelectSchema; exports.EquationUpsertArgsSchema = EquationUpsertArgsSchema; exports.EquationUpsertArgsSchema_default = EquationUpsertArgsSchema_default;
//# sourceMappingURL=chunk-26OY5ZNI.cjs.map