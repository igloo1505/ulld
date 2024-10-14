"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk6UMP7M7Ocjs = require('./chunk-6UMP7M7O.cjs');

// src/database/outputTypeSchemas/GoogleCalendarAuthDeleteArgsSchema.ts
var _zod = require('zod');
var GoogleCalendarAuthSelectSchema = _zod.z.object({
  id: _zod.z.boolean().optional(),
  auth: _zod.z.boolean().optional()
}).strict();
var GoogleCalendarAuthDeleteArgsSchema = _zod.z.object({
  select: GoogleCalendarAuthSelectSchema.optional(),
  where: _chunk6UMP7M7Ocjs.GoogleCalendarAuthWhereUniqueInputSchema
}).strict();
var GoogleCalendarAuthDeleteArgsSchema_default = GoogleCalendarAuthDeleteArgsSchema;





exports.GoogleCalendarAuthSelectSchema = GoogleCalendarAuthSelectSchema; exports.GoogleCalendarAuthDeleteArgsSchema = GoogleCalendarAuthDeleteArgsSchema; exports.GoogleCalendarAuthDeleteArgsSchema_default = GoogleCalendarAuthDeleteArgsSchema_default;
//# sourceMappingURL=chunk-EKMYBA33.cjs.map