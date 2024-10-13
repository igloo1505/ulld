"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/database/outputTypeSchemas/ToDoCountOutputTypeSelectSchema.ts
var _zod = require('zod');
var ToDoCountOutputTypeSelectSchema = _zod.z.object({
  associatedNotes: _zod.z.boolean().optional(),
  tags: _zod.z.boolean().optional(),
  topics: _zod.z.boolean().optional(),
  subjects: _zod.z.boolean().optional(),
  child: _zod.z.boolean().optional()
}).strict();
var ToDoCountOutputTypeSelectSchema_default = ToDoCountOutputTypeSelectSchema;




exports.ToDoCountOutputTypeSelectSchema = ToDoCountOutputTypeSelectSchema; exports.ToDoCountOutputTypeSelectSchema_default = ToDoCountOutputTypeSelectSchema_default;
//# sourceMappingURL=chunk-WEYJ7FRT.cjs.map