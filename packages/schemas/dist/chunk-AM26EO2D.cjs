"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkOTRBBKFTcjs = require('./chunk-OTRBBKFT.cjs');


var _chunkMHDI4NQVcjs = require('./chunk-MHDI4NQV.cjs');


var _chunkOAHVAABOcjs = require('./chunk-OAHVAABO.cjs');

// src/database/inputTypeSchemas/TopicUpdateManyWithWhereWithoutTodoListInputSchema.ts
var _zod = require('zod');
var TopicUpdateManyWithWhereWithoutTodoListInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkMHDI4NQVcjs.TopicScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunkOAHVAABOcjs.TopicUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunkOTRBBKFTcjs.TopicUncheckedUpdateManyWithoutTodoListInputSchema)])
}).strict();
var TopicUpdateManyWithWhereWithoutTodoListInputSchema_default = TopicUpdateManyWithWhereWithoutTodoListInputSchema;




exports.TopicUpdateManyWithWhereWithoutTodoListInputSchema = TopicUpdateManyWithWhereWithoutTodoListInputSchema; exports.TopicUpdateManyWithWhereWithoutTodoListInputSchema_default = TopicUpdateManyWithWhereWithoutTodoListInputSchema_default;
//# sourceMappingURL=chunk-AM26EO2D.cjs.map