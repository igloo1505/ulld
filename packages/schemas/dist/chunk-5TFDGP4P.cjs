"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkMWV2Z6KMcjs = require('./chunk-MWV2Z6KM.cjs');

// src/database/inputTypeSchemas/TopicCreateManyKanbanInputEnvelopeSchema.ts
var _zod = require('zod');
var TopicCreateManyKanbanInputEnvelopeSchema = _zod.z.object({
  data: _zod.z.union([_zod.z.lazy(() => _chunkMWV2Z6KMcjs.TopicCreateManyKanbanInputSchema), _zod.z.lazy(() => _chunkMWV2Z6KMcjs.TopicCreateManyKanbanInputSchema).array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var TopicCreateManyKanbanInputEnvelopeSchema_default = TopicCreateManyKanbanInputEnvelopeSchema;




exports.TopicCreateManyKanbanInputEnvelopeSchema = TopicCreateManyKanbanInputEnvelopeSchema; exports.TopicCreateManyKanbanInputEnvelopeSchema_default = TopicCreateManyKanbanInputEnvelopeSchema_default;
//# sourceMappingURL=chunk-5TFDGP4P.cjs.map