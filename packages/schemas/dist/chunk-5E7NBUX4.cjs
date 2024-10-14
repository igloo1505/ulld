"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkWAYY3BOLcjs = require('./chunk-WAYY3BOL.cjs');

// src/database/outputTypeSchemas/ToDoCountOutputTypeArgsSchema.ts
var _zod = require('zod');
var ToDoCountOutputTypeArgsSchema = _zod.z.object({
  select: _zod.z.lazy(() => _chunkWAYY3BOLcjs.ToDoCountOutputTypeSelectSchema).nullish()
}).strict();
var ToDoCountOutputTypeArgsSchema_default = _chunkWAYY3BOLcjs.ToDoCountOutputTypeSelectSchema;




exports.ToDoCountOutputTypeArgsSchema = ToDoCountOutputTypeArgsSchema; exports.ToDoCountOutputTypeArgsSchema_default = ToDoCountOutputTypeArgsSchema_default;
//# sourceMappingURL=chunk-5E7NBUX4.cjs.map