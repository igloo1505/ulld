"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkBGYUATLEcjs = require('./chunk-BGYUATLE.cjs');


var _chunkK7N6ENCJcjs = require('./chunk-K7N6ENCJ.cjs');


var _chunkVEBBFDQGcjs = require('./chunk-VEBBFDQG.cjs');

// src/database/inputTypeSchemas/ToDoUpdateManyWithWhereWithoutTagsInputSchema.ts
var _zod = require('zod');
var ToDoUpdateManyWithWhereWithoutTagsInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkK7N6ENCJcjs.ToDoScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunkVEBBFDQGcjs.ToDoUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunkBGYUATLEcjs.ToDoUncheckedUpdateManyWithoutTagsInputSchema)])
}).strict();
var ToDoUpdateManyWithWhereWithoutTagsInputSchema_default = ToDoUpdateManyWithWhereWithoutTagsInputSchema;




exports.ToDoUpdateManyWithWhereWithoutTagsInputSchema = ToDoUpdateManyWithWhereWithoutTagsInputSchema; exports.ToDoUpdateManyWithWhereWithoutTagsInputSchema_default = ToDoUpdateManyWithWhereWithoutTagsInputSchema_default;
//# sourceMappingURL=chunk-HDQOSVSR.cjs.map