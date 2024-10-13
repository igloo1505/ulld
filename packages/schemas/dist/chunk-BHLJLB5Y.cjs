"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkWGLZE6Y2cjs = require('./chunk-WGLZE6Y2.cjs');

// src/database/outputTypeSchemas/TimePeriodCreateManyArgsSchema.ts
var _zod = require('zod');
var TimePeriodCreateManyArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkWGLZE6Y2cjs.TimePeriodCreateManyInputSchema, _chunkWGLZE6Y2cjs.TimePeriodCreateManyInputSchema.array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var TimePeriodCreateManyArgsSchema_default = TimePeriodCreateManyArgsSchema;




exports.TimePeriodCreateManyArgsSchema = TimePeriodCreateManyArgsSchema; exports.TimePeriodCreateManyArgsSchema_default = TimePeriodCreateManyArgsSchema_default;
//# sourceMappingURL=chunk-BHLJLB5Y.cjs.map