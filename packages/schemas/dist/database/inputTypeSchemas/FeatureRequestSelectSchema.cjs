"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/database/inputTypeSchemas/FeatureRequestSelectSchema.ts
var _zod = require('zod');
var FeatureRequestSelectSchema = _zod.z.object({
  id: _zod.z.boolean().optional(),
  email: _zod.z.boolean().optional(),
  message: _zod.z.boolean().optional(),
  category: _zod.z.boolean().optional(),
  userBase: _zod.z.boolean().optional(),
  receivedOn: _zod.z.boolean().optional()
}).strict();
var FeatureRequestSelectSchema_default = FeatureRequestSelectSchema;



exports.FeatureRequestSelectSchema = FeatureRequestSelectSchema; exports.default = FeatureRequestSelectSchema_default;
//# sourceMappingURL=FeatureRequestSelectSchema.cjs.map