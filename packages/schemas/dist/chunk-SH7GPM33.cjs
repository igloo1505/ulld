"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkQOIHYEE3cjs = require('./chunk-QOIHYEE3.cjs');

// src/database/outputTypeSchemas/DietaryItemCountOutputTypeArgsSchema.ts
var _zod = require('zod');
var DietaryItemCountOutputTypeArgsSchema = _zod.z.object({
  select: _zod.z.lazy(() => _chunkQOIHYEE3cjs.DietaryItemCountOutputTypeSelectSchema).nullish()
}).strict();
var DietaryItemCountOutputTypeArgsSchema_default = _chunkQOIHYEE3cjs.DietaryItemCountOutputTypeSelectSchema;




exports.DietaryItemCountOutputTypeArgsSchema = DietaryItemCountOutputTypeArgsSchema; exports.DietaryItemCountOutputTypeArgsSchema_default = DietaryItemCountOutputTypeArgsSchema_default;
//# sourceMappingURL=chunk-SH7GPM33.cjs.map