"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkAG6SG3HZcjs = require('./chunk-AG6SG3HZ.cjs');


var _chunkTIUBJK4Qcjs = require('./chunk-TIUBJK4Q.cjs');







var _chunk2MYBOFS7cjs = require('./chunk-2MYBOFS7.cjs');


var _chunk2IRTJ4DEcjs = require('./chunk-2IRTJ4DE.cjs');

// src/database/outputTypeSchemas/EquationCreateArgsSchema.ts
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
  relatedValues: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2MYBOFS7cjs.RelatedValuesFindManyArgsSchema)]).optional(),
  tags: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2MYBOFS7cjs.TagFindManyArgsSchema)]).optional(),
  topics: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2MYBOFS7cjs.TopicFindManyArgsSchema)]).optional(),
  subjects: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2MYBOFS7cjs.SubjectFindManyArgsSchema)]).optional(),
  mdxNotes: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2MYBOFS7cjs.MdxNoteFindManyArgsSchema)]).optional(),
  _count: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2IRTJ4DEcjs.EquationCountOutputTypeArgsSchema)]).optional()
}).strict();
var EquationCreateArgsSchema = _zod.z.object({
  select: EquationSelectSchema.optional(),
  include: _chunk2MYBOFS7cjs.EquationIncludeSchema.optional(),
  data: _zod.z.union([_chunkAG6SG3HZcjs.EquationCreateInputSchema, _chunkTIUBJK4Qcjs.EquationUncheckedCreateInputSchema])
}).strict();
var EquationCreateArgsSchema_default = EquationCreateArgsSchema;





exports.EquationSelectSchema = EquationSelectSchema; exports.EquationCreateArgsSchema = EquationCreateArgsSchema; exports.EquationCreateArgsSchema_default = EquationCreateArgsSchema_default;
//# sourceMappingURL=chunk-XHUHBJ52.cjs.map