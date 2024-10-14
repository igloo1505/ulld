"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkYSVCS7P6cjs = require('./chunk-YSVCS7P6.cjs');


var _chunk5AQUPIZWcjs = require('./chunk-5AQUPIZW.cjs');


var _chunkJNWYIEVVcjs = require('./chunk-JNWYIEVV.cjs');

// src/database/inputTypeSchemas/KanbanScalarWhereWithAggregatesInputSchema.ts
var _zod = require('zod');
var KanbanScalarWhereWithAggregatesInputSchema = _zod.z.object({
  AND: _zod.z.union([_zod.z.lazy(() => KanbanScalarWhereWithAggregatesInputSchema), _zod.z.lazy(() => KanbanScalarWhereWithAggregatesInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => KanbanScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => KanbanScalarWhereWithAggregatesInputSchema), _zod.z.lazy(() => KanbanScalarWhereWithAggregatesInputSchema).array()]).optional(),
  id: _zod.z.union([_zod.z.lazy(() => _chunkYSVCS7P6cjs.IntWithAggregatesFilterSchema), _zod.z.number()]).optional(),
  title: _zod.z.union([_zod.z.lazy(() => _chunkJNWYIEVVcjs.StringWithAggregatesFilterSchema), _zod.z.string()]).optional(),
  createdAt: _zod.z.union([_zod.z.lazy(() => _chunk5AQUPIZWcjs.DateTimeWithAggregatesFilterSchema), _zod.z.coerce.date()]).optional(),
  lastUpdate: _zod.z.union([_zod.z.lazy(() => _chunk5AQUPIZWcjs.DateTimeWithAggregatesFilterSchema), _zod.z.coerce.date()]).optional()
}).strict();
var KanbanScalarWhereWithAggregatesInputSchema_default = KanbanScalarWhereWithAggregatesInputSchema;




exports.KanbanScalarWhereWithAggregatesInputSchema = KanbanScalarWhereWithAggregatesInputSchema; exports.KanbanScalarWhereWithAggregatesInputSchema_default = KanbanScalarWhereWithAggregatesInputSchema_default;
//# sourceMappingURL=chunk-IDD2ZS66.cjs.map