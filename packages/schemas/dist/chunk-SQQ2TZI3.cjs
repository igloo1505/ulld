"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/database/inputTypeSchemas/RandomImageUncheckedCreateInputSchema.ts
var _zod = require('zod');
var RandomImageUncheckedCreateInputSchema = _zod.z.object({
  path: _zod.z.string(),
  createdAt: _zod.z.coerce.date().optional()
}).strict();
var RandomImageUncheckedCreateInputSchema_default = RandomImageUncheckedCreateInputSchema;




exports.RandomImageUncheckedCreateInputSchema = RandomImageUncheckedCreateInputSchema; exports.RandomImageUncheckedCreateInputSchema_default = RandomImageUncheckedCreateInputSchema_default;
//# sourceMappingURL=chunk-SQQ2TZI3.cjs.map