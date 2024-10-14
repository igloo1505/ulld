"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkAG6SG3HZcjs = require('./chunk-AG6SG3HZ.cjs');


var _chunkTIUBJK4Qcjs = require('./chunk-TIUBJK4Q.cjs');


var _chunkDDDRQM5Tcjs = require('./chunk-DDDRQM5T.cjs');


var _chunkESV6SSCJcjs = require('./chunk-ESV6SSCJ.cjs');







var _chunk2MYBOFS7cjs = require('./chunk-2MYBOFS7.cjs');


var _chunk2IRTJ4DEcjs = require('./chunk-2IRTJ4DE.cjs');


var _chunkXZO65JNUcjs = require('./chunk-XZO65JNU.cjs');

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
  relatedValues: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2MYBOFS7cjs.RelatedValuesFindManyArgsSchema)]).optional(),
  tags: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2MYBOFS7cjs.TagFindManyArgsSchema)]).optional(),
  topics: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2MYBOFS7cjs.TopicFindManyArgsSchema)]).optional(),
  subjects: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2MYBOFS7cjs.SubjectFindManyArgsSchema)]).optional(),
  mdxNotes: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2MYBOFS7cjs.MdxNoteFindManyArgsSchema)]).optional(),
  _count: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2IRTJ4DEcjs.EquationCountOutputTypeArgsSchema)]).optional()
}).strict();
var EquationUpsertArgsSchema = _zod.z.object({
  select: EquationSelectSchema.optional(),
  include: _chunk2MYBOFS7cjs.EquationIncludeSchema.optional(),
  where: _chunkXZO65JNUcjs.EquationWhereUniqueInputSchema,
  create: _zod.z.union([_chunkAG6SG3HZcjs.EquationCreateInputSchema, _chunkTIUBJK4Qcjs.EquationUncheckedCreateInputSchema]),
  update: _zod.z.union([_chunkESV6SSCJcjs.EquationUpdateInputSchema, _chunkDDDRQM5Tcjs.EquationUncheckedUpdateInputSchema])
}).strict();
var EquationUpsertArgsSchema_default = EquationUpsertArgsSchema;





exports.EquationSelectSchema = EquationSelectSchema; exports.EquationUpsertArgsSchema = EquationUpsertArgsSchema; exports.EquationUpsertArgsSchema_default = EquationUpsertArgsSchema_default;
//# sourceMappingURL=chunk-YG4LQCAQ.cjs.map