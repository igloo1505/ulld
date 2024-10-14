"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk6B2EZ4UUcjs = require('./chunk-6B2EZ4UU.cjs');


var _chunkMUJP7Z7Ecjs = require('./chunk-MUJP7Z7E.cjs');


var _chunkTNXNJYCAcjs = require('./chunk-TNXNJYCA.cjs');


var _chunkU2D6LPEOcjs = require('./chunk-U2D6LPEO.cjs');


var _chunkHR7DVN6Wcjs = require('./chunk-HR7DVN6W.cjs');

// src/database/inputTypeSchemas/DietUncheckedCreateWithoutItemsInputSchema.ts
var _zod = require('zod');
var DietUncheckedCreateWithoutItemsInputSchema = _zod.z.object({
  name: _zod.z.string(),
  summary: _zod.z.string().optional().nullable(),
  activelyFollowing: _zod.z.boolean().optional(),
  gf: _zod.z.lazy(() => _chunkHR7DVN6Wcjs.TERTIARY_TOGGLESchema).optional(),
  vegan: _zod.z.boolean().optional(),
  pescatarian: _zod.z.boolean().optional(),
  vegetarian: _zod.z.boolean().optional(),
  fasting: _zod.z.lazy(() => _chunkHR7DVN6Wcjs.TERTIARY_TOGGLESchema).optional(),
  cardioTraining: _zod.z.lazy(() => _chunkHR7DVN6Wcjs.TERTIARY_TOGGLESchema).optional(),
  weightTraining: _zod.z.lazy(() => _chunkHR7DVN6Wcjs.TERTIARY_TOGGLESchema).optional(),
  carb: _zod.z.number().optional().nullable(),
  pro: _zod.z.number().optional().nullable(),
  fat: _zod.z.number().optional().nullable(),
  goals: _zod.z.union([_zod.z.lazy(() => _chunkTNXNJYCAcjs.DietCreategoalsInputSchema), _zod.z.lazy(() => _chunkU2D6LPEOcjs.DIETARY_GOALSchema).array()]).optional(),
  created: _zod.z.coerce.date().optional(),
  lastUpdate: _zod.z.coerce.date().optional(),
  periodsFollowed: _zod.z.lazy(() => _chunk6B2EZ4UUcjs.TimePeriodUncheckedCreateNestedManyWithoutDietInputSchema).optional(),
  HealthReport: _zod.z.lazy(() => _chunkMUJP7Z7Ecjs.HealthReportUncheckedCreateNestedManyWithoutCurrentDietInputSchema).optional()
}).strict();
var DietUncheckedCreateWithoutItemsInputSchema_default = DietUncheckedCreateWithoutItemsInputSchema;




exports.DietUncheckedCreateWithoutItemsInputSchema = DietUncheckedCreateWithoutItemsInputSchema; exports.DietUncheckedCreateWithoutItemsInputSchema_default = DietUncheckedCreateWithoutItemsInputSchema_default;
//# sourceMappingURL=chunk-CV7OTBEF.cjs.map