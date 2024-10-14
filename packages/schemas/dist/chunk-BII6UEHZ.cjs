"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk54BATBBKcjs = require('./chunk-54BATBBK.cjs');


var _chunk2V5AKF3Qcjs = require('./chunk-2V5AKF3Q.cjs');


var _chunkE7BN4QPAcjs = require('./chunk-E7BN4QPA.cjs');


var _chunk2L755XMWcjs = require('./chunk-2L755XMW.cjs');

// src/database/inputTypeSchemas/TimePeriodScalarWhereInputSchema.ts
var _zod = require('zod');
var TimePeriodScalarWhereInputSchema = _zod.z.object({
  AND: _zod.z.union([_zod.z.lazy(() => TimePeriodScalarWhereInputSchema), _zod.z.lazy(() => TimePeriodScalarWhereInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => TimePeriodScalarWhereInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => TimePeriodScalarWhereInputSchema), _zod.z.lazy(() => TimePeriodScalarWhereInputSchema).array()]).optional(),
  id: _zod.z.union([_zod.z.lazy(() => _chunkE7BN4QPAcjs.IntFilterSchema), _zod.z.number()]).optional(),
  start: _zod.z.union([_zod.z.lazy(() => _chunk2L755XMWcjs.DateTimeFilterSchema), _zod.z.coerce.date()]).optional(),
  end: _zod.z.union([_zod.z.lazy(() => _chunk54BATBBKcjs.DateTimeNullableFilterSchema), _zod.z.coerce.date()]).optional().nullable(),
  dietId: _zod.z.union([_zod.z.lazy(() => _chunk2V5AKF3Qcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable()
}).strict();
var TimePeriodScalarWhereInputSchema_default = TimePeriodScalarWhereInputSchema;




exports.TimePeriodScalarWhereInputSchema = TimePeriodScalarWhereInputSchema; exports.TimePeriodScalarWhereInputSchema_default = TimePeriodScalarWhereInputSchema_default;
//# sourceMappingURL=chunk-BII6UEHZ.cjs.map