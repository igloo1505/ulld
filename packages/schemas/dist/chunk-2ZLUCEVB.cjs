"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/database/inputTypeSchemas/GoogleCalendarAuthCreateInputSchema.ts
var _zod = require('zod');
var GoogleCalendarAuthCreateInputSchema = _zod.z.object({
  id: _zod.z.number().int().optional(),
  auth: _zod.z.string().optional().nullable()
}).strict();
var GoogleCalendarAuthCreateInputSchema_default = GoogleCalendarAuthCreateInputSchema;




exports.GoogleCalendarAuthCreateInputSchema = GoogleCalendarAuthCreateInputSchema; exports.GoogleCalendarAuthCreateInputSchema_default = GoogleCalendarAuthCreateInputSchema_default;
//# sourceMappingURL=chunk-2ZLUCEVB.cjs.map