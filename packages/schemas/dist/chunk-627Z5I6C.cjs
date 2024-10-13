"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkLPFWU5GGcjs = require('./chunk-LPFWU5GG.cjs');


var _chunk3PFPPHFLcjs = require('./chunk-3PFPPHFL.cjs');


var _chunkF2KOFIOBcjs = require('./chunk-F2KOFIOB.cjs');


var _chunkEPJIZOD5cjs = require('./chunk-EPJIZOD5.cjs');


var _chunkWQNXU6XAcjs = require('./chunk-WQNXU6XA.cjs');


var _chunkDMG3BD7Ecjs = require('./chunk-DMG3BD7E.cjs');


var _chunkFR5PAJGJcjs = require('./chunk-FR5PAJGJ.cjs');


var _chunk7NJCCFRTcjs = require('./chunk-7NJCCFRT.cjs');

// src/database/inputTypeSchemas/SettingsWhereInputSchema.ts
var _zod = require('zod');
var SettingsWhereInputSchema = _zod.z.object({
  AND: _zod.z.union([_zod.z.lazy(() => SettingsWhereInputSchema), _zod.z.lazy(() => SettingsWhereInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => SettingsWhereInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => SettingsWhereInputSchema), _zod.z.lazy(() => SettingsWhereInputSchema).array()]).optional(),
  id: _zod.z.union([_zod.z.lazy(() => _chunkDMG3BD7Ecjs.IntFilterSchema), _zod.z.number()]).optional(),
  tooltips: _zod.z.union([_zod.z.lazy(() => _chunkEPJIZOD5cjs.BoolFilterSchema), _zod.z.boolean()]).optional(),
  title: _zod.z.union([_zod.z.lazy(() => _chunk7NJCCFRTcjs.StringFilterSchema), _zod.z.string()]).optional(),
  summary_showCitations: _zod.z.union([_zod.z.lazy(() => _chunkEPJIZOD5cjs.BoolFilterSchema), _zod.z.boolean()]).optional(),
  summary_showTags: _zod.z.union([_zod.z.lazy(() => _chunkEPJIZOD5cjs.BoolFilterSchema), _zod.z.boolean()]).optional(),
  landingImageAlign: _zod.z.union([_zod.z.lazy(() => _chunkLPFWU5GGcjs.EnumImageAlignmentFilterSchema), _zod.z.lazy(() => _chunk3PFPPHFLcjs.ImageAlignmentSchema)]).optional(),
  lockedLandingImage: _zod.z.union([_zod.z.lazy(() => _chunkWQNXU6XAcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  cleanOnSync: _zod.z.union([_zod.z.lazy(() => _chunkEPJIZOD5cjs.BoolFilterSchema), _zod.z.boolean()]).optional(),
  plotTheme: _zod.z.union([_zod.z.lazy(() => _chunkWQNXU6XAcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  pluginSettings: _zod.z.lazy(() => _chunkF2KOFIOBcjs.JsonFilterSchema).optional(),
  firstSync: _zod.z.union([_zod.z.lazy(() => _chunkFR5PAJGJcjs.DateTimeFilterSchema), _zod.z.coerce.date()]).optional(),
  lastSync: _zod.z.union([_zod.z.lazy(() => _chunkFR5PAJGJcjs.DateTimeFilterSchema), _zod.z.coerce.date()]).optional()
}).strict();
var SettingsWhereInputSchema_default = SettingsWhereInputSchema;




exports.SettingsWhereInputSchema = SettingsWhereInputSchema; exports.SettingsWhereInputSchema_default = SettingsWhereInputSchema_default;
//# sourceMappingURL=chunk-627Z5I6C.cjs.map