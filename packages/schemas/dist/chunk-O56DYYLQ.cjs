"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkXHZ7TI7Qcjs = require('./chunk-XHZ7TI7Q.cjs');


var _chunkDM4G44NRcjs = require('./chunk-DM4G44NR.cjs');

// src/database/outputTypeSchemas/DJTCreateArgsSchema.ts
var _zod = require('zod');
var DJTSelectSchema = _zod.z.object({
  id: _zod.z.boolean().optional(),
  type: _zod.z.boolean().optional(),
  data: _zod.z.boolean().optional()
}).strict();
var DJTCreateArgsSchema = _zod.z.object({
  select: DJTSelectSchema.optional(),
  data: _zod.z.union([_chunkXHZ7TI7Qcjs.DJTCreateInputSchema, _chunkDM4G44NRcjs.DJTUncheckedCreateInputSchema])
}).strict();
var DJTCreateArgsSchema_default = DJTCreateArgsSchema;





exports.DJTSelectSchema = DJTSelectSchema; exports.DJTCreateArgsSchema = DJTCreateArgsSchema; exports.DJTCreateArgsSchema_default = DJTCreateArgsSchema_default;
//# sourceMappingURL=chunk-O56DYYLQ.cjs.map