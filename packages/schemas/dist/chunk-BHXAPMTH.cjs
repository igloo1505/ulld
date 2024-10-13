"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkKPYBLHSBcjs = require('./chunk-KPYBLHSB.cjs');


var _chunkQEE4LDK6cjs = require('./chunk-QEE4LDK6.cjs');


var _chunkLQQKOQFTcjs = require('./chunk-LQQKOQFT.cjs');


var _chunk7OHHSSMZcjs = require('./chunk-7OHHSSMZ.cjs');


var _chunkEPJIZOD5cjs = require('./chunk-EPJIZOD5.cjs');


var _chunkWQNXU6XAcjs = require('./chunk-WQNXU6XA.cjs');


var _chunkFR5PAJGJcjs = require('./chunk-FR5PAJGJ.cjs');


var _chunk7NJCCFRTcjs = require('./chunk-7NJCCFRT.cjs');

// src/database/inputTypeSchemas/DietScalarWhereInputSchema.ts
var _zod = require('zod');
var DietScalarWhereInputSchema = _zod.z.object({
  AND: _zod.z.union([_zod.z.lazy(() => DietScalarWhereInputSchema), _zod.z.lazy(() => DietScalarWhereInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => DietScalarWhereInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => DietScalarWhereInputSchema), _zod.z.lazy(() => DietScalarWhereInputSchema).array()]).optional(),
  name: _zod.z.union([_zod.z.lazy(() => _chunk7NJCCFRTcjs.StringFilterSchema), _zod.z.string()]).optional(),
  summary: _zod.z.union([_zod.z.lazy(() => _chunkWQNXU6XAcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  activelyFollowing: _zod.z.union([_zod.z.lazy(() => _chunkEPJIZOD5cjs.BoolFilterSchema), _zod.z.boolean()]).optional(),
  gf: _zod.z.union([_zod.z.lazy(() => _chunkQEE4LDK6cjs.EnumTERTIARY_TOGGLEFilterSchema), _zod.z.lazy(() => _chunkLQQKOQFTcjs.TERTIARY_TOGGLESchema)]).optional(),
  vegan: _zod.z.union([_zod.z.lazy(() => _chunkEPJIZOD5cjs.BoolFilterSchema), _zod.z.boolean()]).optional(),
  pescatarian: _zod.z.union([_zod.z.lazy(() => _chunkEPJIZOD5cjs.BoolFilterSchema), _zod.z.boolean()]).optional(),
  vegetarian: _zod.z.union([_zod.z.lazy(() => _chunkEPJIZOD5cjs.BoolFilterSchema), _zod.z.boolean()]).optional(),
  fasting: _zod.z.union([_zod.z.lazy(() => _chunkQEE4LDK6cjs.EnumTERTIARY_TOGGLEFilterSchema), _zod.z.lazy(() => _chunkLQQKOQFTcjs.TERTIARY_TOGGLESchema)]).optional(),
  cardioTraining: _zod.z.union([_zod.z.lazy(() => _chunkQEE4LDK6cjs.EnumTERTIARY_TOGGLEFilterSchema), _zod.z.lazy(() => _chunkLQQKOQFTcjs.TERTIARY_TOGGLESchema)]).optional(),
  weightTraining: _zod.z.union([_zod.z.lazy(() => _chunkQEE4LDK6cjs.EnumTERTIARY_TOGGLEFilterSchema), _zod.z.lazy(() => _chunkLQQKOQFTcjs.TERTIARY_TOGGLESchema)]).optional(),
  carb: _zod.z.union([_zod.z.lazy(() => _chunk7OHHSSMZcjs.FloatNullableFilterSchema), _zod.z.number()]).optional().nullable(),
  pro: _zod.z.union([_zod.z.lazy(() => _chunk7OHHSSMZcjs.FloatNullableFilterSchema), _zod.z.number()]).optional().nullable(),
  fat: _zod.z.union([_zod.z.lazy(() => _chunk7OHHSSMZcjs.FloatNullableFilterSchema), _zod.z.number()]).optional().nullable(),
  goals: _zod.z.lazy(() => _chunkKPYBLHSBcjs.EnumDIETARY_GOALNullableListFilterSchema).optional(),
  created: _zod.z.union([_zod.z.lazy(() => _chunkFR5PAJGJcjs.DateTimeFilterSchema), _zod.z.coerce.date()]).optional(),
  lastUpdate: _zod.z.union([_zod.z.lazy(() => _chunkFR5PAJGJcjs.DateTimeFilterSchema), _zod.z.coerce.date()]).optional()
}).strict();
var DietScalarWhereInputSchema_default = DietScalarWhereInputSchema;




exports.DietScalarWhereInputSchema = DietScalarWhereInputSchema; exports.DietScalarWhereInputSchema_default = DietScalarWhereInputSchema_default;
//# sourceMappingURL=chunk-BHXAPMTH.cjs.map