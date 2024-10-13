"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/database/inputTypeSchemas/RandomImageCreateManyInputSchema.ts
var _zod = require('zod');
var RandomImageCreateManyInputSchema = _zod.z.object({
  path: _zod.z.string(),
  createdAt: _zod.z.coerce.date().optional()
}).strict();
var RandomImageCreateManyInputSchema_default = RandomImageCreateManyInputSchema;




exports.RandomImageCreateManyInputSchema = RandomImageCreateManyInputSchema; exports.RandomImageCreateManyInputSchema_default = RandomImageCreateManyInputSchema_default;
//# sourceMappingURL=chunk-LHPFQN5N.cjs.map