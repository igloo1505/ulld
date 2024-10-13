"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkKQEKXRUIcjs = require('./chunk-KQEKXRUI.cjs');

// src/database/outputTypeSchemas/ToDoListCountOutputTypeArgsSchema.ts
var _zod = require('zod');
var ToDoListCountOutputTypeArgsSchema = _zod.z.object({
  select: _zod.z.lazy(() => _chunkKQEKXRUIcjs.ToDoListCountOutputTypeSelectSchema).nullish()
}).strict();
var ToDoListCountOutputTypeArgsSchema_default = _chunkKQEKXRUIcjs.ToDoListCountOutputTypeSelectSchema;




exports.ToDoListCountOutputTypeArgsSchema = ToDoListCountOutputTypeArgsSchema; exports.ToDoListCountOutputTypeArgsSchema_default = ToDoListCountOutputTypeArgsSchema_default;
//# sourceMappingURL=chunk-W64QSDEW.cjs.map