"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk4CJWMC6Gcjs = require('./chunk-4CJWMC6G.cjs');


var _chunkVBYKUI2Ecjs = require('./chunk-VBYKUI2E.cjs');


var _chunkDX2TZXTHcjs = require('./chunk-DX2TZXTH.cjs');


var _chunkQQPRJ6EWcjs = require('./chunk-QQPRJ6EW.cjs');

// src/database/inputTypeSchemas/EnumautoSettingWithAggregatesFilterSchema.ts
var _zod = require('zod');
var EnumautoSettingWithAggregatesFilterSchema = _zod.z.object({
  equals: _zod.z.lazy(() => _chunkDX2TZXTHcjs.autoSettingSchema).optional(),
  in: _zod.z.lazy(() => _chunkDX2TZXTHcjs.autoSettingSchema).array().optional(),
  notIn: _zod.z.lazy(() => _chunkDX2TZXTHcjs.autoSettingSchema).array().optional(),
  not: _zod.z.union([_zod.z.lazy(() => _chunkDX2TZXTHcjs.autoSettingSchema), _zod.z.lazy(() => _chunk4CJWMC6Gcjs.NestedEnumautoSettingWithAggregatesFilterSchema)]).optional(),
  _count: _zod.z.lazy(() => _chunkQQPRJ6EWcjs.NestedIntFilterSchema).optional(),
  _min: _zod.z.lazy(() => _chunkVBYKUI2Ecjs.NestedEnumautoSettingFilterSchema).optional(),
  _max: _zod.z.lazy(() => _chunkVBYKUI2Ecjs.NestedEnumautoSettingFilterSchema).optional()
}).strict();
var EnumautoSettingWithAggregatesFilterSchema_default = EnumautoSettingWithAggregatesFilterSchema;




exports.EnumautoSettingWithAggregatesFilterSchema = EnumautoSettingWithAggregatesFilterSchema; exports.EnumautoSettingWithAggregatesFilterSchema_default = EnumautoSettingWithAggregatesFilterSchema_default;
//# sourceMappingURL=chunk-5RLMUOTI.cjs.map