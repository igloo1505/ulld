"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkXKCZCPPTcjs = require('./chunk-XKCZCPPT.cjs');


var _chunkDX2TZXTHcjs = require('./chunk-DX2TZXTH.cjs');


var _chunkE7BN4QPAcjs = require('./chunk-E7BN4QPA.cjs');


var _chunkXUF4Q3ZJcjs = require('./chunk-XUF4Q3ZJ.cjs');

// src/database/inputTypeSchemas/AutoSettingWhereInputSchema.ts
var _zod = require('zod');
var AutoSettingWhereInputSchema = _zod.z.object({
  AND: _zod.z.union([_zod.z.lazy(() => AutoSettingWhereInputSchema), _zod.z.lazy(() => AutoSettingWhereInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => AutoSettingWhereInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => AutoSettingWhereInputSchema), _zod.z.lazy(() => AutoSettingWhereInputSchema).array()]).optional(),
  id: _zod.z.union([_zod.z.lazy(() => _chunkE7BN4QPAcjs.IntFilterSchema), _zod.z.number()]).optional(),
  type: _zod.z.union([_zod.z.lazy(() => _chunkXKCZCPPTcjs.EnumautoSettingFilterSchema), _zod.z.lazy(() => _chunkDX2TZXTHcjs.autoSettingSchema)]).optional(),
  glob: _zod.z.union([_zod.z.lazy(() => _chunkXUF4Q3ZJcjs.StringFilterSchema), _zod.z.string()]).optional(),
  value: _zod.z.union([_zod.z.lazy(() => _chunkXUF4Q3ZJcjs.StringFilterSchema), _zod.z.string()]).optional()
}).strict();
var AutoSettingWhereInputSchema_default = AutoSettingWhereInputSchema;




exports.AutoSettingWhereInputSchema = AutoSettingWhereInputSchema; exports.AutoSettingWhereInputSchema_default = AutoSettingWhereInputSchema_default;
//# sourceMappingURL=chunk-GBPFDDDR.cjs.map