"use strict";Object.defineProperty(exports, "__esModule", {value: true});


var _chunk2TN6PYK3cjs = require('./chunk-2TN6PYK3.cjs');


var _chunk5B4IBQLZcjs = require('./chunk-5B4IBQLZ.cjs');


var _chunkE44R6PHZcjs = require('./chunk-E44R6PHZ.cjs');


var _chunkRJPM5WRJcjs = require('./chunk-RJPM5WRJ.cjs');


var _chunkTP6XLNZFcjs = require('./chunk-TP6XLNZF.cjs');


var _chunkXQKVAOTYcjs = require('./chunk-XQKVAOTY.cjs');

// src/database/outputTypeSchemas/RelatedValuesFindFirstArgsSchema.ts
var _zod = require('zod');
var RelatedValuesSelectSchema = _zod.z.object({
  id: _zod.z.boolean().optional(),
  input: _zod.z.boolean().optional(),
  output: _zod.z.boolean().optional(),
  equationId: _zod.z.boolean().optional(),
  equations: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2TN6PYK3cjs.EquationFindManyArgsSchema)]).optional(),
  _count: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk5B4IBQLZcjs.RelatedValuesCountOutputTypeArgsSchema)]).optional()
}).strict();
var RelatedValuesFindFirstArgsSchema = _zod.z.object({
  select: RelatedValuesSelectSchema.optional(),
  include: _chunk2TN6PYK3cjs.RelatedValuesIncludeSchema.optional(),
  where: _chunkXQKVAOTYcjs.RelatedValuesWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkE44R6PHZcjs.RelatedValuesOrderByWithRelationInputSchema.array(), _chunkE44R6PHZcjs.RelatedValuesOrderByWithRelationInputSchema]).optional(),
  cursor: _chunkRJPM5WRJcjs.RelatedValuesWhereUniqueInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional(),
  distinct: _zod.z.union([_chunkTP6XLNZFcjs.RelatedValuesScalarFieldEnumSchema, _chunkTP6XLNZFcjs.RelatedValuesScalarFieldEnumSchema.array()]).optional()
}).strict();
var RelatedValuesFindFirstArgsSchema_default = RelatedValuesFindFirstArgsSchema;





exports.RelatedValuesSelectSchema = RelatedValuesSelectSchema; exports.RelatedValuesFindFirstArgsSchema = RelatedValuesFindFirstArgsSchema; exports.RelatedValuesFindFirstArgsSchema_default = RelatedValuesFindFirstArgsSchema_default;
//# sourceMappingURL=chunk-VSDZC47A.cjs.map