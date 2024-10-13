"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/database/modelSchema/GoogleCalendarAuthSchema.ts
var _zod = require('zod');
var GoogleCalendarAuthSchema = _zod.z.object({
  id: _zod.z.number().int(),
  auth: _zod.z.string().nullable()
});
var GoogleCalendarAuthPartialSchema = GoogleCalendarAuthSchema.partial();
var GoogleCalendarAuthSchema_default = GoogleCalendarAuthSchema;





exports.GoogleCalendarAuthSchema = GoogleCalendarAuthSchema; exports.GoogleCalendarAuthPartialSchema = GoogleCalendarAuthPartialSchema; exports.GoogleCalendarAuthSchema_default = GoogleCalendarAuthSchema_default;
//# sourceMappingURL=chunk-2VPGNQAK.cjs.map