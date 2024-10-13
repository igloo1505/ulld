"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk2FBYDGOScjs = require('./chunk-2FBYDGOS.cjs');

// src/database/outputTypeSchemas/PracticeExamCountOutputTypeArgsSchema.ts
var _zod = require('zod');
var PracticeExamCountOutputTypeArgsSchema = _zod.z.object({
  select: _zod.z.lazy(() => _chunk2FBYDGOScjs.PracticeExamCountOutputTypeSelectSchema).nullish()
}).strict();
var PracticeExamCountOutputTypeArgsSchema_default = _chunk2FBYDGOScjs.PracticeExamCountOutputTypeSelectSchema;




exports.PracticeExamCountOutputTypeArgsSchema = PracticeExamCountOutputTypeArgsSchema; exports.PracticeExamCountOutputTypeArgsSchema_default = PracticeExamCountOutputTypeArgsSchema_default;
//# sourceMappingURL=chunk-BMIJGTWY.cjs.map