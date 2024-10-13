"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkTWH3NLABcjs = require('./chunk-TWH3NLAB.cjs');


var _chunk4EY7IFN7cjs = require('./chunk-4EY7IFN7.cjs');


var _chunk22SLDZFMcjs = require('./chunk-22SLDZFM.cjs');


var _chunkR2GMKW2Wcjs = require('./chunk-R2GMKW2W.cjs');


var _chunkLQQKOQFTcjs = require('./chunk-LQQKOQFT.cjs');

// src/database/inputTypeSchemas/DietUncheckedCreateWithoutHealthReportInputSchema.ts
var _zod = require('zod');
var DietUncheckedCreateWithoutHealthReportInputSchema = _zod.z.object({
  name: _zod.z.string(),
  summary: _zod.z.string().optional().nullable(),
  activelyFollowing: _zod.z.boolean().optional(),
  gf: _zod.z.lazy(() => _chunkLQQKOQFTcjs.TERTIARY_TOGGLESchema).optional(),
  vegan: _zod.z.boolean().optional(),
  pescatarian: _zod.z.boolean().optional(),
  vegetarian: _zod.z.boolean().optional(),
  fasting: _zod.z.lazy(() => _chunkLQQKOQFTcjs.TERTIARY_TOGGLESchema).optional(),
  cardioTraining: _zod.z.lazy(() => _chunkLQQKOQFTcjs.TERTIARY_TOGGLESchema).optional(),
  weightTraining: _zod.z.lazy(() => _chunkLQQKOQFTcjs.TERTIARY_TOGGLESchema).optional(),
  carb: _zod.z.number().optional().nullable(),
  pro: _zod.z.number().optional().nullable(),
  fat: _zod.z.number().optional().nullable(),
  goals: _zod.z.union([_zod.z.lazy(() => _chunk22SLDZFMcjs.DietCreategoalsInputSchema), _zod.z.lazy(() => _chunkR2GMKW2Wcjs.DIETARY_GOALSchema).array()]).optional(),
  created: _zod.z.coerce.date().optional(),
  lastUpdate: _zod.z.coerce.date().optional(),
  items: _zod.z.lazy(() => _chunk4EY7IFN7cjs.DietaryItemUncheckedCreateNestedManyWithoutDietInputSchema).optional(),
  periodsFollowed: _zod.z.lazy(() => _chunkTWH3NLABcjs.TimePeriodUncheckedCreateNestedManyWithoutDietInputSchema).optional()
}).strict();
var DietUncheckedCreateWithoutHealthReportInputSchema_default = DietUncheckedCreateWithoutHealthReportInputSchema;




exports.DietUncheckedCreateWithoutHealthReportInputSchema = DietUncheckedCreateWithoutHealthReportInputSchema; exports.DietUncheckedCreateWithoutHealthReportInputSchema_default = DietUncheckedCreateWithoutHealthReportInputSchema_default;
//# sourceMappingURL=chunk-NSNOWG3D.cjs.map