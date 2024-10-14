"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkESLTZPEBcjs = require('./chunk-ESLTZPEB.cjs');

// src/database/outputTypeSchemas/TimePeriodCreateManyArgsSchema.ts
var _zod = require('zod');
var TimePeriodCreateManyArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkESLTZPEBcjs.TimePeriodCreateManyInputSchema, _chunkESLTZPEBcjs.TimePeriodCreateManyInputSchema.array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var TimePeriodCreateManyArgsSchema_default = TimePeriodCreateManyArgsSchema;




exports.TimePeriodCreateManyArgsSchema = TimePeriodCreateManyArgsSchema; exports.TimePeriodCreateManyArgsSchema_default = TimePeriodCreateManyArgsSchema_default;
//# sourceMappingURL=chunk-RSV447KK.cjs.map