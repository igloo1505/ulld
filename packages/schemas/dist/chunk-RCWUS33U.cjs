"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk7GJ7K5K6cjs = require('./chunk-7GJ7K5K6.cjs');

// src/database/inputTypeSchemas/AutoSettingCreateManyInputSchema.ts
var _zod = require('zod');
var AutoSettingCreateManyInputSchema = _zod.z.object({
  id: _zod.z.number().int().optional(),
  type: _zod.z.lazy(() => _chunk7GJ7K5K6cjs.autoSettingSchema),
  glob: _zod.z.string(),
  value: _zod.z.string()
}).strict();
var AutoSettingCreateManyInputSchema_default = AutoSettingCreateManyInputSchema;




exports.AutoSettingCreateManyInputSchema = AutoSettingCreateManyInputSchema; exports.AutoSettingCreateManyInputSchema_default = AutoSettingCreateManyInputSchema_default;
//# sourceMappingURL=chunk-RCWUS33U.cjs.map