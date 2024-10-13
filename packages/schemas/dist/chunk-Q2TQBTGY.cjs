"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/database/inputTypeSchemas/RandomImageCreateInputSchema.ts
var _zod = require('zod');
var RandomImageCreateInputSchema = _zod.z.object({
  path: _zod.z.string(),
  createdAt: _zod.z.coerce.date().optional()
}).strict();
var RandomImageCreateInputSchema_default = RandomImageCreateInputSchema;




exports.RandomImageCreateInputSchema = RandomImageCreateInputSchema; exports.RandomImageCreateInputSchema_default = RandomImageCreateInputSchema_default;
//# sourceMappingURL=chunk-Q2TQBTGY.cjs.map