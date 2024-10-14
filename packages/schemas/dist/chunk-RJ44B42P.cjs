"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk2OQNILCZcjs = require('./chunk-2OQNILCZ.cjs');


var _chunkSB5HZH7Ncjs = require('./chunk-SB5HZH7N.cjs');

// src/database/outputTypeSchemas/WhiteboardCreateArgsSchema.ts
var _zod = require('zod');
var WhiteboardSelectSchema = _zod.z.object({
  id: _zod.z.boolean().optional(),
  data: _zod.z.boolean().optional()
}).strict();
var WhiteboardCreateArgsSchema = _zod.z.object({
  select: WhiteboardSelectSchema.optional(),
  data: _zod.z.union([_chunk2OQNILCZcjs.WhiteboardCreateInputSchema, _chunkSB5HZH7Ncjs.WhiteboardUncheckedCreateInputSchema])
}).strict();
var WhiteboardCreateArgsSchema_default = WhiteboardCreateArgsSchema;





exports.WhiteboardSelectSchema = WhiteboardSelectSchema; exports.WhiteboardCreateArgsSchema = WhiteboardCreateArgsSchema; exports.WhiteboardCreateArgsSchema_default = WhiteboardCreateArgsSchema_default;
//# sourceMappingURL=chunk-RJ44B42P.cjs.map