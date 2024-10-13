"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkCQEGG3PWcjs = require('./chunk-CQEGG3PW.cjs');


var _chunkVJWDJ55Vcjs = require('./chunk-VJWDJ55V.cjs');

// src/database/outputTypeSchemas/WhiteboardCreateArgsSchema.ts
var _zod = require('zod');
var WhiteboardSelectSchema = _zod.z.object({
  id: _zod.z.boolean().optional(),
  data: _zod.z.boolean().optional()
}).strict();
var WhiteboardCreateArgsSchema = _zod.z.object({
  select: WhiteboardSelectSchema.optional(),
  data: _zod.z.union([_chunkCQEGG3PWcjs.WhiteboardCreateInputSchema, _chunkVJWDJ55Vcjs.WhiteboardUncheckedCreateInputSchema])
}).strict();
var WhiteboardCreateArgsSchema_default = WhiteboardCreateArgsSchema;





exports.WhiteboardSelectSchema = WhiteboardSelectSchema; exports.WhiteboardCreateArgsSchema = WhiteboardCreateArgsSchema; exports.WhiteboardCreateArgsSchema_default = WhiteboardCreateArgsSchema_default;
//# sourceMappingURL=chunk-MQSFW552.cjs.map