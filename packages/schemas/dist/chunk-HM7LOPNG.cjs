"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkBFRPR4GOcjs = require('./chunk-BFRPR4GO.cjs');

// src/database/inputTypeSchemas/TopicCreateManyKanbanInputEnvelopeSchema.ts
var _zod = require('zod');
var TopicCreateManyKanbanInputEnvelopeSchema = _zod.z.object({
  data: _zod.z.union([_zod.z.lazy(() => _chunkBFRPR4GOcjs.TopicCreateManyKanbanInputSchema), _zod.z.lazy(() => _chunkBFRPR4GOcjs.TopicCreateManyKanbanInputSchema).array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var TopicCreateManyKanbanInputEnvelopeSchema_default = TopicCreateManyKanbanInputEnvelopeSchema;




exports.TopicCreateManyKanbanInputEnvelopeSchema = TopicCreateManyKanbanInputEnvelopeSchema; exports.TopicCreateManyKanbanInputEnvelopeSchema_default = TopicCreateManyKanbanInputEnvelopeSchema_default;
//# sourceMappingURL=chunk-HM7LOPNG.cjs.map