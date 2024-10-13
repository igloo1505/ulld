"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkLWBOPGPMcjs = require('./chunk-LWBOPGPM.cjs');

// src/database/outputTypeSchemas/IpynbCountOutputTypeArgsSchema.ts
var _zod = require('zod');
var IpynbCountOutputTypeArgsSchema = _zod.z.object({
  select: _zod.z.lazy(() => _chunkLWBOPGPMcjs.IpynbCountOutputTypeSelectSchema).nullish()
}).strict();
var IpynbCountOutputTypeArgsSchema_default = _chunkLWBOPGPMcjs.IpynbCountOutputTypeSelectSchema;




exports.IpynbCountOutputTypeArgsSchema = IpynbCountOutputTypeArgsSchema; exports.IpynbCountOutputTypeArgsSchema_default = IpynbCountOutputTypeArgsSchema_default;
//# sourceMappingURL=chunk-P5LOQ5IH.cjs.map