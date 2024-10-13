"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkWEYJ7FRTcjs = require('./chunk-WEYJ7FRT.cjs');

// src/database/outputTypeSchemas/ToDoCountOutputTypeArgsSchema.ts
var _zod = require('zod');
var ToDoCountOutputTypeArgsSchema = _zod.z.object({
  select: _zod.z.lazy(() => _chunkWEYJ7FRTcjs.ToDoCountOutputTypeSelectSchema).nullish()
}).strict();
var ToDoCountOutputTypeArgsSchema_default = _chunkWEYJ7FRTcjs.ToDoCountOutputTypeSelectSchema;




exports.ToDoCountOutputTypeArgsSchema = ToDoCountOutputTypeArgsSchema; exports.ToDoCountOutputTypeArgsSchema_default = ToDoCountOutputTypeArgsSchema_default;
//# sourceMappingURL=chunk-ORIQYYFY.cjs.map