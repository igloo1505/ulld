"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkFP5ZUKCXcjs = require('./chunk-FP5ZUKCX.cjs');

// src/database/outputTypeSchemas/GoogleCalendarAuthFindUniqueArgsSchema.ts
var _zod = require('zod');
var GoogleCalendarAuthSelectSchema = _zod.z.object({
  id: _zod.z.boolean().optional(),
  auth: _zod.z.boolean().optional()
}).strict();
var GoogleCalendarAuthFindUniqueArgsSchema = _zod.z.object({
  select: GoogleCalendarAuthSelectSchema.optional(),
  where: _chunkFP5ZUKCXcjs.GoogleCalendarAuthWhereUniqueInputSchema
}).strict();
var GoogleCalendarAuthFindUniqueArgsSchema_default = GoogleCalendarAuthFindUniqueArgsSchema;





exports.GoogleCalendarAuthSelectSchema = GoogleCalendarAuthSelectSchema; exports.GoogleCalendarAuthFindUniqueArgsSchema = GoogleCalendarAuthFindUniqueArgsSchema; exports.GoogleCalendarAuthFindUniqueArgsSchema_default = GoogleCalendarAuthFindUniqueArgsSchema_default;
//# sourceMappingURL=chunk-5HEZIF7A.cjs.map