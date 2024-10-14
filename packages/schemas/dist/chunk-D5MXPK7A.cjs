"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk4I42N756cjs = require('./chunk-4I42N756.cjs');


var _chunkMHDI4NQVcjs = require('./chunk-MHDI4NQV.cjs');


var _chunkOAHVAABOcjs = require('./chunk-OAHVAABO.cjs');

// src/database/inputTypeSchemas/TopicUpdateManyWithWhereWithoutToDoInputSchema.ts
var _zod = require('zod');
var TopicUpdateManyWithWhereWithoutToDoInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkMHDI4NQVcjs.TopicScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunkOAHVAABOcjs.TopicUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunk4I42N756cjs.TopicUncheckedUpdateManyWithoutToDoInputSchema)])
}).strict();
var TopicUpdateManyWithWhereWithoutToDoInputSchema_default = TopicUpdateManyWithWhereWithoutToDoInputSchema;




exports.TopicUpdateManyWithWhereWithoutToDoInputSchema = TopicUpdateManyWithWhereWithoutToDoInputSchema; exports.TopicUpdateManyWithWhereWithoutToDoInputSchema_default = TopicUpdateManyWithWhereWithoutToDoInputSchema_default;
//# sourceMappingURL=chunk-D5MXPK7A.cjs.map