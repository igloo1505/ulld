"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkYMI2WTSMcjs = require('./chunk-YMI2WTSM.cjs');


var _chunkLXWCF2PFcjs = require('./chunk-LXWCF2PF.cjs');


var _chunkH7ATQFXCcjs = require('./chunk-H7ATQFXC.cjs');

// src/database/outputTypeSchemas/RandomImageUpdateManyArgsSchema.ts
var _zod = require('zod');
var RandomImageUpdateManyArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkYMI2WTSMcjs.RandomImageUpdateManyMutationInputSchema, _chunkLXWCF2PFcjs.RandomImageUncheckedUpdateManyInputSchema]),
  where: _chunkH7ATQFXCcjs.RandomImageWhereInputSchema.optional()
}).strict();
var RandomImageUpdateManyArgsSchema_default = RandomImageUpdateManyArgsSchema;




exports.RandomImageUpdateManyArgsSchema = RandomImageUpdateManyArgsSchema; exports.RandomImageUpdateManyArgsSchema_default = RandomImageUpdateManyArgsSchema_default;
//# sourceMappingURL=chunk-6SQV5FGI.cjs.map