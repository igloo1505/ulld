"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkSK5OZK3Fcjs = require('./chunk-SK5OZK3F.cjs');


var _chunk2MYBOFS7cjs = require('./chunk-2MYBOFS7.cjs');

// src/database/outputTypeSchemas/PracticeExamArgsSchema.ts
var _zod = require('zod');
var PracticeExamArgsSchema = _zod.z.object({
  select: _zod.z.lazy(() => _chunkSK5OZK3Fcjs.PracticeExamSelectSchema).optional(),
  include: _zod.z.lazy(() => _chunk2MYBOFS7cjs.PracticeExamIncludeSchema).optional()
}).strict();
var PracticeExamArgsSchema_default = PracticeExamArgsSchema;




exports.PracticeExamArgsSchema = PracticeExamArgsSchema; exports.PracticeExamArgsSchema_default = PracticeExamArgsSchema_default;
//# sourceMappingURL=chunk-LID73CJM.cjs.map