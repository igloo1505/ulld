"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkYSUS63CYcjs = require('./chunk-YSUS63CY.cjs');


var _chunk6PBNHC2Wcjs = require('./chunk-6PBNHC2W.cjs');


var _chunkSLJAV4D3cjs = require('./chunk-SLJAV4D3.cjs');


var _chunkGBNOXJREcjs = require('./chunk-GBNOXJRE.cjs');



var _chunk2TN6PYK3cjs = require('./chunk-2TN6PYK3.cjs');


var _chunk5B4IBQLZcjs = require('./chunk-5B4IBQLZ.cjs');


var _chunkRJPM5WRJcjs = require('./chunk-RJPM5WRJ.cjs');

// src/database/outputTypeSchemas/RelatedValuesUpsertArgsSchema.ts
var _zod = require('zod');
var RelatedValuesSelectSchema = _zod.z.object({
  id: _zod.z.boolean().optional(),
  input: _zod.z.boolean().optional(),
  output: _zod.z.boolean().optional(),
  equationId: _zod.z.boolean().optional(),
  equations: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2TN6PYK3cjs.EquationFindManyArgsSchema)]).optional(),
  _count: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk5B4IBQLZcjs.RelatedValuesCountOutputTypeArgsSchema)]).optional()
}).strict();
var RelatedValuesUpsertArgsSchema = _zod.z.object({
  select: RelatedValuesSelectSchema.optional(),
  include: _chunk2TN6PYK3cjs.RelatedValuesIncludeSchema.optional(),
  where: _chunkRJPM5WRJcjs.RelatedValuesWhereUniqueInputSchema,
  create: _zod.z.union([_chunkYSUS63CYcjs.RelatedValuesCreateInputSchema, _chunk6PBNHC2Wcjs.RelatedValuesUncheckedCreateInputSchema]),
  update: _zod.z.union([_chunkGBNOXJREcjs.RelatedValuesUpdateInputSchema, _chunkSLJAV4D3cjs.RelatedValuesUncheckedUpdateInputSchema])
}).strict();
var RelatedValuesUpsertArgsSchema_default = RelatedValuesUpsertArgsSchema;





exports.RelatedValuesSelectSchema = RelatedValuesSelectSchema; exports.RelatedValuesUpsertArgsSchema = RelatedValuesUpsertArgsSchema; exports.RelatedValuesUpsertArgsSchema_default = RelatedValuesUpsertArgsSchema_default;
//# sourceMappingURL=chunk-DUNRYIW6.cjs.map