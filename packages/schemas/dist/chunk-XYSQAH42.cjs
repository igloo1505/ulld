"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk3AMDF7VMcjs = require('./chunk-3AMDF7VM.cjs');


var _chunkW33EWOU7cjs = require('./chunk-W33EWOU7.cjs');


var _chunkTNGLEEEDcjs = require('./chunk-TNGLEEED.cjs');

// src/database/inputTypeSchemas/IpynbUpdateManyWithWhereWithoutSequentialListInputSchema.ts
var _zod = require('zod');
var IpynbUpdateManyWithWhereWithoutSequentialListInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkW33EWOU7cjs.IpynbScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunkTNGLEEEDcjs.IpynbUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunk3AMDF7VMcjs.IpynbUncheckedUpdateManyWithoutSequentialListInputSchema)])
}).strict();
var IpynbUpdateManyWithWhereWithoutSequentialListInputSchema_default = IpynbUpdateManyWithWhereWithoutSequentialListInputSchema;




exports.IpynbUpdateManyWithWhereWithoutSequentialListInputSchema = IpynbUpdateManyWithWhereWithoutSequentialListInputSchema; exports.IpynbUpdateManyWithWhereWithoutSequentialListInputSchema_default = IpynbUpdateManyWithWhereWithoutSequentialListInputSchema_default;
//# sourceMappingURL=chunk-XYSQAH42.cjs.map