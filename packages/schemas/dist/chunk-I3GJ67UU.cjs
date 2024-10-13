"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkAMDZF4SQcjs = require('./chunk-AMDZF4SQ.cjs');


var _chunkXFYVMGLCcjs = require('./chunk-XFYVMGLC.cjs');


var _chunk3PFPPHFLcjs = require('./chunk-3PFPPHFL.cjs');


var _chunk4JWIYQZ6cjs = require('./chunk-4JWIYQZ6.cjs');


var _chunkDD6GKPAFcjs = require('./chunk-DD6GKPAF.cjs');


var _chunkVYYZSYF5cjs = require('./chunk-VYYZSYF5.cjs');


var _chunkJKV2YZP7cjs = require('./chunk-JKV2YZP7.cjs');


var _chunkOYCJHDTMcjs = require('./chunk-OYCJHDTM.cjs');

// src/database/inputTypeSchemas/SettingsScalarWhereWithAggregatesInputSchema.ts
var _zod = require('zod');
var SettingsScalarWhereWithAggregatesInputSchema = _zod.z.object({
  AND: _zod.z.union([_zod.z.lazy(() => SettingsScalarWhereWithAggregatesInputSchema), _zod.z.lazy(() => SettingsScalarWhereWithAggregatesInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => SettingsScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => SettingsScalarWhereWithAggregatesInputSchema), _zod.z.lazy(() => SettingsScalarWhereWithAggregatesInputSchema).array()]).optional(),
  id: _zod.z.union([_zod.z.lazy(() => _chunkVYYZSYF5cjs.IntWithAggregatesFilterSchema), _zod.z.number()]).optional(),
  tooltips: _zod.z.union([_zod.z.lazy(() => _chunk4JWIYQZ6cjs.BoolWithAggregatesFilterSchema), _zod.z.boolean()]).optional(),
  title: _zod.z.union([_zod.z.lazy(() => _chunkOYCJHDTMcjs.StringWithAggregatesFilterSchema), _zod.z.string()]).optional(),
  summary_showCitations: _zod.z.union([_zod.z.lazy(() => _chunk4JWIYQZ6cjs.BoolWithAggregatesFilterSchema), _zod.z.boolean()]).optional(),
  summary_showTags: _zod.z.union([_zod.z.lazy(() => _chunk4JWIYQZ6cjs.BoolWithAggregatesFilterSchema), _zod.z.boolean()]).optional(),
  landingImageAlign: _zod.z.union([_zod.z.lazy(() => _chunkAMDZF4SQcjs.EnumImageAlignmentWithAggregatesFilterSchema), _zod.z.lazy(() => _chunk3PFPPHFLcjs.ImageAlignmentSchema)]).optional(),
  lockedLandingImage: _zod.z.union([_zod.z.lazy(() => _chunkDD6GKPAFcjs.StringNullableWithAggregatesFilterSchema), _zod.z.string()]).optional().nullable(),
  cleanOnSync: _zod.z.union([_zod.z.lazy(() => _chunk4JWIYQZ6cjs.BoolWithAggregatesFilterSchema), _zod.z.boolean()]).optional(),
  plotTheme: _zod.z.union([_zod.z.lazy(() => _chunkDD6GKPAFcjs.StringNullableWithAggregatesFilterSchema), _zod.z.string()]).optional().nullable(),
  pluginSettings: _zod.z.lazy(() => _chunkXFYVMGLCcjs.JsonWithAggregatesFilterSchema).optional(),
  firstSync: _zod.z.union([_zod.z.lazy(() => _chunkJKV2YZP7cjs.DateTimeWithAggregatesFilterSchema), _zod.z.coerce.date()]).optional(),
  lastSync: _zod.z.union([_zod.z.lazy(() => _chunkJKV2YZP7cjs.DateTimeWithAggregatesFilterSchema), _zod.z.coerce.date()]).optional()
}).strict();
var SettingsScalarWhereWithAggregatesInputSchema_default = SettingsScalarWhereWithAggregatesInputSchema;




exports.SettingsScalarWhereWithAggregatesInputSchema = SettingsScalarWhereWithAggregatesInputSchema; exports.SettingsScalarWhereWithAggregatesInputSchema_default = SettingsScalarWhereWithAggregatesInputSchema_default;
//# sourceMappingURL=chunk-I3GJ67UU.cjs.map