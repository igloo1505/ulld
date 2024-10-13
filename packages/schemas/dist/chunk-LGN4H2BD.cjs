"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkLXCS2BTIcjs = require('./chunk-LXCS2BTI.cjs');


var _chunk2TN6PYK3cjs = require('./chunk-2TN6PYK3.cjs');

// src/database/outputTypeSchemas/EquationArgsSchema.ts
var _zod = require('zod');
var EquationArgsSchema = _zod.z.object({
  select: _zod.z.lazy(() => _chunkLXCS2BTIcjs.EquationSelectSchema).optional(),
  include: _zod.z.lazy(() => _chunk2TN6PYK3cjs.EquationIncludeSchema).optional()
}).strict();
var EquationArgsSchema_default = EquationArgsSchema;




exports.EquationArgsSchema = EquationArgsSchema; exports.EquationArgsSchema_default = EquationArgsSchema_default;
//# sourceMappingURL=chunk-LGN4H2BD.cjs.map