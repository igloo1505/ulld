"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkLHHCO233cjs = require('./chunk-LHHCO233.cjs');


var _chunk3NUJTFOXcjs = require('./chunk-3NUJTFOX.cjs');



var _chunk2MYBOFS7cjs = require('./chunk-2MYBOFS7.cjs');


var _chunkBDB7U6MQcjs = require('./chunk-BDB7U6MQ.cjs');

// src/database/outputTypeSchemas/RelatedValuesCreateArgsSchema.ts
var _zod = require('zod');
var RelatedValuesSelectSchema = _zod.z.object({
  id: _zod.z.boolean().optional(),
  input: _zod.z.boolean().optional(),
  output: _zod.z.boolean().optional(),
  equationId: _zod.z.boolean().optional(),
  equations: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2MYBOFS7cjs.EquationFindManyArgsSchema)]).optional(),
  _count: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunkBDB7U6MQcjs.RelatedValuesCountOutputTypeArgsSchema)]).optional()
}).strict();
var RelatedValuesCreateArgsSchema = _zod.z.object({
  select: RelatedValuesSelectSchema.optional(),
  include: _chunk2MYBOFS7cjs.RelatedValuesIncludeSchema.optional(),
  data: _zod.z.union([_chunkLHHCO233cjs.RelatedValuesCreateInputSchema, _chunk3NUJTFOXcjs.RelatedValuesUncheckedCreateInputSchema])
}).strict();
var RelatedValuesCreateArgsSchema_default = RelatedValuesCreateArgsSchema;





exports.RelatedValuesSelectSchema = RelatedValuesSelectSchema; exports.RelatedValuesCreateArgsSchema = RelatedValuesCreateArgsSchema; exports.RelatedValuesCreateArgsSchema_default = RelatedValuesCreateArgsSchema_default;
//# sourceMappingURL=chunk-CBKNMDWM.cjs.map