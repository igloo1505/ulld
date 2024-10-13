"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk7IFFY72Mcjs = require('./chunk-7IFFY72M.cjs');


var _chunkW33EWOU7cjs = require('./chunk-W33EWOU7.cjs');


var _chunkTNGLEEEDcjs = require('./chunk-TNGLEEED.cjs');

// src/database/inputTypeSchemas/IpynbUpdateManyWithWhereWithoutTopicsInputSchema.ts
var _zod = require('zod');
var IpynbUpdateManyWithWhereWithoutTopicsInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkW33EWOU7cjs.IpynbScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunkTNGLEEEDcjs.IpynbUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunk7IFFY72Mcjs.IpynbUncheckedUpdateManyWithoutTopicsInputSchema)])
}).strict();
var IpynbUpdateManyWithWhereWithoutTopicsInputSchema_default = IpynbUpdateManyWithWhereWithoutTopicsInputSchema;




exports.IpynbUpdateManyWithWhereWithoutTopicsInputSchema = IpynbUpdateManyWithWhereWithoutTopicsInputSchema; exports.IpynbUpdateManyWithWhereWithoutTopicsInputSchema_default = IpynbUpdateManyWithWhereWithoutTopicsInputSchema_default;
//# sourceMappingURL=chunk-RETT422H.cjs.map