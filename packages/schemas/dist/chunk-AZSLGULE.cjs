"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkSOVPXMFAcjs = require('./chunk-SOVPXMFA.cjs');

// src/database/outputTypeSchemas/PracticeExamCreateManyAndReturnArgsSchema.ts
var _zod = require('zod');
var PracticeExamCreateManyAndReturnArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkSOVPXMFAcjs.PracticeExamCreateManyInputSchema, _chunkSOVPXMFAcjs.PracticeExamCreateManyInputSchema.array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var PracticeExamCreateManyAndReturnArgsSchema_default = PracticeExamCreateManyAndReturnArgsSchema;




exports.PracticeExamCreateManyAndReturnArgsSchema = PracticeExamCreateManyAndReturnArgsSchema; exports.PracticeExamCreateManyAndReturnArgsSchema_default = PracticeExamCreateManyAndReturnArgsSchema_default;
//# sourceMappingURL=chunk-AZSLGULE.cjs.map