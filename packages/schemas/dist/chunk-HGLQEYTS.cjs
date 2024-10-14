"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk2V5AKF3Qcjs = require('./chunk-2V5AKF3Q.cjs');


var _chunkE7BN4QPAcjs = require('./chunk-E7BN4QPA.cjs');

// src/database/inputTypeSchemas/GoogleCalendarAuthWhereInputSchema.ts
var _zod = require('zod');
var GoogleCalendarAuthWhereInputSchema = _zod.z.object({
  AND: _zod.z.union([_zod.z.lazy(() => GoogleCalendarAuthWhereInputSchema), _zod.z.lazy(() => GoogleCalendarAuthWhereInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => GoogleCalendarAuthWhereInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => GoogleCalendarAuthWhereInputSchema), _zod.z.lazy(() => GoogleCalendarAuthWhereInputSchema).array()]).optional(),
  id: _zod.z.union([_zod.z.lazy(() => _chunkE7BN4QPAcjs.IntFilterSchema), _zod.z.number()]).optional(),
  auth: _zod.z.union([_zod.z.lazy(() => _chunk2V5AKF3Qcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable()
}).strict();
var GoogleCalendarAuthWhereInputSchema_default = GoogleCalendarAuthWhereInputSchema;




exports.GoogleCalendarAuthWhereInputSchema = GoogleCalendarAuthWhereInputSchema; exports.GoogleCalendarAuthWhereInputSchema_default = GoogleCalendarAuthWhereInputSchema_default;
//# sourceMappingURL=chunk-HGLQEYTS.cjs.map