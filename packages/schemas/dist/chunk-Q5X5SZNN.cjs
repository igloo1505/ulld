"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkUYESGAP6cjs = require('./chunk-UYESGAP6.cjs');


var _chunkUO5TR2SFcjs = require('./chunk-UO5TR2SF.cjs');

// src/database/outputTypeSchemas/GoogleCalendarAuthCreateArgsSchema.ts
var _zod = require('zod');
var GoogleCalendarAuthSelectSchema = _zod.z.object({
  id: _zod.z.boolean().optional(),
  auth: _zod.z.boolean().optional()
}).strict();
var GoogleCalendarAuthCreateArgsSchema = _zod.z.object({
  select: GoogleCalendarAuthSelectSchema.optional(),
  data: _zod.z.union([_chunkUYESGAP6cjs.GoogleCalendarAuthCreateInputSchema, _chunkUO5TR2SFcjs.GoogleCalendarAuthUncheckedCreateInputSchema]).optional()
}).strict();
var GoogleCalendarAuthCreateArgsSchema_default = GoogleCalendarAuthCreateArgsSchema;





exports.GoogleCalendarAuthSelectSchema = GoogleCalendarAuthSelectSchema; exports.GoogleCalendarAuthCreateArgsSchema = GoogleCalendarAuthCreateArgsSchema; exports.GoogleCalendarAuthCreateArgsSchema_default = GoogleCalendarAuthCreateArgsSchema_default;
//# sourceMappingURL=chunk-Q5X5SZNN.cjs.map