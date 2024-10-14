"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkQKVEKAZ5cjs = require('./chunk-QKVEKAZ5.cjs');

// src/database/outputTypeSchemas/PracticeExamCreateManyArgsSchema.ts
var _zod = require('zod');
var PracticeExamCreateManyArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkQKVEKAZ5cjs.PracticeExamCreateManyInputSchema, _chunkQKVEKAZ5cjs.PracticeExamCreateManyInputSchema.array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var PracticeExamCreateManyArgsSchema_default = PracticeExamCreateManyArgsSchema;




exports.PracticeExamCreateManyArgsSchema = PracticeExamCreateManyArgsSchema; exports.PracticeExamCreateManyArgsSchema_default = PracticeExamCreateManyArgsSchema_default;
//# sourceMappingURL=chunk-Z34DAS7E.cjs.map