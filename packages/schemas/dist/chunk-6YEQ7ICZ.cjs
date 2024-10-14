"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkL6YL4IOBcjs = require('./chunk-L6YL4IOB.cjs');

// src/database/outputTypeSchemas/DietCountOutputTypeArgsSchema.ts
var _zod = require('zod');
var DietCountOutputTypeArgsSchema = _zod.z.object({
  select: _zod.z.lazy(() => _chunkL6YL4IOBcjs.DietCountOutputTypeSelectSchema).nullish()
}).strict();
var DietCountOutputTypeArgsSchema_default = _chunkL6YL4IOBcjs.DietCountOutputTypeSelectSchema;




exports.DietCountOutputTypeArgsSchema = DietCountOutputTypeArgsSchema; exports.DietCountOutputTypeArgsSchema_default = DietCountOutputTypeArgsSchema_default;
//# sourceMappingURL=chunk-6YEQ7ICZ.cjs.map