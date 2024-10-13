"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkVYYZSYF5cjs = require('./chunk-VYYZSYF5.cjs');


var _chunkJKV2YZP7cjs = require('./chunk-JKV2YZP7.cjs');


var _chunkOYCJHDTMcjs = require('./chunk-OYCJHDTM.cjs');

// src/database/inputTypeSchemas/KanbanScalarWhereWithAggregatesInputSchema.ts
var _zod = require('zod');
var KanbanScalarWhereWithAggregatesInputSchema = _zod.z.object({
  AND: _zod.z.union([_zod.z.lazy(() => KanbanScalarWhereWithAggregatesInputSchema), _zod.z.lazy(() => KanbanScalarWhereWithAggregatesInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => KanbanScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => KanbanScalarWhereWithAggregatesInputSchema), _zod.z.lazy(() => KanbanScalarWhereWithAggregatesInputSchema).array()]).optional(),
  id: _zod.z.union([_zod.z.lazy(() => _chunkVYYZSYF5cjs.IntWithAggregatesFilterSchema), _zod.z.number()]).optional(),
  title: _zod.z.union([_zod.z.lazy(() => _chunkOYCJHDTMcjs.StringWithAggregatesFilterSchema), _zod.z.string()]).optional(),
  createdAt: _zod.z.union([_zod.z.lazy(() => _chunkJKV2YZP7cjs.DateTimeWithAggregatesFilterSchema), _zod.z.coerce.date()]).optional(),
  lastUpdate: _zod.z.union([_zod.z.lazy(() => _chunkJKV2YZP7cjs.DateTimeWithAggregatesFilterSchema), _zod.z.coerce.date()]).optional()
}).strict();
var KanbanScalarWhereWithAggregatesInputSchema_default = KanbanScalarWhereWithAggregatesInputSchema;




exports.KanbanScalarWhereWithAggregatesInputSchema = KanbanScalarWhereWithAggregatesInputSchema; exports.KanbanScalarWhereWithAggregatesInputSchema_default = KanbanScalarWhereWithAggregatesInputSchema_default;
//# sourceMappingURL=chunk-JJB2Z6JQ.cjs.map