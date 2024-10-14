"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/database/inputTypeSchemas/GoogleCalendarAuthCreateManyInputSchema.ts
var _zod = require('zod');
var GoogleCalendarAuthCreateManyInputSchema = _zod.z.object({
  id: _zod.z.number().int().optional(),
  auth: _zod.z.string().optional().nullable()
}).strict();
var GoogleCalendarAuthCreateManyInputSchema_default = GoogleCalendarAuthCreateManyInputSchema;




exports.GoogleCalendarAuthCreateManyInputSchema = GoogleCalendarAuthCreateManyInputSchema; exports.GoogleCalendarAuthCreateManyInputSchema_default = GoogleCalendarAuthCreateManyInputSchema_default;
//# sourceMappingURL=chunk-7JBQ5F5H.cjs.map