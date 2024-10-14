"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkGBPFDDDRcjs = require('./chunk-GBPFDDDR.cjs');


var _chunkXKCZCPPTcjs = require('./chunk-XKCZCPPT.cjs');


var _chunkDX2TZXTHcjs = require('./chunk-DX2TZXTH.cjs');


var _chunkXUF4Q3ZJcjs = require('./chunk-XUF4Q3ZJ.cjs');

// src/database/inputTypeSchemas/AutoSettingWhereUniqueInputSchema.ts
var _zod = require('zod');
var AutoSettingWhereUniqueInputSchema = _zod.z.object({
  id: _zod.z.number().int()
}).and(_zod.z.object({
  id: _zod.z.number().int().optional(),
  AND: _zod.z.union([_zod.z.lazy(() => _chunkGBPFDDDRcjs.AutoSettingWhereInputSchema), _zod.z.lazy(() => _chunkGBPFDDDRcjs.AutoSettingWhereInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => _chunkGBPFDDDRcjs.AutoSettingWhereInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => _chunkGBPFDDDRcjs.AutoSettingWhereInputSchema), _zod.z.lazy(() => _chunkGBPFDDDRcjs.AutoSettingWhereInputSchema).array()]).optional(),
  type: _zod.z.union([_zod.z.lazy(() => _chunkXKCZCPPTcjs.EnumautoSettingFilterSchema), _zod.z.lazy(() => _chunkDX2TZXTHcjs.autoSettingSchema)]).optional(),
  glob: _zod.z.union([_zod.z.lazy(() => _chunkXUF4Q3ZJcjs.StringFilterSchema), _zod.z.string()]).optional(),
  value: _zod.z.union([_zod.z.lazy(() => _chunkXUF4Q3ZJcjs.StringFilterSchema), _zod.z.string()]).optional()
}).strict());
var AutoSettingWhereUniqueInputSchema_default = AutoSettingWhereUniqueInputSchema;




exports.AutoSettingWhereUniqueInputSchema = AutoSettingWhereUniqueInputSchema; exports.AutoSettingWhereUniqueInputSchema_default = AutoSettingWhereUniqueInputSchema_default;
//# sourceMappingURL=chunk-U6ULFZA2.cjs.map