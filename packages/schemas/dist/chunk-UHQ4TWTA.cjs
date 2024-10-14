"use strict";Object.defineProperty(exports, "__esModule", {value: true});


var _chunk2MYBOFS7cjs = require('./chunk-2MYBOFS7.cjs');


var _chunkBDB7U6MQcjs = require('./chunk-BDB7U6MQ.cjs');


var _chunkNZ24BHG7cjs = require('./chunk-NZ24BHG7.cjs');

// src/database/outputTypeSchemas/RelatedValuesFindUniqueOrThrowArgsSchema.ts
var _zod = require('zod');
var RelatedValuesSelectSchema = _zod.z.object({
  id: _zod.z.boolean().optional(),
  input: _zod.z.boolean().optional(),
  output: _zod.z.boolean().optional(),
  equationId: _zod.z.boolean().optional(),
  equations: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2MYBOFS7cjs.EquationFindManyArgsSchema)]).optional(),
  _count: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunkBDB7U6MQcjs.RelatedValuesCountOutputTypeArgsSchema)]).optional()
}).strict();
var RelatedValuesFindUniqueOrThrowArgsSchema = _zod.z.object({
  select: RelatedValuesSelectSchema.optional(),
  include: _chunk2MYBOFS7cjs.RelatedValuesIncludeSchema.optional(),
  where: _chunkNZ24BHG7cjs.RelatedValuesWhereUniqueInputSchema
}).strict();
var RelatedValuesFindUniqueOrThrowArgsSchema_default = RelatedValuesFindUniqueOrThrowArgsSchema;





exports.RelatedValuesSelectSchema = RelatedValuesSelectSchema; exports.RelatedValuesFindUniqueOrThrowArgsSchema = RelatedValuesFindUniqueOrThrowArgsSchema; exports.RelatedValuesFindUniqueOrThrowArgsSchema_default = RelatedValuesFindUniqueOrThrowArgsSchema_default;
//# sourceMappingURL=chunk-UHQ4TWTA.cjs.map