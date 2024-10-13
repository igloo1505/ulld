"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/database/outputTypeSchemas/ToDoListCountOutputTypeSelectSchema.ts
var _zod = require('zod');
var ToDoListCountOutputTypeSelectSchema = _zod.z.object({
  tasks: _zod.z.boolean().optional(),
  tags: _zod.z.boolean().optional(),
  topics: _zod.z.boolean().optional(),
  subjects: _zod.z.boolean().optional()
}).strict();
var ToDoListCountOutputTypeSelectSchema_default = ToDoListCountOutputTypeSelectSchema;




exports.ToDoListCountOutputTypeSelectSchema = ToDoListCountOutputTypeSelectSchema; exports.ToDoListCountOutputTypeSelectSchema_default = ToDoListCountOutputTypeSelectSchema_default;
//# sourceMappingURL=chunk-KQEKXRUI.cjs.map