"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/database/inputTypeSchemas/RandomImageSelectSchema.ts
var _zod = require('zod');
var RandomImageSelectSchema = _zod.z.object({
  path: _zod.z.boolean().optional(),
  createdAt: _zod.z.boolean().optional()
}).strict();
var RandomImageSelectSchema_default = RandomImageSelectSchema;



exports.RandomImageSelectSchema = RandomImageSelectSchema; exports.default = RandomImageSelectSchema_default;
//# sourceMappingURL=RandomImageSelectSchema.cjs.map