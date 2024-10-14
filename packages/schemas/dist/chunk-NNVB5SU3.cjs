"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkVI3ITOUAcjs = require('./chunk-VI3ITOUA.cjs');

// src/database/outputTypeSchemas/DJTCreateManyAndReturnArgsSchema.ts
var _zod = require('zod');
var DJTCreateManyAndReturnArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkVI3ITOUAcjs.DJTCreateManyInputSchema, _chunkVI3ITOUAcjs.DJTCreateManyInputSchema.array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var DJTCreateManyAndReturnArgsSchema_default = DJTCreateManyAndReturnArgsSchema;




exports.DJTCreateManyAndReturnArgsSchema = DJTCreateManyAndReturnArgsSchema; exports.DJTCreateManyAndReturnArgsSchema_default = DJTCreateManyAndReturnArgsSchema_default;
//# sourceMappingURL=chunk-NNVB5SU3.cjs.map