"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkCA3OMZJBcjs = require('./chunk-CA3OMZJB.cjs');


var _chunk3GWQ67UWcjs = require('./chunk-3GWQ67UW.cjs');



var _chunk2MYBOFS7cjs = require('./chunk-2MYBOFS7.cjs');


var _chunkBDB7U6MQcjs = require('./chunk-BDB7U6MQ.cjs');


var _chunkNZ24BHG7cjs = require('./chunk-NZ24BHG7.cjs');

// src/database/outputTypeSchemas/RelatedValuesUpdateArgsSchema.ts
var _zod = require('zod');
var RelatedValuesSelectSchema = _zod.z.object({
  id: _zod.z.boolean().optional(),
  input: _zod.z.boolean().optional(),
  output: _zod.z.boolean().optional(),
  equationId: _zod.z.boolean().optional(),
  equations: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2MYBOFS7cjs.EquationFindManyArgsSchema)]).optional(),
  _count: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunkBDB7U6MQcjs.RelatedValuesCountOutputTypeArgsSchema)]).optional()
}).strict();
var RelatedValuesUpdateArgsSchema = _zod.z.object({
  select: RelatedValuesSelectSchema.optional(),
  include: _chunk2MYBOFS7cjs.RelatedValuesIncludeSchema.optional(),
  data: _zod.z.union([_chunk3GWQ67UWcjs.RelatedValuesUpdateInputSchema, _chunkCA3OMZJBcjs.RelatedValuesUncheckedUpdateInputSchema]),
  where: _chunkNZ24BHG7cjs.RelatedValuesWhereUniqueInputSchema
}).strict();
var RelatedValuesUpdateArgsSchema_default = RelatedValuesUpdateArgsSchema;





exports.RelatedValuesSelectSchema = RelatedValuesSelectSchema; exports.RelatedValuesUpdateArgsSchema = RelatedValuesUpdateArgsSchema; exports.RelatedValuesUpdateArgsSchema_default = RelatedValuesUpdateArgsSchema_default;
//# sourceMappingURL=chunk-4FINKJIT.cjs.map