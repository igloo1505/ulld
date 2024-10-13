"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkWTRPH2SZcjs = require('./chunk-WTRPH2SZ.cjs');


var _chunk2TN6PYK3cjs = require('./chunk-2TN6PYK3.cjs');

// src/database/outputTypeSchemas/PracticeExamArgsSchema.ts
var _zod = require('zod');
var PracticeExamArgsSchema = _zod.z.object({
  select: _zod.z.lazy(() => _chunkWTRPH2SZcjs.PracticeExamSelectSchema).optional(),
  include: _zod.z.lazy(() => _chunk2TN6PYK3cjs.PracticeExamIncludeSchema).optional()
}).strict();
var PracticeExamArgsSchema_default = PracticeExamArgsSchema;




exports.PracticeExamArgsSchema = PracticeExamArgsSchema; exports.PracticeExamArgsSchema_default = PracticeExamArgsSchema_default;
//# sourceMappingURL=chunk-ZBMYKBIZ.cjs.map