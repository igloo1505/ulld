"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk3PFPPHFLcjs = require('./chunk-3PFPPHFL.cjs');


var _chunkTD2WYWGAcjs = require('./chunk-TD2WYWGA.cjs');


var _chunkOO7BVO2Hcjs = require('./chunk-OO7BVO2H.cjs');

// src/database/inputTypeSchemas/SettingsUncheckedCreateInputSchema.ts
var _zod = require('zod');
var SettingsUncheckedCreateInputSchema = _zod.z.object({
  id: _zod.z.number().int().optional(),
  tooltips: _zod.z.boolean().optional(),
  title: _zod.z.string().optional(),
  summary_showCitations: _zod.z.boolean().optional(),
  summary_showTags: _zod.z.boolean().optional(),
  landingImageAlign: _zod.z.lazy(() => _chunk3PFPPHFLcjs.ImageAlignmentSchema).optional(),
  lockedLandingImage: _zod.z.string().optional().nullable(),
  cleanOnSync: _zod.z.boolean().optional(),
  plotTheme: _zod.z.string().optional().nullable(),
  pluginSettings: _zod.z.union([_zod.z.lazy(() => _chunkTD2WYWGAcjs.JsonNullValueInputSchema), _chunkOO7BVO2Hcjs.InputJsonValueSchema]).optional(),
  firstSync: _zod.z.coerce.date().optional(),
  lastSync: _zod.z.coerce.date().optional()
}).strict();
var SettingsUncheckedCreateInputSchema_default = SettingsUncheckedCreateInputSchema;




exports.SettingsUncheckedCreateInputSchema = SettingsUncheckedCreateInputSchema; exports.SettingsUncheckedCreateInputSchema_default = SettingsUncheckedCreateInputSchema_default;
//# sourceMappingURL=chunk-5DU4LKN4.cjs.map