"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkWO6J2IR6cjs = require('./chunk-WO6J2IR6.cjs');


var _chunkVYMA4VCAcjs = require('./chunk-VYMA4VCA.cjs');


var _chunkE34DZ3CIcjs = require('./chunk-E34DZ3CI.cjs');


var _chunk4ASRITDCcjs = require('./chunk-4ASRITDC.cjs');


var _chunkIEB3LIY7cjs = require('./chunk-IEB3LIY7.cjs');


var _chunkYSVCS7P6cjs = require('./chunk-YSVCS7P6.cjs');


var _chunk5AQUPIZWcjs = require('./chunk-5AQUPIZW.cjs');


var _chunkJNWYIEVVcjs = require('./chunk-JNWYIEVV.cjs');

// src/database/inputTypeSchemas/SettingsScalarWhereWithAggregatesInputSchema.ts
var _zod = require('zod');
var SettingsScalarWhereWithAggregatesInputSchema = _zod.z.object({
  AND: _zod.z.union([_zod.z.lazy(() => SettingsScalarWhereWithAggregatesInputSchema), _zod.z.lazy(() => SettingsScalarWhereWithAggregatesInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => SettingsScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => SettingsScalarWhereWithAggregatesInputSchema), _zod.z.lazy(() => SettingsScalarWhereWithAggregatesInputSchema).array()]).optional(),
  id: _zod.z.union([_zod.z.lazy(() => _chunkYSVCS7P6cjs.IntWithAggregatesFilterSchema), _zod.z.number()]).optional(),
  tooltips: _zod.z.union([_zod.z.lazy(() => _chunk4ASRITDCcjs.BoolWithAggregatesFilterSchema), _zod.z.boolean()]).optional(),
  title: _zod.z.union([_zod.z.lazy(() => _chunkJNWYIEVVcjs.StringWithAggregatesFilterSchema), _zod.z.string()]).optional(),
  summary_showCitations: _zod.z.union([_zod.z.lazy(() => _chunk4ASRITDCcjs.BoolWithAggregatesFilterSchema), _zod.z.boolean()]).optional(),
  summary_showTags: _zod.z.union([_zod.z.lazy(() => _chunk4ASRITDCcjs.BoolWithAggregatesFilterSchema), _zod.z.boolean()]).optional(),
  landingImageAlign: _zod.z.union([_zod.z.lazy(() => _chunkWO6J2IR6cjs.EnumImageAlignmentWithAggregatesFilterSchema), _zod.z.lazy(() => _chunkE34DZ3CIcjs.ImageAlignmentSchema)]).optional(),
  lockedLandingImage: _zod.z.union([_zod.z.lazy(() => _chunkIEB3LIY7cjs.StringNullableWithAggregatesFilterSchema), _zod.z.string()]).optional().nullable(),
  cleanOnSync: _zod.z.union([_zod.z.lazy(() => _chunk4ASRITDCcjs.BoolWithAggregatesFilterSchema), _zod.z.boolean()]).optional(),
  plotTheme: _zod.z.union([_zod.z.lazy(() => _chunkIEB3LIY7cjs.StringNullableWithAggregatesFilterSchema), _zod.z.string()]).optional().nullable(),
  pluginSettings: _zod.z.lazy(() => _chunkVYMA4VCAcjs.JsonWithAggregatesFilterSchema).optional(),
  firstSync: _zod.z.union([_zod.z.lazy(() => _chunk5AQUPIZWcjs.DateTimeWithAggregatesFilterSchema), _zod.z.coerce.date()]).optional(),
  lastSync: _zod.z.union([_zod.z.lazy(() => _chunk5AQUPIZWcjs.DateTimeWithAggregatesFilterSchema), _zod.z.coerce.date()]).optional()
}).strict();
var SettingsScalarWhereWithAggregatesInputSchema_default = SettingsScalarWhereWithAggregatesInputSchema;




exports.SettingsScalarWhereWithAggregatesInputSchema = SettingsScalarWhereWithAggregatesInputSchema; exports.SettingsScalarWhereWithAggregatesInputSchema_default = SettingsScalarWhereWithAggregatesInputSchema_default;
//# sourceMappingURL=chunk-OKXRGJFC.cjs.map