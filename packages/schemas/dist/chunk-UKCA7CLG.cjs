"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk7JBQ5F5Hcjs = require('./chunk-7JBQ5F5H.cjs');

// src/database/outputTypeSchemas/GoogleCalendarAuthCreateManyArgsSchema.ts
var _zod = require('zod');
var GoogleCalendarAuthCreateManyArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunk7JBQ5F5Hcjs.GoogleCalendarAuthCreateManyInputSchema, _chunk7JBQ5F5Hcjs.GoogleCalendarAuthCreateManyInputSchema.array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var GoogleCalendarAuthCreateManyArgsSchema_default = GoogleCalendarAuthCreateManyArgsSchema;




exports.GoogleCalendarAuthCreateManyArgsSchema = GoogleCalendarAuthCreateManyArgsSchema; exports.GoogleCalendarAuthCreateManyArgsSchema_default = GoogleCalendarAuthCreateManyArgsSchema_default;
//# sourceMappingURL=chunk-UKCA7CLG.cjs.map