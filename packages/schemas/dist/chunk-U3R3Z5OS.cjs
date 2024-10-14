"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkE34DZ3CIcjs = require('./chunk-E34DZ3CI.cjs');


var _chunkZI4N5EPRcjs = require('./chunk-ZI4N5EPR.cjs');


var _chunkCPSW4INCcjs = require('./chunk-CPSW4INC.cjs');

// src/database/inputTypeSchemas/SettingsCreateManyInputSchema.ts
var _zod = require('zod');
var SettingsCreateManyInputSchema = _zod.z.object({
  id: _zod.z.number().int().optional(),
  tooltips: _zod.z.boolean().optional(),
  title: _zod.z.string().optional(),
  summary_showCitations: _zod.z.boolean().optional(),
  summary_showTags: _zod.z.boolean().optional(),
  landingImageAlign: _zod.z.lazy(() => _chunkE34DZ3CIcjs.ImageAlignmentSchema).optional(),
  lockedLandingImage: _zod.z.string().optional().nullable(),
  cleanOnSync: _zod.z.boolean().optional(),
  plotTheme: _zod.z.string().optional().nullable(),
  pluginSettings: _zod.z.union([_zod.z.lazy(() => _chunkZI4N5EPRcjs.JsonNullValueInputSchema), _chunkCPSW4INCcjs.InputJsonValueSchema]).optional(),
  firstSync: _zod.z.coerce.date().optional(),
  lastSync: _zod.z.coerce.date().optional()
}).strict();
var SettingsCreateManyInputSchema_default = SettingsCreateManyInputSchema;




exports.SettingsCreateManyInputSchema = SettingsCreateManyInputSchema; exports.SettingsCreateManyInputSchema_default = SettingsCreateManyInputSchema_default;
//# sourceMappingURL=chunk-U3R3Z5OS.cjs.map