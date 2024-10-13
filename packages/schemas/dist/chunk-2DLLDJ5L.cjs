"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkRAZBO3YFcjs = require('./chunk-RAZBO3YF.cjs');

// src/database/inputTypeSchemas/TagCreateManyKanbanInputEnvelopeSchema.ts
var _zod = require('zod');
var TagCreateManyKanbanInputEnvelopeSchema = _zod.z.object({
  data: _zod.z.union([_zod.z.lazy(() => _chunkRAZBO3YFcjs.TagCreateManyKanbanInputSchema), _zod.z.lazy(() => _chunkRAZBO3YFcjs.TagCreateManyKanbanInputSchema).array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var TagCreateManyKanbanInputEnvelopeSchema_default = TagCreateManyKanbanInputEnvelopeSchema;




exports.TagCreateManyKanbanInputEnvelopeSchema = TagCreateManyKanbanInputEnvelopeSchema; exports.TagCreateManyKanbanInputEnvelopeSchema_default = TagCreateManyKanbanInputEnvelopeSchema_default;
//# sourceMappingURL=chunk-2DLLDJ5L.cjs.map