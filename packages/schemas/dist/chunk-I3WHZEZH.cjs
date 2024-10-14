"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkT7LSCSLIcjs = require('./chunk-T7LSCSLI.cjs');


var _chunkLNEEBWJKcjs = require('./chunk-LNEEBWJK.cjs');


var _chunk6UMP7M7Ocjs = require('./chunk-6UMP7M7O.cjs');


var _chunkHGLQEYTScjs = require('./chunk-HGLQEYTS.cjs');

// src/database/outputTypeSchemas/GoogleCalendarAuthFindFirstOrThrowArgsSchema.ts
var _zod = require('zod');
var GoogleCalendarAuthSelectSchema = _zod.z.object({
  id: _zod.z.boolean().optional(),
  auth: _zod.z.boolean().optional()
}).strict();
var GoogleCalendarAuthFindFirstOrThrowArgsSchema = _zod.z.object({
  select: GoogleCalendarAuthSelectSchema.optional(),
  where: _chunkHGLQEYTScjs.GoogleCalendarAuthWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkT7LSCSLIcjs.GoogleCalendarAuthOrderByWithRelationInputSchema.array(), _chunkT7LSCSLIcjs.GoogleCalendarAuthOrderByWithRelationInputSchema]).optional(),
  cursor: _chunk6UMP7M7Ocjs.GoogleCalendarAuthWhereUniqueInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional(),
  distinct: _zod.z.union([_chunkLNEEBWJKcjs.GoogleCalendarAuthScalarFieldEnumSchema, _chunkLNEEBWJKcjs.GoogleCalendarAuthScalarFieldEnumSchema.array()]).optional()
}).strict();
var GoogleCalendarAuthFindFirstOrThrowArgsSchema_default = GoogleCalendarAuthFindFirstOrThrowArgsSchema;





exports.GoogleCalendarAuthSelectSchema = GoogleCalendarAuthSelectSchema; exports.GoogleCalendarAuthFindFirstOrThrowArgsSchema = GoogleCalendarAuthFindFirstOrThrowArgsSchema; exports.GoogleCalendarAuthFindFirstOrThrowArgsSchema_default = GoogleCalendarAuthFindFirstOrThrowArgsSchema_default;
//# sourceMappingURL=chunk-I3WHZEZH.cjs.map