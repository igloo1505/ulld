"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkIG4FIZVZcjs = require('./chunk-IG4FIZVZ.cjs');


var _chunk2TN6PYK3cjs = require('./chunk-2TN6PYK3.cjs');

// src/database/outputTypeSchemas/KanBanCardArgsSchema.ts
var _zod = require('zod');
var KanBanCardArgsSchema = _zod.z.object({
  select: _zod.z.lazy(() => _chunkIG4FIZVZcjs.KanBanCardSelectSchema).optional(),
  include: _zod.z.lazy(() => _chunk2TN6PYK3cjs.KanBanCardIncludeSchema).optional()
}).strict();
var KanBanCardArgsSchema_default = KanBanCardArgsSchema;




exports.KanBanCardArgsSchema = KanBanCardArgsSchema; exports.KanBanCardArgsSchema_default = KanBanCardArgsSchema_default;
//# sourceMappingURL=chunk-4OEM7E25.cjs.map