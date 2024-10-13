"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk6ZBCFI24cjs = require('./chunk-6ZBCFI24.cjs');


var _chunkJWVK3SLDcjs = require('./chunk-JWVK3SLD.cjs');


var _chunkJLR3K3DTcjs = require('./chunk-JLR3K3DT.cjs');

// src/database/outputTypeSchemas/WaitlistRequestUpdateManyArgsSchema.ts
var _zod = require('zod');
var WaitlistRequestUpdateManyArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunk6ZBCFI24cjs.WaitlistRequestUpdateManyMutationInputSchema, _chunkJWVK3SLDcjs.WaitlistRequestUncheckedUpdateManyInputSchema]),
  where: _chunkJLR3K3DTcjs.WaitlistRequestWhereInputSchema.optional()
}).strict();
var WaitlistRequestUpdateManyArgsSchema_default = WaitlistRequestUpdateManyArgsSchema;




exports.WaitlistRequestUpdateManyArgsSchema = WaitlistRequestUpdateManyArgsSchema; exports.WaitlistRequestUpdateManyArgsSchema_default = WaitlistRequestUpdateManyArgsSchema_default;
//# sourceMappingURL=chunk-3OXOPN2D.cjs.map