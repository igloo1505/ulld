"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkTT4FPM4Hcjs = require('./chunk-TT4FPM4H.cjs');


var _chunkXVV3K6RHcjs = require('./chunk-XVV3K6RH.cjs');


var _chunkMT2G3375cjs = require('./chunk-MT2G3375.cjs');


var _chunkLEJRXSKCcjs = require('./chunk-LEJRXSKC.cjs');


var _chunkU2D6LPEOcjs = require('./chunk-U2D6LPEO.cjs');


var _chunkHR7DVN6Wcjs = require('./chunk-HR7DVN6W.cjs');


var _chunkE6WNRJ6Fcjs = require('./chunk-E6WNRJ6F.cjs');


var _chunkPCMP4RYYcjs = require('./chunk-PCMP4RYY.cjs');


var _chunkHHR6Z4QKcjs = require('./chunk-HHR6Z4QK.cjs');


var _chunk4HCQC4XGcjs = require('./chunk-4HCQC4XG.cjs');


var _chunkI5XF7I5Vcjs = require('./chunk-I5XF7I5V.cjs');

// src/database/inputTypeSchemas/DietUncheckedUpdateWithoutPeriodsFollowedInputSchema.ts
var _zod = require('zod');
var DietUncheckedUpdateWithoutPeriodsFollowedInputSchema = _zod.z.object({
  name: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkI5XF7I5Vcjs.StringFieldUpdateOperationsInputSchema)]).optional(),
  summary: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkHHR6Z4QKcjs.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  activelyFollowing: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunkPCMP4RYYcjs.BoolFieldUpdateOperationsInputSchema)]).optional(),
  gf: _zod.z.union([_zod.z.lazy(() => _chunkHR7DVN6Wcjs.TERTIARY_TOGGLESchema), _zod.z.lazy(() => _chunkLEJRXSKCcjs.EnumTERTIARY_TOGGLEFieldUpdateOperationsInputSchema)]).optional(),
  vegan: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunkPCMP4RYYcjs.BoolFieldUpdateOperationsInputSchema)]).optional(),
  pescatarian: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunkPCMP4RYYcjs.BoolFieldUpdateOperationsInputSchema)]).optional(),
  vegetarian: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunkPCMP4RYYcjs.BoolFieldUpdateOperationsInputSchema)]).optional(),
  fasting: _zod.z.union([_zod.z.lazy(() => _chunkHR7DVN6Wcjs.TERTIARY_TOGGLESchema), _zod.z.lazy(() => _chunkLEJRXSKCcjs.EnumTERTIARY_TOGGLEFieldUpdateOperationsInputSchema)]).optional(),
  cardioTraining: _zod.z.union([_zod.z.lazy(() => _chunkHR7DVN6Wcjs.TERTIARY_TOGGLESchema), _zod.z.lazy(() => _chunkLEJRXSKCcjs.EnumTERTIARY_TOGGLEFieldUpdateOperationsInputSchema)]).optional(),
  weightTraining: _zod.z.union([_zod.z.lazy(() => _chunkHR7DVN6Wcjs.TERTIARY_TOGGLESchema), _zod.z.lazy(() => _chunkLEJRXSKCcjs.EnumTERTIARY_TOGGLEFieldUpdateOperationsInputSchema)]).optional(),
  carb: _zod.z.union([_zod.z.number(), _zod.z.lazy(() => _chunkE6WNRJ6Fcjs.NullableFloatFieldUpdateOperationsInputSchema)]).optional().nullable(),
  pro: _zod.z.union([_zod.z.number(), _zod.z.lazy(() => _chunkE6WNRJ6Fcjs.NullableFloatFieldUpdateOperationsInputSchema)]).optional().nullable(),
  fat: _zod.z.union([_zod.z.number(), _zod.z.lazy(() => _chunkE6WNRJ6Fcjs.NullableFloatFieldUpdateOperationsInputSchema)]).optional().nullable(),
  goals: _zod.z.union([_zod.z.lazy(() => _chunkMT2G3375cjs.DietUpdategoalsInputSchema), _zod.z.lazy(() => _chunkU2D6LPEOcjs.DIETARY_GOALSchema).array()]).optional(),
  created: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => _chunk4HCQC4XGcjs.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  lastUpdate: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => _chunk4HCQC4XGcjs.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  items: _zod.z.lazy(() => _chunkTT4FPM4Hcjs.DietaryItemUncheckedUpdateManyWithoutDietNestedInputSchema).optional(),
  HealthReport: _zod.z.lazy(() => _chunkXVV3K6RHcjs.HealthReportUncheckedUpdateManyWithoutCurrentDietNestedInputSchema).optional()
}).strict();
var DietUncheckedUpdateWithoutPeriodsFollowedInputSchema_default = DietUncheckedUpdateWithoutPeriodsFollowedInputSchema;




exports.DietUncheckedUpdateWithoutPeriodsFollowedInputSchema = DietUncheckedUpdateWithoutPeriodsFollowedInputSchema; exports.DietUncheckedUpdateWithoutPeriodsFollowedInputSchema_default = DietUncheckedUpdateWithoutPeriodsFollowedInputSchema_default;
//# sourceMappingURL=chunk-ZAIMXU4K.cjs.map