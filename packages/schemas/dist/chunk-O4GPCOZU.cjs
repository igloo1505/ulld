"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkBAEU4AZGcjs = require('./chunk-BAEU4AZG.cjs');


var _chunkEDEVRB7Icjs = require('./chunk-EDEVRB7I.cjs');


var _chunk7GJ7K5K6cjs = require('./chunk-7GJ7K5K6.cjs');


var _chunkI44PW4RNcjs = require('./chunk-I44PW4RN.cjs');

// src/database/inputTypeSchemas/EnumautoSettingWithAggregatesFilterSchema.ts
var _zod = require('zod');
var EnumautoSettingWithAggregatesFilterSchema = _zod.z.object({
  equals: _zod.z.lazy(() => _chunk7GJ7K5K6cjs.autoSettingSchema).optional(),
  in: _zod.z.lazy(() => _chunk7GJ7K5K6cjs.autoSettingSchema).array().optional(),
  notIn: _zod.z.lazy(() => _chunk7GJ7K5K6cjs.autoSettingSchema).array().optional(),
  not: _zod.z.union([_zod.z.lazy(() => _chunk7GJ7K5K6cjs.autoSettingSchema), _zod.z.lazy(() => _chunkBAEU4AZGcjs.NestedEnumautoSettingWithAggregatesFilterSchema)]).optional(),
  _count: _zod.z.lazy(() => _chunkI44PW4RNcjs.NestedIntFilterSchema).optional(),
  _min: _zod.z.lazy(() => _chunkEDEVRB7Icjs.NestedEnumautoSettingFilterSchema).optional(),
  _max: _zod.z.lazy(() => _chunkEDEVRB7Icjs.NestedEnumautoSettingFilterSchema).optional()
}).strict();
var EnumautoSettingWithAggregatesFilterSchema_default = EnumautoSettingWithAggregatesFilterSchema;




exports.EnumautoSettingWithAggregatesFilterSchema = EnumautoSettingWithAggregatesFilterSchema; exports.EnumautoSettingWithAggregatesFilterSchema_default = EnumautoSettingWithAggregatesFilterSchema_default;
//# sourceMappingURL=chunk-O4GPCOZU.cjs.map