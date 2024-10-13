"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkQP5OTDS6cjs = require('./chunk-QP5OTDS6.cjs');


var _chunk3PFPPHFLcjs = require('./chunk-3PFPPHFL.cjs');


var _chunkNAPXQQJ3cjs = require('./chunk-NAPXQQJ3.cjs');


var _chunkVBWN4YJJcjs = require('./chunk-VBWN4YJJ.cjs');


var _chunkTD2WYWGAcjs = require('./chunk-TD2WYWGA.cjs');


var _chunkOO7BVO2Hcjs = require('./chunk-OO7BVO2H.cjs');


var _chunkX2HWIL4Acjs = require('./chunk-X2HWIL4A.cjs');


var _chunk6JWX7MA3cjs = require('./chunk-6JWX7MA3.cjs');


var _chunkHGFNG2SEcjs = require('./chunk-HGFNG2SE.cjs');

// src/database/inputTypeSchemas/SettingsUpdateManyMutationInputSchema.ts
var _zod = require('zod');
var SettingsUpdateManyMutationInputSchema = _zod.z.object({
  id: _zod.z.union([_zod.z.number().int(), _zod.z.lazy(() => _chunkX2HWIL4Acjs.IntFieldUpdateOperationsInputSchema)]).optional(),
  tooltips: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunkNAPXQQJ3cjs.BoolFieldUpdateOperationsInputSchema)]).optional(),
  title: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkHGFNG2SEcjs.StringFieldUpdateOperationsInputSchema)]).optional(),
  summary_showCitations: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunkNAPXQQJ3cjs.BoolFieldUpdateOperationsInputSchema)]).optional(),
  summary_showTags: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunkNAPXQQJ3cjs.BoolFieldUpdateOperationsInputSchema)]).optional(),
  landingImageAlign: _zod.z.union([_zod.z.lazy(() => _chunk3PFPPHFLcjs.ImageAlignmentSchema), _zod.z.lazy(() => _chunkQP5OTDS6cjs.EnumImageAlignmentFieldUpdateOperationsInputSchema)]).optional(),
  lockedLandingImage: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkVBWN4YJJcjs.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  cleanOnSync: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunkNAPXQQJ3cjs.BoolFieldUpdateOperationsInputSchema)]).optional(),
  plotTheme: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkVBWN4YJJcjs.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  pluginSettings: _zod.z.union([_zod.z.lazy(() => _chunkTD2WYWGAcjs.JsonNullValueInputSchema), _chunkOO7BVO2Hcjs.InputJsonValueSchema]).optional(),
  firstSync: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => _chunk6JWX7MA3cjs.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  lastSync: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => _chunk6JWX7MA3cjs.DateTimeFieldUpdateOperationsInputSchema)]).optional()
}).strict();
var SettingsUpdateManyMutationInputSchema_default = SettingsUpdateManyMutationInputSchema;




exports.SettingsUpdateManyMutationInputSchema = SettingsUpdateManyMutationInputSchema; exports.SettingsUpdateManyMutationInputSchema_default = SettingsUpdateManyMutationInputSchema_default;
//# sourceMappingURL=chunk-AYZYY2Q4.cjs.map