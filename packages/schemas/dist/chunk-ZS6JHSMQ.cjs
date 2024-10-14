"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkGRZOIT6Ccjs = require('./chunk-GRZOIT6C.cjs');


var _chunkK7N6ENCJcjs = require('./chunk-K7N6ENCJ.cjs');


var _chunkVEBBFDQGcjs = require('./chunk-VEBBFDQG.cjs');

// src/database/inputTypeSchemas/ToDoUpdateManyWithWhereWithoutAssociatedNotesInputSchema.ts
var _zod = require('zod');
var ToDoUpdateManyWithWhereWithoutAssociatedNotesInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkK7N6ENCJcjs.ToDoScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunkVEBBFDQGcjs.ToDoUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunkGRZOIT6Ccjs.ToDoUncheckedUpdateManyWithoutAssociatedNotesInputSchema)])
}).strict();
var ToDoUpdateManyWithWhereWithoutAssociatedNotesInputSchema_default = ToDoUpdateManyWithWhereWithoutAssociatedNotesInputSchema;




exports.ToDoUpdateManyWithWhereWithoutAssociatedNotesInputSchema = ToDoUpdateManyWithWhereWithoutAssociatedNotesInputSchema; exports.ToDoUpdateManyWithWhereWithoutAssociatedNotesInputSchema_default = ToDoUpdateManyWithWhereWithoutAssociatedNotesInputSchema_default;
//# sourceMappingURL=chunk-ZS6JHSMQ.cjs.map