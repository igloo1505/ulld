"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkWGLZE6Y2cjs = require('./chunk-WGLZE6Y2.cjs');

// src/database/outputTypeSchemas/TimePeriodCreateManyAndReturnArgsSchema.ts
var _zod = require('zod');
var TimePeriodCreateManyAndReturnArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkWGLZE6Y2cjs.TimePeriodCreateManyInputSchema, _chunkWGLZE6Y2cjs.TimePeriodCreateManyInputSchema.array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var TimePeriodCreateManyAndReturnArgsSchema_default = TimePeriodCreateManyAndReturnArgsSchema;




exports.TimePeriodCreateManyAndReturnArgsSchema = TimePeriodCreateManyAndReturnArgsSchema; exports.TimePeriodCreateManyAndReturnArgsSchema_default = TimePeriodCreateManyAndReturnArgsSchema_default;
//# sourceMappingURL=chunk-LD7SEAEO.cjs.map