"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk6ZVGP3T2cjs = require('./chunk-6ZVGP3T2.cjs');


var _chunk2MYBOFS7cjs = require('./chunk-2MYBOFS7.cjs');

// src/database/outputTypeSchemas/EquationArgsSchema.ts
var _zod = require('zod');
var EquationArgsSchema = _zod.z.object({
  select: _zod.z.lazy(() => _chunk6ZVGP3T2cjs.EquationSelectSchema).optional(),
  include: _zod.z.lazy(() => _chunk2MYBOFS7cjs.EquationIncludeSchema).optional()
}).strict();
var EquationArgsSchema_default = EquationArgsSchema;




exports.EquationArgsSchema = EquationArgsSchema; exports.EquationArgsSchema_default = EquationArgsSchema_default;
//# sourceMappingURL=chunk-EVR55STC.cjs.map