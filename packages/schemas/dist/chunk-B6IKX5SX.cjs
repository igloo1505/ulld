"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/database/outputTypeSchemas/QAPairCountOutputTypeSelectSchema.ts
var _zod = require('zod');
var QAPairCountOutputTypeSelectSchema = _zod.z.object({
  tags: _zod.z.boolean().optional(),
  topics: _zod.z.boolean().optional(),
  subjects: _zod.z.boolean().optional(),
  practiceExam: _zod.z.boolean().optional()
}).strict();
var QAPairCountOutputTypeSelectSchema_default = QAPairCountOutputTypeSelectSchema;




exports.QAPairCountOutputTypeSelectSchema = QAPairCountOutputTypeSelectSchema; exports.QAPairCountOutputTypeSelectSchema_default = QAPairCountOutputTypeSelectSchema_default;
//# sourceMappingURL=chunk-B6IKX5SX.cjs.map