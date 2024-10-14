"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk3M4YL7HYcjs = require('./chunk-3M4YL7HY.cjs');


var _chunk2MYBOFS7cjs = require('./chunk-2MYBOFS7.cjs');

// src/database/outputTypeSchemas/KanBanCardArgsSchema.ts
var _zod = require('zod');
var KanBanCardArgsSchema = _zod.z.object({
  select: _zod.z.lazy(() => _chunk3M4YL7HYcjs.KanBanCardSelectSchema).optional(),
  include: _zod.z.lazy(() => _chunk2MYBOFS7cjs.KanBanCardIncludeSchema).optional()
}).strict();
var KanBanCardArgsSchema_default = KanBanCardArgsSchema;




exports.KanBanCardArgsSchema = KanBanCardArgsSchema; exports.KanBanCardArgsSchema_default = KanBanCardArgsSchema_default;
//# sourceMappingURL=chunk-ROVM37FG.cjs.map