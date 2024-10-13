"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk4YUU75HNcjs = require('./chunk-4YUU75HN.cjs');


var _chunkWF72CJG5cjs = require('./chunk-WF72CJG5.cjs');


var _chunk22SLDZFMcjs = require('./chunk-22SLDZFM.cjs');


var _chunkR2GMKW2Wcjs = require('./chunk-R2GMKW2W.cjs');


var _chunkLQQKOQFTcjs = require('./chunk-LQQKOQFT.cjs');

// src/database/inputTypeSchemas/DietCreateWithoutHealthReportInputSchema.ts
var _zod = require('zod');
var DietCreateWithoutHealthReportInputSchema = _zod.z.object({
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
  items: _zod.z.lazy(() => _chunkWF72CJG5cjs.DietaryItemCreateNestedManyWithoutDietInputSchema).optional(),
  periodsFollowed: _zod.z.lazy(() => _chunk4YUU75HNcjs.TimePeriodCreateNestedManyWithoutDietInputSchema).optional()
}).strict();
var DietCreateWithoutHealthReportInputSchema_default = DietCreateWithoutHealthReportInputSchema;




exports.DietCreateWithoutHealthReportInputSchema = DietCreateWithoutHealthReportInputSchema; exports.DietCreateWithoutHealthReportInputSchema_default = DietCreateWithoutHealthReportInputSchema_default;
//# sourceMappingURL=chunk-TGGIC7LL.cjs.map