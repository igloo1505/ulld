"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkHGLQEYTScjs = require('./chunk-HGLQEYTS.cjs');


var _chunk2V5AKF3Qcjs = require('./chunk-2V5AKF3Q.cjs');

// src/database/inputTypeSchemas/GoogleCalendarAuthWhereUniqueInputSchema.ts
var _zod = require('zod');
var GoogleCalendarAuthWhereUniqueInputSchema = _zod.z.object({
  id: _zod.z.number().int()
}).and(_zod.z.object({
  id: _zod.z.number().int().optional(),
  AND: _zod.z.union([_zod.z.lazy(() => _chunkHGLQEYTScjs.GoogleCalendarAuthWhereInputSchema), _zod.z.lazy(() => _chunkHGLQEYTScjs.GoogleCalendarAuthWhereInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => _chunkHGLQEYTScjs.GoogleCalendarAuthWhereInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => _chunkHGLQEYTScjs.GoogleCalendarAuthWhereInputSchema), _zod.z.lazy(() => _chunkHGLQEYTScjs.GoogleCalendarAuthWhereInputSchema).array()]).optional(),
  auth: _zod.z.union([_zod.z.lazy(() => _chunk2V5AKF3Qcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable()
}).strict());
var GoogleCalendarAuthWhereUniqueInputSchema_default = GoogleCalendarAuthWhereUniqueInputSchema;




exports.GoogleCalendarAuthWhereUniqueInputSchema = GoogleCalendarAuthWhereUniqueInputSchema; exports.GoogleCalendarAuthWhereUniqueInputSchema_default = GoogleCalendarAuthWhereUniqueInputSchema_default;
//# sourceMappingURL=chunk-6UMP7M7O.cjs.map