"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkYI645YZTcjs = require('./chunk-YI645YZT.cjs');


var _chunkE34DZ3CIcjs = require('./chunk-E34DZ3CI.cjs');


var _chunkPCMP4RYYcjs = require('./chunk-PCMP4RYY.cjs');


var _chunkHHR6Z4QKcjs = require('./chunk-HHR6Z4QK.cjs');


var _chunkZI4N5EPRcjs = require('./chunk-ZI4N5EPR.cjs');


var _chunkCPSW4INCcjs = require('./chunk-CPSW4INC.cjs');


var _chunkYGCZ3T7Tcjs = require('./chunk-YGCZ3T7T.cjs');


var _chunk4HCQC4XGcjs = require('./chunk-4HCQC4XG.cjs');


var _chunkI5XF7I5Vcjs = require('./chunk-I5XF7I5V.cjs');

// src/database/inputTypeSchemas/SettingsUpdateManyMutationInputSchema.ts
var _zod = require('zod');
var SettingsUpdateManyMutationInputSchema = _zod.z.object({
  id: _zod.z.union([_zod.z.number().int(), _zod.z.lazy(() => _chunkYGCZ3T7Tcjs.IntFieldUpdateOperationsInputSchema)]).optional(),
  tooltips: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunkPCMP4RYYcjs.BoolFieldUpdateOperationsInputSchema)]).optional(),
  title: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkI5XF7I5Vcjs.StringFieldUpdateOperationsInputSchema)]).optional(),
  summary_showCitations: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunkPCMP4RYYcjs.BoolFieldUpdateOperationsInputSchema)]).optional(),
  summary_showTags: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunkPCMP4RYYcjs.BoolFieldUpdateOperationsInputSchema)]).optional(),
  landingImageAlign: _zod.z.union([_zod.z.lazy(() => _chunkE34DZ3CIcjs.ImageAlignmentSchema), _zod.z.lazy(() => _chunkYI645YZTcjs.EnumImageAlignmentFieldUpdateOperationsInputSchema)]).optional(),
  lockedLandingImage: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkHHR6Z4QKcjs.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  cleanOnSync: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunkPCMP4RYYcjs.BoolFieldUpdateOperationsInputSchema)]).optional(),
  plotTheme: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkHHR6Z4QKcjs.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  pluginSettings: _zod.z.union([_zod.z.lazy(() => _chunkZI4N5EPRcjs.JsonNullValueInputSchema), _chunkCPSW4INCcjs.InputJsonValueSchema]).optional(),
  firstSync: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => _chunk4HCQC4XGcjs.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  lastSync: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => _chunk4HCQC4XGcjs.DateTimeFieldUpdateOperationsInputSchema)]).optional()
}).strict();
var SettingsUpdateManyMutationInputSchema_default = SettingsUpdateManyMutationInputSchema;




exports.SettingsUpdateManyMutationInputSchema = SettingsUpdateManyMutationInputSchema; exports.SettingsUpdateManyMutationInputSchema_default = SettingsUpdateManyMutationInputSchema_default;
//# sourceMappingURL=chunk-ISYJBRIG.cjs.map