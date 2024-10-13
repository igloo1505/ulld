"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk7GJ7K5K6cjs = require('./chunk-7GJ7K5K6.cjs');

// src/database/inputTypeSchemas/NestedEnumautoSettingFilterSchema.ts
var _zod = require('zod');
var NestedEnumautoSettingFilterSchema = _zod.z.object({
  equals: _zod.z.lazy(() => _chunk7GJ7K5K6cjs.autoSettingSchema).optional(),
  in: _zod.z.lazy(() => _chunk7GJ7K5K6cjs.autoSettingSchema).array().optional(),
  notIn: _zod.z.lazy(() => _chunk7GJ7K5K6cjs.autoSettingSchema).array().optional(),
  not: _zod.z.union([_zod.z.lazy(() => _chunk7GJ7K5K6cjs.autoSettingSchema), _zod.z.lazy(() => NestedEnumautoSettingFilterSchema)]).optional()
}).strict();
var NestedEnumautoSettingFilterSchema_default = NestedEnumautoSettingFilterSchema;




exports.NestedEnumautoSettingFilterSchema = NestedEnumautoSettingFilterSchema; exports.NestedEnumautoSettingFilterSchema_default = NestedEnumautoSettingFilterSchema_default;
//# sourceMappingURL=chunk-EDEVRB7I.cjs.map