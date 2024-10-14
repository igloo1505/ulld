"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk2OQNILCZcjs = require('./chunk-2OQNILCZ.cjs');


var _chunkSB5HZH7Ncjs = require('./chunk-SB5HZH7N.cjs');


var _chunk5HP34Z7Acjs = require('./chunk-5HP34Z7A.cjs');


var _chunk7QDITXW5cjs = require('./chunk-7QDITXW5.cjs');


var _chunkETRZB726cjs = require('./chunk-ETRZB726.cjs');

// src/database/outputTypeSchemas/WhiteboardUpsertArgsSchema.ts
var _zod = require('zod');
var WhiteboardSelectSchema = _zod.z.object({
  id: _zod.z.boolean().optional(),
  data: _zod.z.boolean().optional()
}).strict();
var WhiteboardUpsertArgsSchema = _zod.z.object({
  select: WhiteboardSelectSchema.optional(),
  where: _chunkETRZB726cjs.WhiteboardWhereUniqueInputSchema,
  create: _zod.z.union([_chunk2OQNILCZcjs.WhiteboardCreateInputSchema, _chunkSB5HZH7Ncjs.WhiteboardUncheckedCreateInputSchema]),
  update: _zod.z.union([_chunk5HP34Z7Acjs.WhiteboardUpdateInputSchema, _chunk7QDITXW5cjs.WhiteboardUncheckedUpdateInputSchema])
}).strict();
var WhiteboardUpsertArgsSchema_default = WhiteboardUpsertArgsSchema;





exports.WhiteboardSelectSchema = WhiteboardSelectSchema; exports.WhiteboardUpsertArgsSchema = WhiteboardUpsertArgsSchema; exports.WhiteboardUpsertArgsSchema_default = WhiteboardUpsertArgsSchema_default;
//# sourceMappingURL=chunk-7ZY3LFZB.cjs.map