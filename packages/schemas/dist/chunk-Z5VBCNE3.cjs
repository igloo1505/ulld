"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkHED7ORSQcjs = require('./chunk-HED7ORSQ.cjs');


var _chunkMHDI4NQVcjs = require('./chunk-MHDI4NQV.cjs');


var _chunkOAHVAABOcjs = require('./chunk-OAHVAABO.cjs');

// src/database/inputTypeSchemas/TopicUpdateManyWithWhereWithoutKanbanInputSchema.ts
var _zod = require('zod');
var TopicUpdateManyWithWhereWithoutKanbanInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkMHDI4NQVcjs.TopicScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunkOAHVAABOcjs.TopicUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunkHED7ORSQcjs.TopicUncheckedUpdateManyWithoutKanbanInputSchema)])
}).strict();
var TopicUpdateManyWithWhereWithoutKanbanInputSchema_default = TopicUpdateManyWithWhereWithoutKanbanInputSchema;




exports.TopicUpdateManyWithWhereWithoutKanbanInputSchema = TopicUpdateManyWithWhereWithoutKanbanInputSchema; exports.TopicUpdateManyWithWhereWithoutKanbanInputSchema_default = TopicUpdateManyWithWhereWithoutKanbanInputSchema_default;
//# sourceMappingURL=chunk-Z5VBCNE3.cjs.map