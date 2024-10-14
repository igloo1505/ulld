"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk5RLMUOTIcjs = require('./chunk-5RLMUOTI.cjs');


var _chunkDX2TZXTHcjs = require('./chunk-DX2TZXTH.cjs');


var _chunkYSVCS7P6cjs = require('./chunk-YSVCS7P6.cjs');


var _chunkJNWYIEVVcjs = require('./chunk-JNWYIEVV.cjs');

// src/database/inputTypeSchemas/AutoSettingScalarWhereWithAggregatesInputSchema.ts
var _zod = require('zod');
var AutoSettingScalarWhereWithAggregatesInputSchema = _zod.z.object({
  AND: _zod.z.union([_zod.z.lazy(() => AutoSettingScalarWhereWithAggregatesInputSchema), _zod.z.lazy(() => AutoSettingScalarWhereWithAggregatesInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => AutoSettingScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => AutoSettingScalarWhereWithAggregatesInputSchema), _zod.z.lazy(() => AutoSettingScalarWhereWithAggregatesInputSchema).array()]).optional(),
  id: _zod.z.union([_zod.z.lazy(() => _chunkYSVCS7P6cjs.IntWithAggregatesFilterSchema), _zod.z.number()]).optional(),
  type: _zod.z.union([_zod.z.lazy(() => _chunk5RLMUOTIcjs.EnumautoSettingWithAggregatesFilterSchema), _zod.z.lazy(() => _chunkDX2TZXTHcjs.autoSettingSchema)]).optional(),
  glob: _zod.z.union([_zod.z.lazy(() => _chunkJNWYIEVVcjs.StringWithAggregatesFilterSchema), _zod.z.string()]).optional(),
  value: _zod.z.union([_zod.z.lazy(() => _chunkJNWYIEVVcjs.StringWithAggregatesFilterSchema), _zod.z.string()]).optional()
}).strict();
var AutoSettingScalarWhereWithAggregatesInputSchema_default = AutoSettingScalarWhereWithAggregatesInputSchema;




exports.AutoSettingScalarWhereWithAggregatesInputSchema = AutoSettingScalarWhereWithAggregatesInputSchema; exports.AutoSettingScalarWhereWithAggregatesInputSchema_default = AutoSettingScalarWhereWithAggregatesInputSchema_default;
//# sourceMappingURL=chunk-FQTZEOPR.cjs.map