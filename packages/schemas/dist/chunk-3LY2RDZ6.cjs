"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkO4GPCOZUcjs = require('./chunk-O4GPCOZU.cjs');


var _chunk7GJ7K5K6cjs = require('./chunk-7GJ7K5K6.cjs');


var _chunkVYYZSYF5cjs = require('./chunk-VYYZSYF5.cjs');


var _chunkOYCJHDTMcjs = require('./chunk-OYCJHDTM.cjs');

// src/database/inputTypeSchemas/AutoSettingScalarWhereWithAggregatesInputSchema.ts
var _zod = require('zod');
var AutoSettingScalarWhereWithAggregatesInputSchema = _zod.z.object({
  AND: _zod.z.union([_zod.z.lazy(() => AutoSettingScalarWhereWithAggregatesInputSchema), _zod.z.lazy(() => AutoSettingScalarWhereWithAggregatesInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => AutoSettingScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => AutoSettingScalarWhereWithAggregatesInputSchema), _zod.z.lazy(() => AutoSettingScalarWhereWithAggregatesInputSchema).array()]).optional(),
  id: _zod.z.union([_zod.z.lazy(() => _chunkVYYZSYF5cjs.IntWithAggregatesFilterSchema), _zod.z.number()]).optional(),
  type: _zod.z.union([_zod.z.lazy(() => _chunkO4GPCOZUcjs.EnumautoSettingWithAggregatesFilterSchema), _zod.z.lazy(() => _chunk7GJ7K5K6cjs.autoSettingSchema)]).optional(),
  glob: _zod.z.union([_zod.z.lazy(() => _chunkOYCJHDTMcjs.StringWithAggregatesFilterSchema), _zod.z.string()]).optional(),
  value: _zod.z.union([_zod.z.lazy(() => _chunkOYCJHDTMcjs.StringWithAggregatesFilterSchema), _zod.z.string()]).optional()
}).strict();
var AutoSettingScalarWhereWithAggregatesInputSchema_default = AutoSettingScalarWhereWithAggregatesInputSchema;




exports.AutoSettingScalarWhereWithAggregatesInputSchema = AutoSettingScalarWhereWithAggregatesInputSchema; exports.AutoSettingScalarWhereWithAggregatesInputSchema_default = AutoSettingScalarWhereWithAggregatesInputSchema_default;
//# sourceMappingURL=chunk-3LY2RDZ6.cjs.map