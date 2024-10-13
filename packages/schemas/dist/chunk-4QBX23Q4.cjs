"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkO67YT4Z2cjs = require('./chunk-O67YT4Z2.cjs');

// src/database/outputTypeSchemas/DietCountOutputTypeArgsSchema.ts
var _zod = require('zod');
var DietCountOutputTypeArgsSchema = _zod.z.object({
  select: _zod.z.lazy(() => _chunkO67YT4Z2cjs.DietCountOutputTypeSelectSchema).nullish()
}).strict();
var DietCountOutputTypeArgsSchema_default = _chunkO67YT4Z2cjs.DietCountOutputTypeSelectSchema;




exports.DietCountOutputTypeArgsSchema = DietCountOutputTypeArgsSchema; exports.DietCountOutputTypeArgsSchema_default = DietCountOutputTypeArgsSchema_default;
//# sourceMappingURL=chunk-4QBX23Q4.cjs.map