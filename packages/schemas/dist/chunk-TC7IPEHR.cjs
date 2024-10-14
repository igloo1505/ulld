"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkGGHOOBQ7cjs = require('./chunk-GGHOOBQ7.cjs');


var _chunk4ASRITDCcjs = require('./chunk-4ASRITDC.cjs');


var _chunk5SSTWBRMcjs = require('./chunk-5SSTWBRM.cjs');


var _chunkIEB3LIY7cjs = require('./chunk-IEB3LIY7.cjs');


var _chunkHE3TXQGOcjs = require('./chunk-HE3TXQGO.cjs');


var _chunkPALRL6S5cjs = require('./chunk-PALRL6S5.cjs');


var _chunkYSVCS7P6cjs = require('./chunk-YSVCS7P6.cjs');


var _chunk5AQUPIZWcjs = require('./chunk-5AQUPIZW.cjs');


var _chunkJNWYIEVVcjs = require('./chunk-JNWYIEVV.cjs');

// src/database/inputTypeSchemas/ToDoScalarWhereWithAggregatesInputSchema.ts
var _zod = require('zod');
var ToDoScalarWhereWithAggregatesInputSchema = _zod.z.object({
  AND: _zod.z.union([_zod.z.lazy(() => ToDoScalarWhereWithAggregatesInputSchema), _zod.z.lazy(() => ToDoScalarWhereWithAggregatesInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => ToDoScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => ToDoScalarWhereWithAggregatesInputSchema), _zod.z.lazy(() => ToDoScalarWhereWithAggregatesInputSchema).array()]).optional(),
  id: _zod.z.union([_zod.z.lazy(() => _chunkYSVCS7P6cjs.IntWithAggregatesFilterSchema), _zod.z.number()]).optional(),
  createdAt: _zod.z.union([_zod.z.lazy(() => _chunk5AQUPIZWcjs.DateTimeWithAggregatesFilterSchema), _zod.z.coerce.date()]).optional(),
  task: _zod.z.union([_zod.z.lazy(() => _chunkJNWYIEVVcjs.StringWithAggregatesFilterSchema), _zod.z.string()]).optional(),
  dueAt: _zod.z.union([_zod.z.lazy(() => _chunk5SSTWBRMcjs.DateTimeNullableWithAggregatesFilterSchema), _zod.z.coerce.date()]).optional().nullable(),
  details: _zod.z.union([_zod.z.lazy(() => _chunkIEB3LIY7cjs.StringNullableWithAggregatesFilterSchema), _zod.z.string()]).optional().nullable(),
  parentId: _zod.z.union([_zod.z.lazy(() => _chunkHE3TXQGOcjs.IntNullableWithAggregatesFilterSchema), _zod.z.number()]).optional().nullable(),
  category: _zod.z.union([_zod.z.lazy(() => _chunkGGHOOBQ7cjs.EnumTaskCategoryNullableWithAggregatesFilterSchema), _zod.z.lazy(() => _chunkPALRL6S5cjs.TaskCategorySchema)]).optional().nullable(),
  bookmarked: _zod.z.union([_zod.z.lazy(() => _chunk4ASRITDCcjs.BoolWithAggregatesFilterSchema), _zod.z.boolean()]).optional(),
  status: _zod.z.union([_zod.z.lazy(() => _chunkJNWYIEVVcjs.StringWithAggregatesFilterSchema), _zod.z.string()]).optional(),
  priority: _zod.z.union([_zod.z.lazy(() => _chunkYSVCS7P6cjs.IntWithAggregatesFilterSchema), _zod.z.number()]).optional(),
  toDoListId: _zod.z.union([_zod.z.lazy(() => _chunkHE3TXQGOcjs.IntNullableWithAggregatesFilterSchema), _zod.z.number()]).optional().nullable(),
  completedOn: _zod.z.union([_zod.z.lazy(() => _chunk5SSTWBRMcjs.DateTimeNullableWithAggregatesFilterSchema), _zod.z.coerce.date()]).optional().nullable()
}).strict();
var ToDoScalarWhereWithAggregatesInputSchema_default = ToDoScalarWhereWithAggregatesInputSchema;




exports.ToDoScalarWhereWithAggregatesInputSchema = ToDoScalarWhereWithAggregatesInputSchema; exports.ToDoScalarWhereWithAggregatesInputSchema_default = ToDoScalarWhereWithAggregatesInputSchema_default;
//# sourceMappingURL=chunk-TC7IPEHR.cjs.map