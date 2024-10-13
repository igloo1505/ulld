"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkSOVPXMFAcjs = require('./chunk-SOVPXMFA.cjs');

// src/database/outputTypeSchemas/PracticeExamCreateManyArgsSchema.ts
var _zod = require('zod');
var PracticeExamCreateManyArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkSOVPXMFAcjs.PracticeExamCreateManyInputSchema, _chunkSOVPXMFAcjs.PracticeExamCreateManyInputSchema.array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var PracticeExamCreateManyArgsSchema_default = PracticeExamCreateManyArgsSchema;




exports.PracticeExamCreateManyArgsSchema = PracticeExamCreateManyArgsSchema; exports.PracticeExamCreateManyArgsSchema_default = PracticeExamCreateManyArgsSchema_default;
//# sourceMappingURL=chunk-TJLPSGSR.cjs.map