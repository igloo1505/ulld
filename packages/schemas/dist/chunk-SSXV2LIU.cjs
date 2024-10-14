"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk7JBQ5F5Hcjs = require('./chunk-7JBQ5F5H.cjs');

// src/database/outputTypeSchemas/GoogleCalendarAuthCreateManyAndReturnArgsSchema.ts
var _zod = require('zod');
var GoogleCalendarAuthCreateManyAndReturnArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunk7JBQ5F5Hcjs.GoogleCalendarAuthCreateManyInputSchema, _chunk7JBQ5F5Hcjs.GoogleCalendarAuthCreateManyInputSchema.array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var GoogleCalendarAuthCreateManyAndReturnArgsSchema_default = GoogleCalendarAuthCreateManyAndReturnArgsSchema;




exports.GoogleCalendarAuthCreateManyAndReturnArgsSchema = GoogleCalendarAuthCreateManyAndReturnArgsSchema; exports.GoogleCalendarAuthCreateManyAndReturnArgsSchema_default = GoogleCalendarAuthCreateManyAndReturnArgsSchema_default;
//# sourceMappingURL=chunk-SSXV2LIU.cjs.map