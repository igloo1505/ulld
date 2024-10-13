"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkQAFVVGPZcjs = require('./chunk-QAFVVGPZ.cjs');


var _chunkQWZS2Y4Wcjs = require('./chunk-QWZS2Y4W.cjs');


var _chunkCHDZPTPLcjs = require('./chunk-CHDZPTPL.cjs');

// src/database/inputTypeSchemas/ToDoListUpdateManyWithWhereWithoutTopicsInputSchema.ts
var _zod = require('zod');
var ToDoListUpdateManyWithWhereWithoutTopicsInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkQWZS2Y4Wcjs.ToDoListScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunkCHDZPTPLcjs.ToDoListUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunkQAFVVGPZcjs.ToDoListUncheckedUpdateManyWithoutTopicsInputSchema)])
}).strict();
var ToDoListUpdateManyWithWhereWithoutTopicsInputSchema_default = ToDoListUpdateManyWithWhereWithoutTopicsInputSchema;




exports.ToDoListUpdateManyWithWhereWithoutTopicsInputSchema = ToDoListUpdateManyWithWhereWithoutTopicsInputSchema; exports.ToDoListUpdateManyWithWhereWithoutTopicsInputSchema_default = ToDoListUpdateManyWithWhereWithoutTopicsInputSchema_default;
//# sourceMappingURL=chunk-Q3UKLSWL.cjs.map