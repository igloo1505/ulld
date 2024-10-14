"use strict";Object.defineProperty(exports, "__esModule", {value: true});






var _chunk2MYBOFS7cjs = require('./chunk-2MYBOFS7.cjs');


var _chunk2IRTJ4DEcjs = require('./chunk-2IRTJ4DE.cjs');


var _chunk6LJC2FE4cjs = require('./chunk-6LJC2FE4.cjs');


var _chunkXZO65JNUcjs = require('./chunk-XZO65JNU.cjs');


var _chunkWXZOF4XYcjs = require('./chunk-WXZOF4XY.cjs');


var _chunkUNUMUJ42cjs = require('./chunk-UNUMUJ42.cjs');

// src/database/outputTypeSchemas/EquationFindFirstOrThrowArgsSchema.ts
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
var EquationFindFirstOrThrowArgsSchema = _zod.z.object({
  select: EquationSelectSchema.optional(),
  include: _chunk2MYBOFS7cjs.EquationIncludeSchema.optional(),
  where: _chunkUNUMUJ42cjs.EquationWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunk6LJC2FE4cjs.EquationOrderByWithRelationInputSchema.array(), _chunk6LJC2FE4cjs.EquationOrderByWithRelationInputSchema]).optional(),
  cursor: _chunkXZO65JNUcjs.EquationWhereUniqueInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional(),
  distinct: _zod.z.union([_chunkWXZOF4XYcjs.EquationScalarFieldEnumSchema, _chunkWXZOF4XYcjs.EquationScalarFieldEnumSchema.array()]).optional()
}).strict();
var EquationFindFirstOrThrowArgsSchema_default = EquationFindFirstOrThrowArgsSchema;





exports.EquationSelectSchema = EquationSelectSchema; exports.EquationFindFirstOrThrowArgsSchema = EquationFindFirstOrThrowArgsSchema; exports.EquationFindFirstOrThrowArgsSchema_default = EquationFindFirstOrThrowArgsSchema_default;
//# sourceMappingURL=chunk-LFHBSQFB.cjs.map