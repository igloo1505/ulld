"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/database/inputTypeSchemas/EquationUpdatekeywordsInputSchema.ts
var _zod = require('zod');
var EquationUpdatekeywordsInputSchema = _zod.z.object({
  set: _zod.z.string().array().optional(),
  push: _zod.z.union([_zod.z.string(), _zod.z.string().array()]).optional()
}).strict();
var EquationUpdatekeywordsInputSchema_default = EquationUpdatekeywordsInputSchema;




exports.EquationUpdatekeywordsInputSchema = EquationUpdatekeywordsInputSchema; exports.EquationUpdatekeywordsInputSchema_default = EquationUpdatekeywordsInputSchema_default;
//# sourceMappingURL=chunk-K6DBHXTE.cjs.map