"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk2TN6PYK3cjs = require('./chunk-2TN6PYK3.cjs');


var _chunk5B4IBQLZcjs = require('./chunk-5B4IBQLZ.cjs');

// src/database/inputTypeSchemas/RelatedValuesSelectSchema.ts
var _zod = require('zod');
var RelatedValuesSelectSchema = _zod.z.object({
  id: _zod.z.boolean().optional(),
  input: _zod.z.boolean().optional(),
  output: _zod.z.boolean().optional(),
  equationId: _zod.z.boolean().optional(),
  equations: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2TN6PYK3cjs.EquationFindManyArgsSchema)]).optional(),
  _count: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk5B4IBQLZcjs.RelatedValuesCountOutputTypeArgsSchema)]).optional()
}).strict();
var RelatedValuesSelectSchema_default = RelatedValuesSelectSchema;




exports.RelatedValuesSelectSchema = RelatedValuesSelectSchema; exports.RelatedValuesSelectSchema_default = RelatedValuesSelectSchema_default;
//# sourceMappingURL=chunk-S45KGUFH.cjs.map