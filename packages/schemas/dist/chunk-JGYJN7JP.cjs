"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkCMIG2TTIcjs = require('./chunk-CMIG2TTI.cjs');


var _chunkHGAJCLIXcjs = require('./chunk-HGAJCLIX.cjs');


var _chunkOSYB6JG7cjs = require('./chunk-OSYB6JG7.cjs');

// src/database/outputTypeSchemas/WaitlistRequestUpdateManyArgsSchema.ts
var _zod = require('zod');
var WaitlistRequestUpdateManyArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkCMIG2TTIcjs.WaitlistRequestUpdateManyMutationInputSchema, _chunkHGAJCLIXcjs.WaitlistRequestUncheckedUpdateManyInputSchema]),
  where: _chunkOSYB6JG7cjs.WaitlistRequestWhereInputSchema.optional()
}).strict();
var WaitlistRequestUpdateManyArgsSchema_default = WaitlistRequestUpdateManyArgsSchema;




exports.WaitlistRequestUpdateManyArgsSchema = WaitlistRequestUpdateManyArgsSchema; exports.WaitlistRequestUpdateManyArgsSchema_default = WaitlistRequestUpdateManyArgsSchema_default;
//# sourceMappingURL=chunk-JGYJN7JP.cjs.map