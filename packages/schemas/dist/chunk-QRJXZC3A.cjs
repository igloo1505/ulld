"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk4DBR7GTKcjs = require('./chunk-4DBR7GTK.cjs');

// src/database/outputTypeSchemas/PracticeExamCountOutputTypeArgsSchema.ts
var _zod = require('zod');
var PracticeExamCountOutputTypeArgsSchema = _zod.z.object({
  select: _zod.z.lazy(() => _chunk4DBR7GTKcjs.PracticeExamCountOutputTypeSelectSchema).nullish()
}).strict();
var PracticeExamCountOutputTypeArgsSchema_default = _chunk4DBR7GTKcjs.PracticeExamCountOutputTypeSelectSchema;




exports.PracticeExamCountOutputTypeArgsSchema = PracticeExamCountOutputTypeArgsSchema; exports.PracticeExamCountOutputTypeArgsSchema_default = PracticeExamCountOutputTypeArgsSchema_default;
//# sourceMappingURL=chunk-QRJXZC3A.cjs.map