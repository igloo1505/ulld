"use strict";Object.defineProperty(exports, "__esModule", {value: true});




var _chunk4QJOIHDOcjs = require('./chunk-4QJOIHDO.cjs');


var _chunkKPYBLHSBcjs = require('./chunk-KPYBLHSB.cjs');


var _chunkQEE4LDK6cjs = require('./chunk-QEE4LDK6.cjs');


var _chunkLQQKOQFTcjs = require('./chunk-LQQKOQFT.cjs');


var _chunk7OHHSSMZcjs = require('./chunk-7OHHSSMZ.cjs');


var _chunkEPJIZOD5cjs = require('./chunk-EPJIZOD5.cjs');


var _chunkWQNXU6XAcjs = require('./chunk-WQNXU6XA.cjs');


var _chunkFR5PAJGJcjs = require('./chunk-FR5PAJGJ.cjs');

// src/database/inputTypeSchemas/DietWhereUniqueInputSchema.ts
var _zod = require('zod');
var DietWhereUniqueInputSchema = _zod.z.object({
  name: _zod.z.string()
}).and(_zod.z.object({
  name: _zod.z.string().optional(),
  AND: _zod.z.union([_zod.z.lazy(() => _chunk4QJOIHDOcjs.DietWhereInputSchema), _zod.z.lazy(() => _chunk4QJOIHDOcjs.DietWhereInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => _chunk4QJOIHDOcjs.DietWhereInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => _chunk4QJOIHDOcjs.DietWhereInputSchema), _zod.z.lazy(() => _chunk4QJOIHDOcjs.DietWhereInputSchema).array()]).optional(),
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
  lastUpdate: _zod.z.union([_zod.z.lazy(() => _chunkFR5PAJGJcjs.DateTimeFilterSchema), _zod.z.coerce.date()]).optional(),
  items: _zod.z.lazy(() => _chunk4QJOIHDOcjs.DietaryItemListRelationFilterSchema).optional(),
  periodsFollowed: _zod.z.lazy(() => _chunk4QJOIHDOcjs.TimePeriodListRelationFilterSchema).optional(),
  HealthReport: _zod.z.lazy(() => _chunk4QJOIHDOcjs.HealthReportListRelationFilterSchema).optional()
}).strict());
var DietWhereUniqueInputSchema_default = DietWhereUniqueInputSchema;




exports.DietWhereUniqueInputSchema = DietWhereUniqueInputSchema; exports.DietWhereUniqueInputSchema_default = DietWhereUniqueInputSchema_default;
//# sourceMappingURL=chunk-MR2A4XZP.cjs.map