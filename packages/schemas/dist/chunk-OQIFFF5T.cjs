"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/database/inputTypeSchemas/QAPairCreateManyInputSchema.ts
var _zod = require('zod');
var QAPairCreateManyInputSchema = _zod.z.object({
  id: _zod.z.string(),
  question: _zod.z.string(),
  answer: _zod.z.string(),
  description: _zod.z.string().optional().nullable(),
  secondaryLabel: _zod.z.string().optional().nullable(),
  correctCount: _zod.z.number().int().optional(),
  inCorrectCount: _zod.z.number().int().optional()
}).strict();
var QAPairCreateManyInputSchema_default = QAPairCreateManyInputSchema;




exports.QAPairCreateManyInputSchema = QAPairCreateManyInputSchema; exports.QAPairCreateManyInputSchema_default = QAPairCreateManyInputSchema_default;
//# sourceMappingURL=chunk-OQIFFF5T.cjs.map