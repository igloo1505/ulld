"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkNYM4MQRTcjs = require('./chunk-NYM4MQRT.cjs');


var _chunkMX4UNEJJcjs = require('./chunk-MX4UNEJJ.cjs');


var _chunkPP2DVWWYcjs = require('./chunk-PP2DVWWY.cjs');

// src/database/inputTypeSchemas/ToDoUpdateManyWithWhereWithoutTopicsInputSchema.ts
var _zod = require('zod');
var ToDoUpdateManyWithWhereWithoutTopicsInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkMX4UNEJJcjs.ToDoScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunkPP2DVWWYcjs.ToDoUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunkNYM4MQRTcjs.ToDoUncheckedUpdateManyWithoutTopicsInputSchema)])
}).strict();
var ToDoUpdateManyWithWhereWithoutTopicsInputSchema_default = ToDoUpdateManyWithWhereWithoutTopicsInputSchema;




exports.ToDoUpdateManyWithWhereWithoutTopicsInputSchema = ToDoUpdateManyWithWhereWithoutTopicsInputSchema; exports.ToDoUpdateManyWithWhereWithoutTopicsInputSchema_default = ToDoUpdateManyWithWhereWithoutTopicsInputSchema_default;
//# sourceMappingURL=chunk-TKBWLN5E.cjs.map