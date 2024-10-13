"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkNCMAIJ2Scjs = require('./chunk-NCMAIJ2S.cjs');


var _chunkWQNXU6XAcjs = require('./chunk-WQNXU6XA.cjs');

// src/database/inputTypeSchemas/GoogleCalendarAuthWhereUniqueInputSchema.ts
var _zod = require('zod');
var GoogleCalendarAuthWhereUniqueInputSchema = _zod.z.object({
  id: _zod.z.number().int()
}).and(_zod.z.object({
  id: _zod.z.number().int().optional(),
  AND: _zod.z.union([_zod.z.lazy(() => _chunkNCMAIJ2Scjs.GoogleCalendarAuthWhereInputSchema), _zod.z.lazy(() => _chunkNCMAIJ2Scjs.GoogleCalendarAuthWhereInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => _chunkNCMAIJ2Scjs.GoogleCalendarAuthWhereInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => _chunkNCMAIJ2Scjs.GoogleCalendarAuthWhereInputSchema), _zod.z.lazy(() => _chunkNCMAIJ2Scjs.GoogleCalendarAuthWhereInputSchema).array()]).optional(),
  auth: _zod.z.union([_zod.z.lazy(() => _chunkWQNXU6XAcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable()
}).strict());
var GoogleCalendarAuthWhereUniqueInputSchema_default = GoogleCalendarAuthWhereUniqueInputSchema;




exports.GoogleCalendarAuthWhereUniqueInputSchema = GoogleCalendarAuthWhereUniqueInputSchema; exports.GoogleCalendarAuthWhereUniqueInputSchema_default = GoogleCalendarAuthWhereUniqueInputSchema_default;
//# sourceMappingURL=chunk-FP5ZUKCX.cjs.map