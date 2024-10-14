"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkLHOF3EORcjs = require('./chunk-LHOF3EOR.cjs');


var _chunkCJT2HVYEcjs = require('./chunk-CJT2HVYE.cjs');

// src/database/outputTypeSchemas/DJTCreateArgsSchema.ts
var _zod = require('zod');
var DJTSelectSchema = _zod.z.object({
  id: _zod.z.boolean().optional(),
  type: _zod.z.boolean().optional(),
  data: _zod.z.boolean().optional()
}).strict();
var DJTCreateArgsSchema = _zod.z.object({
  select: DJTSelectSchema.optional(),
  data: _zod.z.union([_chunkLHOF3EORcjs.DJTCreateInputSchema, _chunkCJT2HVYEcjs.DJTUncheckedCreateInputSchema])
}).strict();
var DJTCreateArgsSchema_default = DJTCreateArgsSchema;





exports.DJTSelectSchema = DJTSelectSchema; exports.DJTCreateArgsSchema = DJTCreateArgsSchema; exports.DJTCreateArgsSchema_default = DJTCreateArgsSchema_default;
//# sourceMappingURL=chunk-SEDPPTNA.cjs.map