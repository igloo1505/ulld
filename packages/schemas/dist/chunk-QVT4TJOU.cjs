"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkSPB4GIGPcjs = require('./chunk-SPB4GIGP.cjs');

// src/database/outputTypeSchemas/GoogleCalendarAuthCreateManyAndReturnArgsSchema.ts
var _zod = require('zod');
var GoogleCalendarAuthCreateManyAndReturnArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkSPB4GIGPcjs.GoogleCalendarAuthCreateManyInputSchema, _chunkSPB4GIGPcjs.GoogleCalendarAuthCreateManyInputSchema.array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var GoogleCalendarAuthCreateManyAndReturnArgsSchema_default = GoogleCalendarAuthCreateManyAndReturnArgsSchema;




exports.GoogleCalendarAuthCreateManyAndReturnArgsSchema = GoogleCalendarAuthCreateManyAndReturnArgsSchema; exports.GoogleCalendarAuthCreateManyAndReturnArgsSchema_default = GoogleCalendarAuthCreateManyAndReturnArgsSchema_default;
//# sourceMappingURL=chunk-QVT4TJOU.cjs.map