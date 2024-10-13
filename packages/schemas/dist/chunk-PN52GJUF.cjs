"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkEDEVRB7Icjs = require('./chunk-EDEVRB7I.cjs');


var _chunk7GJ7K5K6cjs = require('./chunk-7GJ7K5K6.cjs');

// src/database/inputTypeSchemas/EnumautoSettingFilterSchema.ts
var _zod = require('zod');
var EnumautoSettingFilterSchema = _zod.z.object({
  equals: _zod.z.lazy(() => _chunk7GJ7K5K6cjs.autoSettingSchema).optional(),
  in: _zod.z.lazy(() => _chunk7GJ7K5K6cjs.autoSettingSchema).array().optional(),
  notIn: _zod.z.lazy(() => _chunk7GJ7K5K6cjs.autoSettingSchema).array().optional(),
  not: _zod.z.union([_zod.z.lazy(() => _chunk7GJ7K5K6cjs.autoSettingSchema), _zod.z.lazy(() => _chunkEDEVRB7Icjs.NestedEnumautoSettingFilterSchema)]).optional()
}).strict();
var EnumautoSettingFilterSchema_default = EnumautoSettingFilterSchema;




exports.EnumautoSettingFilterSchema = EnumautoSettingFilterSchema; exports.EnumautoSettingFilterSchema_default = EnumautoSettingFilterSchema_default;
//# sourceMappingURL=chunk-PN52GJUF.cjs.map