"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkQY4M5Y6Kcjs = require('./chunk-QY4M5Y6K.cjs');


var _chunkZIMNRZU5cjs = require('./chunk-ZIMNRZU5.cjs');


var _chunk6UMP7M7Ocjs = require('./chunk-6UMP7M7O.cjs');

// src/database/outputTypeSchemas/GoogleCalendarAuthUpdateArgsSchema.ts
var _zod = require('zod');
var GoogleCalendarAuthSelectSchema = _zod.z.object({
  id: _zod.z.boolean().optional(),
  auth: _zod.z.boolean().optional()
}).strict();
var GoogleCalendarAuthUpdateArgsSchema = _zod.z.object({
  select: GoogleCalendarAuthSelectSchema.optional(),
  data: _zod.z.union([_chunkQY4M5Y6Kcjs.GoogleCalendarAuthUpdateInputSchema, _chunkZIMNRZU5cjs.GoogleCalendarAuthUncheckedUpdateInputSchema]),
  where: _chunk6UMP7M7Ocjs.GoogleCalendarAuthWhereUniqueInputSchema
}).strict();
var GoogleCalendarAuthUpdateArgsSchema_default = GoogleCalendarAuthUpdateArgsSchema;





exports.GoogleCalendarAuthSelectSchema = GoogleCalendarAuthSelectSchema; exports.GoogleCalendarAuthUpdateArgsSchema = GoogleCalendarAuthUpdateArgsSchema; exports.GoogleCalendarAuthUpdateArgsSchema_default = GoogleCalendarAuthUpdateArgsSchema_default;
//# sourceMappingURL=chunk-45H7H42I.cjs.map