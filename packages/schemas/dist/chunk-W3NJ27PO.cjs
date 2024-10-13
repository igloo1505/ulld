"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk4NEUKRDUcjs = require('./chunk-4NEUKRDU.cjs');


var _chunkWQNXU6XAcjs = require('./chunk-WQNXU6XA.cjs');


var _chunkDMG3BD7Ecjs = require('./chunk-DMG3BD7E.cjs');


var _chunkFR5PAJGJcjs = require('./chunk-FR5PAJGJ.cjs');

// src/database/inputTypeSchemas/TimePeriodScalarWhereInputSchema.ts
var _zod = require('zod');
var TimePeriodScalarWhereInputSchema = _zod.z.object({
  AND: _zod.z.union([_zod.z.lazy(() => TimePeriodScalarWhereInputSchema), _zod.z.lazy(() => TimePeriodScalarWhereInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => TimePeriodScalarWhereInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => TimePeriodScalarWhereInputSchema), _zod.z.lazy(() => TimePeriodScalarWhereInputSchema).array()]).optional(),
  id: _zod.z.union([_zod.z.lazy(() => _chunkDMG3BD7Ecjs.IntFilterSchema), _zod.z.number()]).optional(),
  start: _zod.z.union([_zod.z.lazy(() => _chunkFR5PAJGJcjs.DateTimeFilterSchema), _zod.z.coerce.date()]).optional(),
  end: _zod.z.union([_zod.z.lazy(() => _chunk4NEUKRDUcjs.DateTimeNullableFilterSchema), _zod.z.coerce.date()]).optional().nullable(),
  dietId: _zod.z.union([_zod.z.lazy(() => _chunkWQNXU6XAcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable()
}).strict();
var TimePeriodScalarWhereInputSchema_default = TimePeriodScalarWhereInputSchema;




exports.TimePeriodScalarWhereInputSchema = TimePeriodScalarWhereInputSchema; exports.TimePeriodScalarWhereInputSchema_default = TimePeriodScalarWhereInputSchema_default;
//# sourceMappingURL=chunk-W3NJ27PO.cjs.map