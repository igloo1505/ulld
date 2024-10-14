"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk2UE3M6GRcjs = require('./chunk-2UE3M6GR.cjs');


var _chunkF6G4GA6Fcjs = require('./chunk-F6G4GA6F.cjs');


var _chunk2MUBIUA6cjs = require('./chunk-2MUBIUA6.cjs');

// src/database/inputTypeSchemas/ToDoListUpdateManyWithWhereWithoutTagsInputSchema.ts
var _zod = require('zod');
var ToDoListUpdateManyWithWhereWithoutTagsInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkF6G4GA6Fcjs.ToDoListScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunk2MUBIUA6cjs.ToDoListUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunk2UE3M6GRcjs.ToDoListUncheckedUpdateManyWithoutTagsInputSchema)])
}).strict();
var ToDoListUpdateManyWithWhereWithoutTagsInputSchema_default = ToDoListUpdateManyWithWhereWithoutTagsInputSchema;




exports.ToDoListUpdateManyWithWhereWithoutTagsInputSchema = ToDoListUpdateManyWithWhereWithoutTagsInputSchema; exports.ToDoListUpdateManyWithWhereWithoutTagsInputSchema_default = ToDoListUpdateManyWithWhereWithoutTagsInputSchema_default;
//# sourceMappingURL=chunk-CLVFIIH6.cjs.map