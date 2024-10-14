"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkZD2MT6XDcjs = require('./chunk-ZD2MT6XD.cjs');

// src/database/outputTypeSchemas/ToDoListCountOutputTypeArgsSchema.ts
var _zod = require('zod');
var ToDoListCountOutputTypeArgsSchema = _zod.z.object({
  select: _zod.z.lazy(() => _chunkZD2MT6XDcjs.ToDoListCountOutputTypeSelectSchema).nullish()
}).strict();
var ToDoListCountOutputTypeArgsSchema_default = _chunkZD2MT6XDcjs.ToDoListCountOutputTypeSelectSchema;




exports.ToDoListCountOutputTypeArgsSchema = ToDoListCountOutputTypeArgsSchema; exports.ToDoListCountOutputTypeArgsSchema_default = ToDoListCountOutputTypeArgsSchema_default;
//# sourceMappingURL=chunk-TW55HWVY.cjs.map