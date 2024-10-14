"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkESLTZPEBcjs = require('./chunk-ESLTZPEB.cjs');

// src/database/outputTypeSchemas/TimePeriodCreateManyAndReturnArgsSchema.ts
var _zod = require('zod');
var TimePeriodCreateManyAndReturnArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkESLTZPEBcjs.TimePeriodCreateManyInputSchema, _chunkESLTZPEBcjs.TimePeriodCreateManyInputSchema.array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var TimePeriodCreateManyAndReturnArgsSchema_default = TimePeriodCreateManyAndReturnArgsSchema;




exports.TimePeriodCreateManyAndReturnArgsSchema = TimePeriodCreateManyAndReturnArgsSchema; exports.TimePeriodCreateManyAndReturnArgsSchema_default = TimePeriodCreateManyAndReturnArgsSchema_default;
//# sourceMappingURL=chunk-OQBUOYSK.cjs.map