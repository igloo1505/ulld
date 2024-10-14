"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkRPNAAALBcjs = require('./chunk-RPNAAALB.cjs');


var _chunk2L755XMWcjs = require('./chunk-2L755XMW.cjs');


var _chunkXUF4Q3ZJcjs = require('./chunk-XUF4Q3ZJ.cjs');

// src/database/inputTypeSchemas/TopicScalarWhereInputSchema.ts
var _zod = require('zod');
var TopicScalarWhereInputSchema = _zod.z.object({
  AND: _zod.z.union([_zod.z.lazy(() => TopicScalarWhereInputSchema), _zod.z.lazy(() => TopicScalarWhereInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => TopicScalarWhereInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => TopicScalarWhereInputSchema), _zod.z.lazy(() => TopicScalarWhereInputSchema).array()]).optional(),
  value: _zod.z.union([_zod.z.lazy(() => _chunkXUF4Q3ZJcjs.StringFilterSchema), _zod.z.string()]).optional(),
  kanbanId: _zod.z.union([_zod.z.lazy(() => _chunkRPNAAALBcjs.IntNullableFilterSchema), _zod.z.number()]).optional().nullable(),
  createdAt: _zod.z.union([_zod.z.lazy(() => _chunk2L755XMWcjs.DateTimeFilterSchema), _zod.z.coerce.date()]).optional(),
  lastAccess: _zod.z.union([_zod.z.lazy(() => _chunk2L755XMWcjs.DateTimeFilterSchema), _zod.z.coerce.date()]).optional()
}).strict();
var TopicScalarWhereInputSchema_default = TopicScalarWhereInputSchema;




exports.TopicScalarWhereInputSchema = TopicScalarWhereInputSchema; exports.TopicScalarWhereInputSchema_default = TopicScalarWhereInputSchema_default;
//# sourceMappingURL=chunk-MHDI4NQV.cjs.map