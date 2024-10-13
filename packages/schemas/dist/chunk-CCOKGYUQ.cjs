"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkBOACU25Rcjs = require('./chunk-BOACU25R.cjs');

// src/database/inputTypeSchemas/SubjectCreateManyKanbanInputEnvelopeSchema.ts
var _zod = require('zod');
var SubjectCreateManyKanbanInputEnvelopeSchema = _zod.z.object({
  data: _zod.z.union([_zod.z.lazy(() => _chunkBOACU25Rcjs.SubjectCreateManyKanbanInputSchema), _zod.z.lazy(() => _chunkBOACU25Rcjs.SubjectCreateManyKanbanInputSchema).array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var SubjectCreateManyKanbanInputEnvelopeSchema_default = SubjectCreateManyKanbanInputEnvelopeSchema;




exports.SubjectCreateManyKanbanInputEnvelopeSchema = SubjectCreateManyKanbanInputEnvelopeSchema; exports.SubjectCreateManyKanbanInputEnvelopeSchema_default = SubjectCreateManyKanbanInputEnvelopeSchema_default;
//# sourceMappingURL=chunk-CCOKGYUQ.cjs.map