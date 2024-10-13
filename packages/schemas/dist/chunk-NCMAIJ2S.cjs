"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkWQNXU6XAcjs = require('./chunk-WQNXU6XA.cjs');


var _chunkDMG3BD7Ecjs = require('./chunk-DMG3BD7E.cjs');

// src/database/inputTypeSchemas/GoogleCalendarAuthWhereInputSchema.ts
var _zod = require('zod');
var GoogleCalendarAuthWhereInputSchema = _zod.z.object({
  AND: _zod.z.union([_zod.z.lazy(() => GoogleCalendarAuthWhereInputSchema), _zod.z.lazy(() => GoogleCalendarAuthWhereInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => GoogleCalendarAuthWhereInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => GoogleCalendarAuthWhereInputSchema), _zod.z.lazy(() => GoogleCalendarAuthWhereInputSchema).array()]).optional(),
  id: _zod.z.union([_zod.z.lazy(() => _chunkDMG3BD7Ecjs.IntFilterSchema), _zod.z.number()]).optional(),
  auth: _zod.z.union([_zod.z.lazy(() => _chunkWQNXU6XAcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable()
}).strict();
var GoogleCalendarAuthWhereInputSchema_default = GoogleCalendarAuthWhereInputSchema;




exports.GoogleCalendarAuthWhereInputSchema = GoogleCalendarAuthWhereInputSchema; exports.GoogleCalendarAuthWhereInputSchema_default = GoogleCalendarAuthWhereInputSchema_default;
//# sourceMappingURL=chunk-NCMAIJ2S.cjs.map