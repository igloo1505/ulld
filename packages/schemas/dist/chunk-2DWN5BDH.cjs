"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk6UMP7M7Ocjs = require('./chunk-6UMP7M7O.cjs');

// src/database/outputTypeSchemas/GoogleCalendarAuthFindUniqueOrThrowArgsSchema.ts
var _zod = require('zod');
var GoogleCalendarAuthSelectSchema = _zod.z.object({
  id: _zod.z.boolean().optional(),
  auth: _zod.z.boolean().optional()
}).strict();
var GoogleCalendarAuthFindUniqueOrThrowArgsSchema = _zod.z.object({
  select: GoogleCalendarAuthSelectSchema.optional(),
  where: _chunk6UMP7M7Ocjs.GoogleCalendarAuthWhereUniqueInputSchema
}).strict();
var GoogleCalendarAuthFindUniqueOrThrowArgsSchema_default = GoogleCalendarAuthFindUniqueOrThrowArgsSchema;





exports.GoogleCalendarAuthSelectSchema = GoogleCalendarAuthSelectSchema; exports.GoogleCalendarAuthFindUniqueOrThrowArgsSchema = GoogleCalendarAuthFindUniqueOrThrowArgsSchema; exports.GoogleCalendarAuthFindUniqueOrThrowArgsSchema_default = GoogleCalendarAuthFindUniqueOrThrowArgsSchema_default;
//# sourceMappingURL=chunk-2DWN5BDH.cjs.map