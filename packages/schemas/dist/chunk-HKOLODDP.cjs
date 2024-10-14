"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk4GP2GD42cjs = require('./chunk-4GP2GD42.cjs');


var _chunkPUUCVPZ6cjs = require('./chunk-PUUCVPZ6.cjs');


var _chunkE34DZ3CIcjs = require('./chunk-E34DZ3CI.cjs');


var _chunkL7ZRMRIIcjs = require('./chunk-L7ZRMRII.cjs');


var _chunkOVUGA3P5cjs = require('./chunk-OVUGA3P5.cjs');


var _chunk2V5AKF3Qcjs = require('./chunk-2V5AKF3Q.cjs');


var _chunk2L755XMWcjs = require('./chunk-2L755XMW.cjs');


var _chunkXUF4Q3ZJcjs = require('./chunk-XUF4Q3ZJ.cjs');

// src/database/inputTypeSchemas/SettingsWhereUniqueInputSchema.ts
var _zod = require('zod');
var SettingsWhereUniqueInputSchema = _zod.z.object({
  id: _zod.z.number().int()
}).and(_zod.z.object({
  id: _zod.z.number().int().optional(),
  AND: _zod.z.union([_zod.z.lazy(() => _chunk4GP2GD42cjs.SettingsWhereInputSchema), _zod.z.lazy(() => _chunk4GP2GD42cjs.SettingsWhereInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => _chunk4GP2GD42cjs.SettingsWhereInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => _chunk4GP2GD42cjs.SettingsWhereInputSchema), _zod.z.lazy(() => _chunk4GP2GD42cjs.SettingsWhereInputSchema).array()]).optional(),
  tooltips: _zod.z.union([_zod.z.lazy(() => _chunkOVUGA3P5cjs.BoolFilterSchema), _zod.z.boolean()]).optional(),
  title: _zod.z.union([_zod.z.lazy(() => _chunkXUF4Q3ZJcjs.StringFilterSchema), _zod.z.string()]).optional(),
  summary_showCitations: _zod.z.union([_zod.z.lazy(() => _chunkOVUGA3P5cjs.BoolFilterSchema), _zod.z.boolean()]).optional(),
  summary_showTags: _zod.z.union([_zod.z.lazy(() => _chunkOVUGA3P5cjs.BoolFilterSchema), _zod.z.boolean()]).optional(),
  landingImageAlign: _zod.z.union([_zod.z.lazy(() => _chunkPUUCVPZ6cjs.EnumImageAlignmentFilterSchema), _zod.z.lazy(() => _chunkE34DZ3CIcjs.ImageAlignmentSchema)]).optional(),
  lockedLandingImage: _zod.z.union([_zod.z.lazy(() => _chunk2V5AKF3Qcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  cleanOnSync: _zod.z.union([_zod.z.lazy(() => _chunkOVUGA3P5cjs.BoolFilterSchema), _zod.z.boolean()]).optional(),
  plotTheme: _zod.z.union([_zod.z.lazy(() => _chunk2V5AKF3Qcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  pluginSettings: _zod.z.lazy(() => _chunkL7ZRMRIIcjs.JsonFilterSchema).optional(),
  firstSync: _zod.z.union([_zod.z.lazy(() => _chunk2L755XMWcjs.DateTimeFilterSchema), _zod.z.coerce.date()]).optional(),
  lastSync: _zod.z.union([_zod.z.lazy(() => _chunk2L755XMWcjs.DateTimeFilterSchema), _zod.z.coerce.date()]).optional()
}).strict());
var SettingsWhereUniqueInputSchema_default = SettingsWhereUniqueInputSchema;




exports.SettingsWhereUniqueInputSchema = SettingsWhereUniqueInputSchema; exports.SettingsWhereUniqueInputSchema_default = SettingsWhereUniqueInputSchema_default;
//# sourceMappingURL=chunk-HKOLODDP.cjs.map