"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk4ZDGSQT2cjs = require('./chunk-4ZDGSQT2.cjs');

// src/database/outputTypeSchemas/WhiteboardCreateManyArgsSchema.ts
var _zod = require('zod');
var WhiteboardCreateManyArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunk4ZDGSQT2cjs.WhiteboardCreateManyInputSchema, _chunk4ZDGSQT2cjs.WhiteboardCreateManyInputSchema.array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var WhiteboardCreateManyArgsSchema_default = WhiteboardCreateManyArgsSchema;




exports.WhiteboardCreateManyArgsSchema = WhiteboardCreateManyArgsSchema; exports.WhiteboardCreateManyArgsSchema_default = WhiteboardCreateManyArgsSchema_default;
//# sourceMappingURL=chunk-RCMQGYZP.cjs.map