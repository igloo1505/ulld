"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkY6SMTQXAcjs = require('./chunk-Y6SMTQXA.cjs');


var _chunkFSPKHZ3Xcjs = require('./chunk-FSPKHZ3X.cjs');


var _chunkIX7LNI3Gcjs = require('./chunk-IX7LNI3G.cjs');


var _chunkHR7DVN6Wcjs = require('./chunk-HR7DVN6W.cjs');


var _chunk4ASRITDCcjs = require('./chunk-4ASRITDC.cjs');


var _chunkIEB3LIY7cjs = require('./chunk-IEB3LIY7.cjs');


var _chunk5AQUPIZWcjs = require('./chunk-5AQUPIZW.cjs');


var _chunkJNWYIEVVcjs = require('./chunk-JNWYIEVV.cjs');

// src/database/inputTypeSchemas/DietScalarWhereWithAggregatesInputSchema.ts
var _zod = require('zod');
var DietScalarWhereWithAggregatesInputSchema = _zod.z.object({
  AND: _zod.z.union([_zod.z.lazy(() => DietScalarWhereWithAggregatesInputSchema), _zod.z.lazy(() => DietScalarWhereWithAggregatesInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => DietScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => DietScalarWhereWithAggregatesInputSchema), _zod.z.lazy(() => DietScalarWhereWithAggregatesInputSchema).array()]).optional(),
  name: _zod.z.union([_zod.z.lazy(() => _chunkJNWYIEVVcjs.StringWithAggregatesFilterSchema), _zod.z.string()]).optional(),
  summary: _zod.z.union([_zod.z.lazy(() => _chunkIEB3LIY7cjs.StringNullableWithAggregatesFilterSchema), _zod.z.string()]).optional().nullable(),
  activelyFollowing: _zod.z.union([_zod.z.lazy(() => _chunk4ASRITDCcjs.BoolWithAggregatesFilterSchema), _zod.z.boolean()]).optional(),
  gf: _zod.z.union([_zod.z.lazy(() => _chunkY6SMTQXAcjs.EnumTERTIARY_TOGGLEWithAggregatesFilterSchema), _zod.z.lazy(() => _chunkHR7DVN6Wcjs.TERTIARY_TOGGLESchema)]).optional(),
  vegan: _zod.z.union([_zod.z.lazy(() => _chunk4ASRITDCcjs.BoolWithAggregatesFilterSchema), _zod.z.boolean()]).optional(),
  pescatarian: _zod.z.union([_zod.z.lazy(() => _chunk4ASRITDCcjs.BoolWithAggregatesFilterSchema), _zod.z.boolean()]).optional(),
  vegetarian: _zod.z.union([_zod.z.lazy(() => _chunk4ASRITDCcjs.BoolWithAggregatesFilterSchema), _zod.z.boolean()]).optional(),
  fasting: _zod.z.union([_zod.z.lazy(() => _chunkY6SMTQXAcjs.EnumTERTIARY_TOGGLEWithAggregatesFilterSchema), _zod.z.lazy(() => _chunkHR7DVN6Wcjs.TERTIARY_TOGGLESchema)]).optional(),
  cardioTraining: _zod.z.union([_zod.z.lazy(() => _chunkY6SMTQXAcjs.EnumTERTIARY_TOGGLEWithAggregatesFilterSchema), _zod.z.lazy(() => _chunkHR7DVN6Wcjs.TERTIARY_TOGGLESchema)]).optional(),
  weightTraining: _zod.z.union([_zod.z.lazy(() => _chunkY6SMTQXAcjs.EnumTERTIARY_TOGGLEWithAggregatesFilterSchema), _zod.z.lazy(() => _chunkHR7DVN6Wcjs.TERTIARY_TOGGLESchema)]).optional(),
  carb: _zod.z.union([_zod.z.lazy(() => _chunkFSPKHZ3Xcjs.FloatNullableWithAggregatesFilterSchema), _zod.z.number()]).optional().nullable(),
  pro: _zod.z.union([_zod.z.lazy(() => _chunkFSPKHZ3Xcjs.FloatNullableWithAggregatesFilterSchema), _zod.z.number()]).optional().nullable(),
  fat: _zod.z.union([_zod.z.lazy(() => _chunkFSPKHZ3Xcjs.FloatNullableWithAggregatesFilterSchema), _zod.z.number()]).optional().nullable(),
  goals: _zod.z.lazy(() => _chunkIX7LNI3Gcjs.EnumDIETARY_GOALNullableListFilterSchema).optional(),
  created: _zod.z.union([_zod.z.lazy(() => _chunk5AQUPIZWcjs.DateTimeWithAggregatesFilterSchema), _zod.z.coerce.date()]).optional(),
  lastUpdate: _zod.z.union([_zod.z.lazy(() => _chunk5AQUPIZWcjs.DateTimeWithAggregatesFilterSchema), _zod.z.coerce.date()]).optional()
}).strict();
var DietScalarWhereWithAggregatesInputSchema_default = DietScalarWhereWithAggregatesInputSchema;




exports.DietScalarWhereWithAggregatesInputSchema = DietScalarWhereWithAggregatesInputSchema; exports.DietScalarWhereWithAggregatesInputSchema_default = DietScalarWhereWithAggregatesInputSchema_default;
//# sourceMappingURL=chunk-6YH3CNGO.cjs.map