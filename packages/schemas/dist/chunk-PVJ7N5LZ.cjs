"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkYSUS63CYcjs = require('./chunk-YSUS63CY.cjs');


var _chunk6PBNHC2Wcjs = require('./chunk-6PBNHC2W.cjs');



var _chunk2TN6PYK3cjs = require('./chunk-2TN6PYK3.cjs');


var _chunk5B4IBQLZcjs = require('./chunk-5B4IBQLZ.cjs');

// src/database/outputTypeSchemas/RelatedValuesCreateArgsSchema.ts
var _zod = require('zod');
var RelatedValuesSelectSchema = _zod.z.object({
  id: _zod.z.boolean().optional(),
  input: _zod.z.boolean().optional(),
  output: _zod.z.boolean().optional(),
  equationId: _zod.z.boolean().optional(),
  equations: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2TN6PYK3cjs.EquationFindManyArgsSchema)]).optional(),
  _count: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk5B4IBQLZcjs.RelatedValuesCountOutputTypeArgsSchema)]).optional()
}).strict();
var RelatedValuesCreateArgsSchema = _zod.z.object({
  select: RelatedValuesSelectSchema.optional(),
  include: _chunk2TN6PYK3cjs.RelatedValuesIncludeSchema.optional(),
  data: _zod.z.union([_chunkYSUS63CYcjs.RelatedValuesCreateInputSchema, _chunk6PBNHC2Wcjs.RelatedValuesUncheckedCreateInputSchema])
}).strict();
var RelatedValuesCreateArgsSchema_default = RelatedValuesCreateArgsSchema;





exports.RelatedValuesSelectSchema = RelatedValuesSelectSchema; exports.RelatedValuesCreateArgsSchema = RelatedValuesCreateArgsSchema; exports.RelatedValuesCreateArgsSchema_default = RelatedValuesCreateArgsSchema_default;
//# sourceMappingURL=chunk-PVJ7N5LZ.cjs.map