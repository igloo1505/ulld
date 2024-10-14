"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkLVHYVJJPcjs = require('./chunk-LVHYVJJP.cjs');


var _chunkPX3LDLTKcjs = require('./chunk-PX3LDLTK.cjs');


var _chunkWKOQWVMKcjs = require('./chunk-WKOQWVMK.cjs');

// src/database/inputTypeSchemas/SubjectUpdateManyWithWhereWithoutTodoListInputSchema.ts
var _zod = require('zod');
var SubjectUpdateManyWithWhereWithoutTodoListInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkPX3LDLTKcjs.SubjectScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunkWKOQWVMKcjs.SubjectUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunkLVHYVJJPcjs.SubjectUncheckedUpdateManyWithoutTodoListInputSchema)])
}).strict();
var SubjectUpdateManyWithWhereWithoutTodoListInputSchema_default = SubjectUpdateManyWithWhereWithoutTodoListInputSchema;




exports.SubjectUpdateManyWithWhereWithoutTodoListInputSchema = SubjectUpdateManyWithWhereWithoutTodoListInputSchema; exports.SubjectUpdateManyWithWhereWithoutTodoListInputSchema_default = SubjectUpdateManyWithWhereWithoutTodoListInputSchema_default;
//# sourceMappingURL=chunk-U3GPRO2W.cjs.map