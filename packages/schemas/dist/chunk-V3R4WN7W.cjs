"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkMN2XQC5Gcjs = require('./chunk-MN2XQC5G.cjs');

// src/database/outputTypeSchemas/BibCountOutputTypeArgsSchema.ts
var _zod = require('zod');
var BibCountOutputTypeArgsSchema = _zod.z.object({
  select: _zod.z.lazy(() => _chunkMN2XQC5Gcjs.BibCountOutputTypeSelectSchema).nullish()
}).strict();
var BibCountOutputTypeArgsSchema_default = _chunkMN2XQC5Gcjs.BibCountOutputTypeSelectSchema;




exports.BibCountOutputTypeArgsSchema = BibCountOutputTypeArgsSchema; exports.BibCountOutputTypeArgsSchema_default = BibCountOutputTypeArgsSchema_default;
//# sourceMappingURL=chunk-V3R4WN7W.cjs.map