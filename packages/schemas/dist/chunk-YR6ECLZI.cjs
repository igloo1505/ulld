"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/database/inputTypeSchemas/EquationUpdatevariablesInputSchema.ts
var _zod = require('zod');
var EquationUpdatevariablesInputSchema = _zod.z.object({
  set: _zod.z.string().array().optional(),
  push: _zod.z.union([_zod.z.string(), _zod.z.string().array()]).optional()
}).strict();
var EquationUpdatevariablesInputSchema_default = EquationUpdatevariablesInputSchema;




exports.EquationUpdatevariablesInputSchema = EquationUpdatevariablesInputSchema; exports.EquationUpdatevariablesInputSchema_default = EquationUpdatevariablesInputSchema_default;
//# sourceMappingURL=chunk-YR6ECLZI.cjs.map