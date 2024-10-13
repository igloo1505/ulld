"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/database/inputTypeSchemas/GoogleCalendarAuthUncheckedCreateInputSchema.ts
var _zod = require('zod');
var GoogleCalendarAuthUncheckedCreateInputSchema = _zod.z.object({
  id: _zod.z.number().int().optional(),
  auth: _zod.z.string().optional().nullable()
}).strict();
var GoogleCalendarAuthUncheckedCreateInputSchema_default = GoogleCalendarAuthUncheckedCreateInputSchema;




exports.GoogleCalendarAuthUncheckedCreateInputSchema = GoogleCalendarAuthUncheckedCreateInputSchema; exports.GoogleCalendarAuthUncheckedCreateInputSchema_default = GoogleCalendarAuthUncheckedCreateInputSchema_default;
//# sourceMappingURL=chunk-P2CXKTNO.cjs.map