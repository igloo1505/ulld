"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkYSVCS7P6cjs = require('./chunk-YSVCS7P6.cjs');


var _chunk5AQUPIZWcjs = require('./chunk-5AQUPIZW.cjs');


var _chunkJNWYIEVVcjs = require('./chunk-JNWYIEVV.cjs');

// src/database/inputTypeSchemas/ToDoListScalarWhereWithAggregatesInputSchema.ts
var _zod = require('zod');
var ToDoListScalarWhereWithAggregatesInputSchema = _zod.z.object({
  AND: _zod.z.union([_zod.z.lazy(() => ToDoListScalarWhereWithAggregatesInputSchema), _zod.z.lazy(() => ToDoListScalarWhereWithAggregatesInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => ToDoListScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => ToDoListScalarWhereWithAggregatesInputSchema), _zod.z.lazy(() => ToDoListScalarWhereWithAggregatesInputSchema).array()]).optional(),
  id: _zod.z.union([_zod.z.lazy(() => _chunkYSVCS7P6cjs.IntWithAggregatesFilterSchema), _zod.z.number()]).optional(),
  label: _zod.z.union([_zod.z.lazy(() => _chunkJNWYIEVVcjs.StringWithAggregatesFilterSchema), _zod.z.string()]).optional(),
  createdAt: _zod.z.union([_zod.z.lazy(() => _chunk5AQUPIZWcjs.DateTimeWithAggregatesFilterSchema), _zod.z.coerce.date()]).optional(),
  lastUpdate: _zod.z.union([_zod.z.lazy(() => _chunk5AQUPIZWcjs.DateTimeWithAggregatesFilterSchema), _zod.z.coerce.date()]).optional(),
  lastAccess: _zod.z.union([_zod.z.lazy(() => _chunk5AQUPIZWcjs.DateTimeWithAggregatesFilterSchema), _zod.z.coerce.date()]).optional()
}).strict();
var ToDoListScalarWhereWithAggregatesInputSchema_default = ToDoListScalarWhereWithAggregatesInputSchema;




exports.ToDoListScalarWhereWithAggregatesInputSchema = ToDoListScalarWhereWithAggregatesInputSchema; exports.ToDoListScalarWhereWithAggregatesInputSchema_default = ToDoListScalarWhereWithAggregatesInputSchema_default;
//# sourceMappingURL=chunk-3CV3QFGP.cjs.map