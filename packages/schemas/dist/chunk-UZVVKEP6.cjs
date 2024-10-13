"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkVBYLN5S4cjs = require('./chunk-VBYLN5S4.cjs');


var _chunkTNGLEEEDcjs = require('./chunk-TNGLEEED.cjs');


var _chunkXQKVAOTYcjs = require('./chunk-XQKVAOTY.cjs');

// src/database/outputTypeSchemas/IpynbUpdateManyArgsSchema.ts
var _zod = require('zod');
var IpynbUpdateManyArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkTNGLEEEDcjs.IpynbUpdateManyMutationInputSchema, _chunkVBYLN5S4cjs.IpynbUncheckedUpdateManyInputSchema]),
  where: _chunkXQKVAOTYcjs.IpynbWhereInputSchema.optional()
}).strict();
var IpynbUpdateManyArgsSchema_default = IpynbUpdateManyArgsSchema;




exports.IpynbUpdateManyArgsSchema = IpynbUpdateManyArgsSchema; exports.IpynbUpdateManyArgsSchema_default = IpynbUpdateManyArgsSchema_default;
//# sourceMappingURL=chunk-UZVVKEP6.cjs.map