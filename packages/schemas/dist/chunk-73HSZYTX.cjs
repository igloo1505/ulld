"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk5HP34Z7Acjs = require('./chunk-5HP34Z7A.cjs');


var _chunk7QDITXW5cjs = require('./chunk-7QDITXW5.cjs');


var _chunkETRZB726cjs = require('./chunk-ETRZB726.cjs');

// src/database/outputTypeSchemas/WhiteboardUpdateArgsSchema.ts
var _zod = require('zod');
var WhiteboardSelectSchema = _zod.z.object({
  id: _zod.z.boolean().optional(),
  data: _zod.z.boolean().optional()
}).strict();
var WhiteboardUpdateArgsSchema = _zod.z.object({
  select: WhiteboardSelectSchema.optional(),
  data: _zod.z.union([_chunk5HP34Z7Acjs.WhiteboardUpdateInputSchema, _chunk7QDITXW5cjs.WhiteboardUncheckedUpdateInputSchema]),
  where: _chunkETRZB726cjs.WhiteboardWhereUniqueInputSchema
}).strict();
var WhiteboardUpdateArgsSchema_default = WhiteboardUpdateArgsSchema;





exports.WhiteboardSelectSchema = WhiteboardSelectSchema; exports.WhiteboardUpdateArgsSchema = WhiteboardUpdateArgsSchema; exports.WhiteboardUpdateArgsSchema_default = WhiteboardUpdateArgsSchema_default;
//# sourceMappingURL=chunk-73HSZYTX.cjs.map