"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkVR42MVQXcjs = require('./chunk-VR42MVQX.cjs');

// src/database/outputTypeSchemas/IpynbCountOutputTypeArgsSchema.ts
var _zod = require('zod');
var IpynbCountOutputTypeArgsSchema = _zod.z.object({
  select: _zod.z.lazy(() => _chunkVR42MVQXcjs.IpynbCountOutputTypeSelectSchema).nullish()
}).strict();
var IpynbCountOutputTypeArgsSchema_default = _chunkVR42MVQXcjs.IpynbCountOutputTypeSelectSchema;




exports.IpynbCountOutputTypeArgsSchema = IpynbCountOutputTypeArgsSchema; exports.IpynbCountOutputTypeArgsSchema_default = IpynbCountOutputTypeArgsSchema_default;
//# sourceMappingURL=chunk-77HUVV5N.cjs.map