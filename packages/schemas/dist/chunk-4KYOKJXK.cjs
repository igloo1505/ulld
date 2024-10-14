"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkGD2AZJ6Ncjs = require('./chunk-GD2AZJ6N.cjs');


var _chunkGYE7M5U5cjs = require('./chunk-GYE7M5U5.cjs');


var _chunkZOSYZ5FXcjs = require('./chunk-ZOSYZ5FX.cjs');

// src/database/outputTypeSchemas/RandomImageUpdateManyArgsSchema.ts
var _zod = require('zod');
var RandomImageUpdateManyArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkGD2AZJ6Ncjs.RandomImageUpdateManyMutationInputSchema, _chunkGYE7M5U5cjs.RandomImageUncheckedUpdateManyInputSchema]),
  where: _chunkZOSYZ5FXcjs.RandomImageWhereInputSchema.optional()
}).strict();
var RandomImageUpdateManyArgsSchema_default = RandomImageUpdateManyArgsSchema;




exports.RandomImageUpdateManyArgsSchema = RandomImageUpdateManyArgsSchema; exports.RandomImageUpdateManyArgsSchema_default = RandomImageUpdateManyArgsSchema_default;
//# sourceMappingURL=chunk-4KYOKJXK.cjs.map