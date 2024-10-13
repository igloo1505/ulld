"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkTGC76B2Zcjs = require('./chunk-TGC76B2Z.cjs');


var _chunkPRQLXWPVcjs = require('./chunk-PRQLXWPV.cjs');


var _chunkFP5ZUKCXcjs = require('./chunk-FP5ZUKCX.cjs');

// src/database/outputTypeSchemas/GoogleCalendarAuthUpdateArgsSchema.ts
var _zod = require('zod');
var GoogleCalendarAuthSelectSchema = _zod.z.object({
  id: _zod.z.boolean().optional(),
  auth: _zod.z.boolean().optional()
}).strict();
var GoogleCalendarAuthUpdateArgsSchema = _zod.z.object({
  select: GoogleCalendarAuthSelectSchema.optional(),
  data: _zod.z.union([_chunkTGC76B2Zcjs.GoogleCalendarAuthUpdateInputSchema, _chunkPRQLXWPVcjs.GoogleCalendarAuthUncheckedUpdateInputSchema]),
  where: _chunkFP5ZUKCXcjs.GoogleCalendarAuthWhereUniqueInputSchema
}).strict();
var GoogleCalendarAuthUpdateArgsSchema_default = GoogleCalendarAuthUpdateArgsSchema;





exports.GoogleCalendarAuthSelectSchema = GoogleCalendarAuthSelectSchema; exports.GoogleCalendarAuthUpdateArgsSchema = GoogleCalendarAuthUpdateArgsSchema; exports.GoogleCalendarAuthUpdateArgsSchema_default = GoogleCalendarAuthUpdateArgsSchema_default;
//# sourceMappingURL=chunk-72MOSZWG.cjs.map