"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk2ZLUCEVBcjs = require('./chunk-2ZLUCEVB.cjs');


var _chunkP2CXKTNOcjs = require('./chunk-P2CXKTNO.cjs');

// src/database/outputTypeSchemas/GoogleCalendarAuthCreateArgsSchema.ts
var _zod = require('zod');
var GoogleCalendarAuthSelectSchema = _zod.z.object({
  id: _zod.z.boolean().optional(),
  auth: _zod.z.boolean().optional()
}).strict();
var GoogleCalendarAuthCreateArgsSchema = _zod.z.object({
  select: GoogleCalendarAuthSelectSchema.optional(),
  data: _zod.z.union([_chunk2ZLUCEVBcjs.GoogleCalendarAuthCreateInputSchema, _chunkP2CXKTNOcjs.GoogleCalendarAuthUncheckedCreateInputSchema]).optional()
}).strict();
var GoogleCalendarAuthCreateArgsSchema_default = GoogleCalendarAuthCreateArgsSchema;





exports.GoogleCalendarAuthSelectSchema = GoogleCalendarAuthSelectSchema; exports.GoogleCalendarAuthCreateArgsSchema = GoogleCalendarAuthCreateArgsSchema; exports.GoogleCalendarAuthCreateArgsSchema_default = GoogleCalendarAuthCreateArgsSchema_default;
//# sourceMappingURL=chunk-43BYQDBE.cjs.map