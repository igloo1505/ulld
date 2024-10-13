"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/database/inputTypeSchemas/GoogleCalendarAuthSelectSchema.ts
var _zod = require('zod');
var GoogleCalendarAuthSelectSchema = _zod.z.object({
  id: _zod.z.boolean().optional(),
  auth: _zod.z.boolean().optional()
}).strict();
var GoogleCalendarAuthSelectSchema_default = GoogleCalendarAuthSelectSchema;



exports.GoogleCalendarAuthSelectSchema = GoogleCalendarAuthSelectSchema; exports.default = GoogleCalendarAuthSelectSchema_default;
//# sourceMappingURL=GoogleCalendarAuthSelectSchema.cjs.map