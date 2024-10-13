"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkFP5ZUKCXcjs = require('./chunk-FP5ZUKCX.cjs');

// src/database/outputTypeSchemas/GoogleCalendarAuthDeleteArgsSchema.ts
var _zod = require('zod');
var GoogleCalendarAuthSelectSchema = _zod.z.object({
  id: _zod.z.boolean().optional(),
  auth: _zod.z.boolean().optional()
}).strict();
var GoogleCalendarAuthDeleteArgsSchema = _zod.z.object({
  select: GoogleCalendarAuthSelectSchema.optional(),
  where: _chunkFP5ZUKCXcjs.GoogleCalendarAuthWhereUniqueInputSchema
}).strict();
var GoogleCalendarAuthDeleteArgsSchema_default = GoogleCalendarAuthDeleteArgsSchema;





exports.GoogleCalendarAuthSelectSchema = GoogleCalendarAuthSelectSchema; exports.GoogleCalendarAuthDeleteArgsSchema = GoogleCalendarAuthDeleteArgsSchema; exports.GoogleCalendarAuthDeleteArgsSchema_default = GoogleCalendarAuthDeleteArgsSchema_default;
//# sourceMappingURL=chunk-XCDZORJB.cjs.map