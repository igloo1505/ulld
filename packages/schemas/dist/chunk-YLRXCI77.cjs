"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk24L5ZGLAcjs = require('./chunk-24L5ZGLA.cjs');


var _chunk4ODMRDMRcjs = require('./chunk-4ODMRDMR.cjs');


var _chunkMZXKHCSHcjs = require('./chunk-MZXKHCSH.cjs');


var _chunkUIRDV2G2cjs = require('./chunk-UIRDV2G2.cjs');


var _chunkR2GMKW2Wcjs = require('./chunk-R2GMKW2W.cjs');


var _chunkLQQKOQFTcjs = require('./chunk-LQQKOQFT.cjs');


var _chunkT7BWXFP5cjs = require('./chunk-T7BWXFP5.cjs');


var _chunkNAPXQQJ3cjs = require('./chunk-NAPXQQJ3.cjs');


var _chunkVBWN4YJJcjs = require('./chunk-VBWN4YJJ.cjs');


var _chunk6JWX7MA3cjs = require('./chunk-6JWX7MA3.cjs');


var _chunkHGFNG2SEcjs = require('./chunk-HGFNG2SE.cjs');

// src/database/inputTypeSchemas/DietUpdateWithoutPeriodsFollowedInputSchema.ts
var _zod = require('zod');
var DietUpdateWithoutPeriodsFollowedInputSchema = _zod.z.object({
  name: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkHGFNG2SEcjs.StringFieldUpdateOperationsInputSchema)]).optional(),
  summary: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkVBWN4YJJcjs.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  activelyFollowing: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunkNAPXQQJ3cjs.BoolFieldUpdateOperationsInputSchema)]).optional(),
  gf: _zod.z.union([_zod.z.lazy(() => _chunkLQQKOQFTcjs.TERTIARY_TOGGLESchema), _zod.z.lazy(() => _chunkUIRDV2G2cjs.EnumTERTIARY_TOGGLEFieldUpdateOperationsInputSchema)]).optional(),
  vegan: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunkNAPXQQJ3cjs.BoolFieldUpdateOperationsInputSchema)]).optional(),
  pescatarian: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunkNAPXQQJ3cjs.BoolFieldUpdateOperationsInputSchema)]).optional(),
  vegetarian: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunkNAPXQQJ3cjs.BoolFieldUpdateOperationsInputSchema)]).optional(),
  fasting: _zod.z.union([_zod.z.lazy(() => _chunkLQQKOQFTcjs.TERTIARY_TOGGLESchema), _zod.z.lazy(() => _chunkUIRDV2G2cjs.EnumTERTIARY_TOGGLEFieldUpdateOperationsInputSchema)]).optional(),
  cardioTraining: _zod.z.union([_zod.z.lazy(() => _chunkLQQKOQFTcjs.TERTIARY_TOGGLESchema), _zod.z.lazy(() => _chunkUIRDV2G2cjs.EnumTERTIARY_TOGGLEFieldUpdateOperationsInputSchema)]).optional(),
  weightTraining: _zod.z.union([_zod.z.lazy(() => _chunkLQQKOQFTcjs.TERTIARY_TOGGLESchema), _zod.z.lazy(() => _chunkUIRDV2G2cjs.EnumTERTIARY_TOGGLEFieldUpdateOperationsInputSchema)]).optional(),
  carb: _zod.z.union([_zod.z.number(), _zod.z.lazy(() => _chunkT7BWXFP5cjs.NullableFloatFieldUpdateOperationsInputSchema)]).optional().nullable(),
  pro: _zod.z.union([_zod.z.number(), _zod.z.lazy(() => _chunkT7BWXFP5cjs.NullableFloatFieldUpdateOperationsInputSchema)]).optional().nullable(),
  fat: _zod.z.union([_zod.z.number(), _zod.z.lazy(() => _chunkT7BWXFP5cjs.NullableFloatFieldUpdateOperationsInputSchema)]).optional().nullable(),
  goals: _zod.z.union([_zod.z.lazy(() => _chunkMZXKHCSHcjs.DietUpdategoalsInputSchema), _zod.z.lazy(() => _chunkR2GMKW2Wcjs.DIETARY_GOALSchema).array()]).optional(),
  created: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => _chunk6JWX7MA3cjs.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  lastUpdate: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => _chunk6JWX7MA3cjs.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  items: _zod.z.lazy(() => _chunk24L5ZGLAcjs.DietaryItemUpdateManyWithoutDietNestedInputSchema).optional(),
  HealthReport: _zod.z.lazy(() => _chunk4ODMRDMRcjs.HealthReportUpdateManyWithoutCurrentDietNestedInputSchema).optional()
}).strict();
var DietUpdateWithoutPeriodsFollowedInputSchema_default = DietUpdateWithoutPeriodsFollowedInputSchema;




exports.DietUpdateWithoutPeriodsFollowedInputSchema = DietUpdateWithoutPeriodsFollowedInputSchema; exports.DietUpdateWithoutPeriodsFollowedInputSchema_default = DietUpdateWithoutPeriodsFollowedInputSchema_default;
//# sourceMappingURL=chunk-YLRXCI77.cjs.map