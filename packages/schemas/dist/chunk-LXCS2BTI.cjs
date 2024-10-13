"use strict";Object.defineProperty(exports, "__esModule", {value: true});





var _chunk2TN6PYK3cjs = require('./chunk-2TN6PYK3.cjs');


var _chunkMWYLY42Ocjs = require('./chunk-MWYLY42O.cjs');

// src/database/inputTypeSchemas/EquationSelectSchema.ts
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
var EquationSelectSchema_default = EquationSelectSchema;




exports.EquationSelectSchema = EquationSelectSchema; exports.EquationSelectSchema_default = EquationSelectSchema_default;
//# sourceMappingURL=chunk-LXCS2BTI.cjs.map