"use strict";Object.defineProperty(exports, "__esModule", {value: true});



var _chunk4QJOIHDOcjs = require('./chunk-4QJOIHDO.cjs');


var _chunk4NEUKRDUcjs = require('./chunk-4NEUKRDU.cjs');


var _chunkWQNXU6XAcjs = require('./chunk-WQNXU6XA.cjs');


var _chunkFR5PAJGJcjs = require('./chunk-FR5PAJGJ.cjs');

// src/database/inputTypeSchemas/TimePeriodWhereUniqueInputSchema.ts
var _zod = require('zod');
var TimePeriodWhereUniqueInputSchema = _zod.z.object({
  id: _zod.z.number().int()
}).and(_zod.z.object({
  id: _zod.z.number().int().optional(),
  AND: _zod.z.union([_zod.z.lazy(() => _chunk4QJOIHDOcjs.TimePeriodWhereInputSchema), _zod.z.lazy(() => _chunk4QJOIHDOcjs.TimePeriodWhereInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => _chunk4QJOIHDOcjs.TimePeriodWhereInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => _chunk4QJOIHDOcjs.TimePeriodWhereInputSchema), _zod.z.lazy(() => _chunk4QJOIHDOcjs.TimePeriodWhereInputSchema).array()]).optional(),
  start: _zod.z.union([_zod.z.lazy(() => _chunkFR5PAJGJcjs.DateTimeFilterSchema), _zod.z.coerce.date()]).optional(),
  end: _zod.z.union([_zod.z.lazy(() => _chunk4NEUKRDUcjs.DateTimeNullableFilterSchema), _zod.z.coerce.date()]).optional().nullable(),
  dietId: _zod.z.union([_zod.z.lazy(() => _chunkWQNXU6XAcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  Diet: _zod.z.union([_zod.z.lazy(() => _chunk4QJOIHDOcjs.DietNullableRelationFilterSchema), _zod.z.lazy(() => _chunk4QJOIHDOcjs.DietWhereInputSchema)]).optional().nullable()
}).strict());
var TimePeriodWhereUniqueInputSchema_default = TimePeriodWhereUniqueInputSchema;




exports.TimePeriodWhereUniqueInputSchema = TimePeriodWhereUniqueInputSchema; exports.TimePeriodWhereUniqueInputSchema_default = TimePeriodWhereUniqueInputSchema_default;
//# sourceMappingURL=chunk-N4OCLFS3.cjs.map