"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkU3IIGTOGcjs = require('./chunk-U3IIGTOG.cjs');


var _chunkQP6FRHM5cjs = require('./chunk-QP6FRHM5.cjs');


var _chunk7YFOWEK6cjs = require('./chunk-7YFOWEK6.cjs');

// src/database/inputTypeSchemas/TopicUpdateManyWithWhereWithoutKanbanInputSchema.ts
var _zod = require('zod');
var TopicUpdateManyWithWhereWithoutKanbanInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkQP6FRHM5cjs.TopicScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunk7YFOWEK6cjs.TopicUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunkU3IIGTOGcjs.TopicUncheckedUpdateManyWithoutKanbanInputSchema)])
}).strict();
var TopicUpdateManyWithWhereWithoutKanbanInputSchema_default = TopicUpdateManyWithWhereWithoutKanbanInputSchema;




exports.TopicUpdateManyWithWhereWithoutKanbanInputSchema = TopicUpdateManyWithWhereWithoutKanbanInputSchema; exports.TopicUpdateManyWithWhereWithoutKanbanInputSchema_default = TopicUpdateManyWithWhereWithoutKanbanInputSchema_default;
//# sourceMappingURL=chunk-3T3GDLU5.cjs.map