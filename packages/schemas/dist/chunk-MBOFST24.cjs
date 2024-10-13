"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkS7EIXWTQcjs = require('./chunk-S7EIXWTQ.cjs');

// src/database/outputTypeSchemas/KanBanCardCreateManyArgsSchema.ts
var _zod = require('zod');
var KanBanCardCreateManyArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkS7EIXWTQcjs.KanBanCardCreateManyInputSchema, _chunkS7EIXWTQcjs.KanBanCardCreateManyInputSchema.array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var KanBanCardCreateManyArgsSchema_default = KanBanCardCreateManyArgsSchema;




exports.KanBanCardCreateManyArgsSchema = KanBanCardCreateManyArgsSchema; exports.KanBanCardCreateManyArgsSchema_default = KanBanCardCreateManyArgsSchema_default;
//# sourceMappingURL=chunk-MBOFST24.cjs.map