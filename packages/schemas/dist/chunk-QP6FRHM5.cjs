"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk2WZ4XBN7cjs = require('./chunk-2WZ4XBN7.cjs');


var _chunkFR5PAJGJcjs = require('./chunk-FR5PAJGJ.cjs');


var _chunk7NJCCFRTcjs = require('./chunk-7NJCCFRT.cjs');

// src/database/inputTypeSchemas/TopicScalarWhereInputSchema.ts
var _zod = require('zod');
var TopicScalarWhereInputSchema = _zod.z.object({
  AND: _zod.z.union([_zod.z.lazy(() => TopicScalarWhereInputSchema), _zod.z.lazy(() => TopicScalarWhereInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => TopicScalarWhereInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => TopicScalarWhereInputSchema), _zod.z.lazy(() => TopicScalarWhereInputSchema).array()]).optional(),
  value: _zod.z.union([_zod.z.lazy(() => _chunk7NJCCFRTcjs.StringFilterSchema), _zod.z.string()]).optional(),
  kanbanId: _zod.z.union([_zod.z.lazy(() => _chunk2WZ4XBN7cjs.IntNullableFilterSchema), _zod.z.number()]).optional().nullable(),
  createdAt: _zod.z.union([_zod.z.lazy(() => _chunkFR5PAJGJcjs.DateTimeFilterSchema), _zod.z.coerce.date()]).optional(),
  lastAccess: _zod.z.union([_zod.z.lazy(() => _chunkFR5PAJGJcjs.DateTimeFilterSchema), _zod.z.coerce.date()]).optional()
}).strict();
var TopicScalarWhereInputSchema_default = TopicScalarWhereInputSchema;




exports.TopicScalarWhereInputSchema = TopicScalarWhereInputSchema; exports.TopicScalarWhereInputSchema_default = TopicScalarWhereInputSchema_default;
//# sourceMappingURL=chunk-QP6FRHM5.cjs.map