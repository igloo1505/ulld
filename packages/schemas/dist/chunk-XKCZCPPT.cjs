"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkVBYKUI2Ecjs = require('./chunk-VBYKUI2E.cjs');


var _chunkDX2TZXTHcjs = require('./chunk-DX2TZXTH.cjs');

// src/database/inputTypeSchemas/EnumautoSettingFilterSchema.ts
var _zod = require('zod');
var EnumautoSettingFilterSchema = _zod.z.object({
  equals: _zod.z.lazy(() => _chunkDX2TZXTHcjs.autoSettingSchema).optional(),
  in: _zod.z.lazy(() => _chunkDX2TZXTHcjs.autoSettingSchema).array().optional(),
  notIn: _zod.z.lazy(() => _chunkDX2TZXTHcjs.autoSettingSchema).array().optional(),
  not: _zod.z.union([_zod.z.lazy(() => _chunkDX2TZXTHcjs.autoSettingSchema), _zod.z.lazy(() => _chunkVBYKUI2Ecjs.NestedEnumautoSettingFilterSchema)]).optional()
}).strict();
var EnumautoSettingFilterSchema_default = EnumautoSettingFilterSchema;




exports.EnumautoSettingFilterSchema = EnumautoSettingFilterSchema; exports.EnumautoSettingFilterSchema_default = EnumautoSettingFilterSchema_default;
//# sourceMappingURL=chunk-XKCZCPPT.cjs.map