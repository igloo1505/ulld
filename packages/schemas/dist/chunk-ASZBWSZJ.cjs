"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk4ZDGSQT2cjs = require('./chunk-4ZDGSQT2.cjs');

// src/database/outputTypeSchemas/WhiteboardCreateManyAndReturnArgsSchema.ts
var _zod = require('zod');
var WhiteboardCreateManyAndReturnArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunk4ZDGSQT2cjs.WhiteboardCreateManyInputSchema, _chunk4ZDGSQT2cjs.WhiteboardCreateManyInputSchema.array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var WhiteboardCreateManyAndReturnArgsSchema_default = WhiteboardCreateManyAndReturnArgsSchema;




exports.WhiteboardCreateManyAndReturnArgsSchema = WhiteboardCreateManyAndReturnArgsSchema; exports.WhiteboardCreateManyAndReturnArgsSchema_default = WhiteboardCreateManyAndReturnArgsSchema_default;
//# sourceMappingURL=chunk-ASZBWSZJ.cjs.map