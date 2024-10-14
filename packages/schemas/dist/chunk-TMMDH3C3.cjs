"use strict";Object.defineProperty(exports, "__esModule", {value: true});


var _chunk2MYBOFS7cjs = require('./chunk-2MYBOFS7.cjs');


var _chunkBDB7U6MQcjs = require('./chunk-BDB7U6MQ.cjs');


var _chunkXHJOELBNcjs = require('./chunk-XHJOELBN.cjs');


var _chunkNZ24BHG7cjs = require('./chunk-NZ24BHG7.cjs');


var _chunkYLCAHLUVcjs = require('./chunk-YLCAHLUV.cjs');


var _chunkUNUMUJ42cjs = require('./chunk-UNUMUJ42.cjs');

// src/database/outputTypeSchemas/RelatedValuesFindFirstOrThrowArgsSchema.ts
var _zod = require('zod');
var RelatedValuesSelectSchema = _zod.z.object({
  id: _zod.z.boolean().optional(),
  input: _zod.z.boolean().optional(),
  output: _zod.z.boolean().optional(),
  equationId: _zod.z.boolean().optional(),
  equations: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2MYBOFS7cjs.EquationFindManyArgsSchema)]).optional(),
  _count: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunkBDB7U6MQcjs.RelatedValuesCountOutputTypeArgsSchema)]).optional()
}).strict();
var RelatedValuesFindFirstOrThrowArgsSchema = _zod.z.object({
  select: RelatedValuesSelectSchema.optional(),
  include: _chunk2MYBOFS7cjs.RelatedValuesIncludeSchema.optional(),
  where: _chunkUNUMUJ42cjs.RelatedValuesWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkXHJOELBNcjs.RelatedValuesOrderByWithRelationInputSchema.array(), _chunkXHJOELBNcjs.RelatedValuesOrderByWithRelationInputSchema]).optional(),
  cursor: _chunkNZ24BHG7cjs.RelatedValuesWhereUniqueInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional(),
  distinct: _zod.z.union([_chunkYLCAHLUVcjs.RelatedValuesScalarFieldEnumSchema, _chunkYLCAHLUVcjs.RelatedValuesScalarFieldEnumSchema.array()]).optional()
}).strict();
var RelatedValuesFindFirstOrThrowArgsSchema_default = RelatedValuesFindFirstOrThrowArgsSchema;





exports.RelatedValuesSelectSchema = RelatedValuesSelectSchema; exports.RelatedValuesFindFirstOrThrowArgsSchema = RelatedValuesFindFirstOrThrowArgsSchema; exports.RelatedValuesFindFirstOrThrowArgsSchema_default = RelatedValuesFindFirstOrThrowArgsSchema_default;
//# sourceMappingURL=chunk-TMMDH3C3.cjs.map