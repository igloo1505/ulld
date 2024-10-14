"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkLIXKYKCPcjs = require('./chunk-LIXKYKCP.cjs');

// src/database/outputTypeSchemas/DietCreateManyAndReturnArgsSchema.ts
var _zod = require('zod');
var DietCreateManyAndReturnArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkLIXKYKCPcjs.DietCreateManyInputSchema, _chunkLIXKYKCPcjs.DietCreateManyInputSchema.array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var DietCreateManyAndReturnArgsSchema_default = DietCreateManyAndReturnArgsSchema;




exports.DietCreateManyAndReturnArgsSchema = DietCreateManyAndReturnArgsSchema; exports.DietCreateManyAndReturnArgsSchema_default = DietCreateManyAndReturnArgsSchema_default;
//# sourceMappingURL=chunk-PMKGXQNZ.cjs.map