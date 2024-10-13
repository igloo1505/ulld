"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/database/inputTypeSchemas/ToDoListCreateManyInputSchema.ts
var _zod = require('zod');
var ToDoListCreateManyInputSchema = _zod.z.object({
  id: _zod.z.number().int().optional(),
  label: _zod.z.string(),
  createdAt: _zod.z.coerce.date().optional(),
  lastUpdate: _zod.z.coerce.date().optional(),
  lastAccess: _zod.z.coerce.date().optional()
}).strict();
var ToDoListCreateManyInputSchema_default = ToDoListCreateManyInputSchema;




exports.ToDoListCreateManyInputSchema = ToDoListCreateManyInputSchema; exports.ToDoListCreateManyInputSchema_default = ToDoListCreateManyInputSchema_default;
//# sourceMappingURL=chunk-RXPI6HLC.cjs.map