"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkQPD47KL5cjs = require('./chunk-QPD47KL5.cjs');

// src/database/inputTypeSchemas/TagCreateManyKanbanInputEnvelopeSchema.ts
var _zod = require('zod');
var TagCreateManyKanbanInputEnvelopeSchema = _zod.z.object({
  data: _zod.z.union([_zod.z.lazy(() => _chunkQPD47KL5cjs.TagCreateManyKanbanInputSchema), _zod.z.lazy(() => _chunkQPD47KL5cjs.TagCreateManyKanbanInputSchema).array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var TagCreateManyKanbanInputEnvelopeSchema_default = TagCreateManyKanbanInputEnvelopeSchema;




exports.TagCreateManyKanbanInputEnvelopeSchema = TagCreateManyKanbanInputEnvelopeSchema; exports.TagCreateManyKanbanInputEnvelopeSchema_default = TagCreateManyKanbanInputEnvelopeSchema_default;
//# sourceMappingURL=chunk-IGPMGAEP.cjs.map