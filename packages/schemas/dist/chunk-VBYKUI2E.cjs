"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkDX2TZXTHcjs = require('./chunk-DX2TZXTH.cjs');

// src/database/inputTypeSchemas/NestedEnumautoSettingFilterSchema.ts
var _zod = require('zod');
var NestedEnumautoSettingFilterSchema = _zod.z.object({
  equals: _zod.z.lazy(() => _chunkDX2TZXTHcjs.autoSettingSchema).optional(),
  in: _zod.z.lazy(() => _chunkDX2TZXTHcjs.autoSettingSchema).array().optional(),
  notIn: _zod.z.lazy(() => _chunkDX2TZXTHcjs.autoSettingSchema).array().optional(),
  not: _zod.z.union([_zod.z.lazy(() => _chunkDX2TZXTHcjs.autoSettingSchema), _zod.z.lazy(() => NestedEnumautoSettingFilterSchema)]).optional()
}).strict();
var NestedEnumautoSettingFilterSchema_default = NestedEnumautoSettingFilterSchema;




exports.NestedEnumautoSettingFilterSchema = NestedEnumautoSettingFilterSchema; exports.NestedEnumautoSettingFilterSchema_default = NestedEnumautoSettingFilterSchema_default;
//# sourceMappingURL=chunk-VBYKUI2E.cjs.map