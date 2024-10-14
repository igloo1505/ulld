"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkQKVEKAZ5cjs = require('./chunk-QKVEKAZ5.cjs');

// src/database/outputTypeSchemas/PracticeExamCreateManyAndReturnArgsSchema.ts
var _zod = require('zod');
var PracticeExamCreateManyAndReturnArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkQKVEKAZ5cjs.PracticeExamCreateManyInputSchema, _chunkQKVEKAZ5cjs.PracticeExamCreateManyInputSchema.array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var PracticeExamCreateManyAndReturnArgsSchema_default = PracticeExamCreateManyAndReturnArgsSchema;




exports.PracticeExamCreateManyAndReturnArgsSchema = PracticeExamCreateManyAndReturnArgsSchema; exports.PracticeExamCreateManyAndReturnArgsSchema_default = PracticeExamCreateManyAndReturnArgsSchema_default;
//# sourceMappingURL=chunk-5V36EVDP.cjs.map