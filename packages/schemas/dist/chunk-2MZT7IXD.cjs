"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkLHHCO233cjs = require('./chunk-LHHCO233.cjs');


var _chunk3NUJTFOXcjs = require('./chunk-3NUJTFOX.cjs');


var _chunkCA3OMZJBcjs = require('./chunk-CA3OMZJB.cjs');


var _chunk3GWQ67UWcjs = require('./chunk-3GWQ67UW.cjs');



var _chunk2MYBOFS7cjs = require('./chunk-2MYBOFS7.cjs');


var _chunkBDB7U6MQcjs = require('./chunk-BDB7U6MQ.cjs');


var _chunkNZ24BHG7cjs = require('./chunk-NZ24BHG7.cjs');

// src/database/outputTypeSchemas/RelatedValuesUpsertArgsSchema.ts
var _zod = require('zod');
var RelatedValuesSelectSchema = _zod.z.object({
  id: _zod.z.boolean().optional(),
  input: _zod.z.boolean().optional(),
  output: _zod.z.boolean().optional(),
  equationId: _zod.z.boolean().optional(),
  equations: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2MYBOFS7cjs.EquationFindManyArgsSchema)]).optional(),
  _count: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunkBDB7U6MQcjs.RelatedValuesCountOutputTypeArgsSchema)]).optional()
}).strict();
var RelatedValuesUpsertArgsSchema = _zod.z.object({
  select: RelatedValuesSelectSchema.optional(),
  include: _chunk2MYBOFS7cjs.RelatedValuesIncludeSchema.optional(),
  where: _chunkNZ24BHG7cjs.RelatedValuesWhereUniqueInputSchema,
  create: _zod.z.union([_chunkLHHCO233cjs.RelatedValuesCreateInputSchema, _chunk3NUJTFOXcjs.RelatedValuesUncheckedCreateInputSchema]),
  update: _zod.z.union([_chunk3GWQ67UWcjs.RelatedValuesUpdateInputSchema, _chunkCA3OMZJBcjs.RelatedValuesUncheckedUpdateInputSchema])
}).strict();
var RelatedValuesUpsertArgsSchema_default = RelatedValuesUpsertArgsSchema;





exports.RelatedValuesSelectSchema = RelatedValuesSelectSchema; exports.RelatedValuesUpsertArgsSchema = RelatedValuesUpsertArgsSchema; exports.RelatedValuesUpsertArgsSchema_default = RelatedValuesUpsertArgsSchema_default;
//# sourceMappingURL=chunk-2MZT7IXD.cjs.map