"use strict";Object.defineProperty(exports, "__esModule", {value: true});


var _chunk2TN6PYK3cjs = require('./chunk-2TN6PYK3.cjs');


var _chunk5B4IBQLZcjs = require('./chunk-5B4IBQLZ.cjs');


var _chunkRJPM5WRJcjs = require('./chunk-RJPM5WRJ.cjs');

// src/database/outputTypeSchemas/RelatedValuesFindUniqueArgsSchema.ts
var _zod = require('zod');
var RelatedValuesSelectSchema = _zod.z.object({
  id: _zod.z.boolean().optional(),
  input: _zod.z.boolean().optional(),
  output: _zod.z.boolean().optional(),
  equationId: _zod.z.boolean().optional(),
  equations: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2TN6PYK3cjs.EquationFindManyArgsSchema)]).optional(),
  _count: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk5B4IBQLZcjs.RelatedValuesCountOutputTypeArgsSchema)]).optional()
}).strict();
var RelatedValuesFindUniqueArgsSchema = _zod.z.object({
  select: RelatedValuesSelectSchema.optional(),
  include: _chunk2TN6PYK3cjs.RelatedValuesIncludeSchema.optional(),
  where: _chunkRJPM5WRJcjs.RelatedValuesWhereUniqueInputSchema
}).strict();
var RelatedValuesFindUniqueArgsSchema_default = RelatedValuesFindUniqueArgsSchema;





exports.RelatedValuesSelectSchema = RelatedValuesSelectSchema; exports.RelatedValuesFindUniqueArgsSchema = RelatedValuesFindUniqueArgsSchema; exports.RelatedValuesFindUniqueArgsSchema_default = RelatedValuesFindUniqueArgsSchema_default;
//# sourceMappingURL=chunk-UMHXRJQV.cjs.map