"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkQFLT3JDEcjs = require('./chunk-QFLT3JDE.cjs');


var _chunkQWZS2Y4Wcjs = require('./chunk-QWZS2Y4W.cjs');


var _chunkCHDZPTPLcjs = require('./chunk-CHDZPTPL.cjs');

// src/database/inputTypeSchemas/ToDoListUpdateManyWithWhereWithoutTagsInputSchema.ts
var _zod = require('zod');
var ToDoListUpdateManyWithWhereWithoutTagsInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkQWZS2Y4Wcjs.ToDoListScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunkCHDZPTPLcjs.ToDoListUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunkQFLT3JDEcjs.ToDoListUncheckedUpdateManyWithoutTagsInputSchema)])
}).strict();
var ToDoListUpdateManyWithWhereWithoutTagsInputSchema_default = ToDoListUpdateManyWithWhereWithoutTagsInputSchema;




exports.ToDoListUpdateManyWithWhereWithoutTagsInputSchema = ToDoListUpdateManyWithWhereWithoutTagsInputSchema; exports.ToDoListUpdateManyWithWhereWithoutTagsInputSchema_default = ToDoListUpdateManyWithWhereWithoutTagsInputSchema_default;
//# sourceMappingURL=chunk-SXKTTUXW.cjs.map