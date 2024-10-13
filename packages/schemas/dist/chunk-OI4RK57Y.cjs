"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkSPB4GIGPcjs = require('./chunk-SPB4GIGP.cjs');

// src/database/outputTypeSchemas/GoogleCalendarAuthCreateManyArgsSchema.ts
var _zod = require('zod');
var GoogleCalendarAuthCreateManyArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkSPB4GIGPcjs.GoogleCalendarAuthCreateManyInputSchema, _chunkSPB4GIGPcjs.GoogleCalendarAuthCreateManyInputSchema.array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var GoogleCalendarAuthCreateManyArgsSchema_default = GoogleCalendarAuthCreateManyArgsSchema;




exports.GoogleCalendarAuthCreateManyArgsSchema = GoogleCalendarAuthCreateManyArgsSchema; exports.GoogleCalendarAuthCreateManyArgsSchema_default = GoogleCalendarAuthCreateManyArgsSchema_default;
//# sourceMappingURL=chunk-OI4RK57Y.cjs.map