"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkS7EIXWTQcjs = require('./chunk-S7EIXWTQ.cjs');

// src/database/outputTypeSchemas/KanBanCardCreateManyAndReturnArgsSchema.ts
var _zod = require('zod');
var KanBanCardCreateManyAndReturnArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkS7EIXWTQcjs.KanBanCardCreateManyInputSchema, _chunkS7EIXWTQcjs.KanBanCardCreateManyInputSchema.array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var KanBanCardCreateManyAndReturnArgsSchema_default = KanBanCardCreateManyAndReturnArgsSchema;




exports.KanBanCardCreateManyAndReturnArgsSchema = KanBanCardCreateManyAndReturnArgsSchema; exports.KanBanCardCreateManyAndReturnArgsSchema_default = KanBanCardCreateManyAndReturnArgsSchema_default;
//# sourceMappingURL=chunk-QZOJHFB7.cjs.map