"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkNFOKYENJcjs = require('./chunk-NFOKYENJ.cjs');


var _chunkUPB6NHPEcjs = require('./chunk-UPB6NHPE.cjs');


var _chunkCTNTXD6Zcjs = require('./chunk-CTNTXD6Z.cjs');

// src/database/inputTypeSchemas/IpynbUpdateManyWithWhereWithoutTagsInputSchema.ts
var _zod = require('zod');
var IpynbUpdateManyWithWhereWithoutTagsInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkUPB6NHPEcjs.IpynbScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunkCTNTXD6Zcjs.IpynbUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunkNFOKYENJcjs.IpynbUncheckedUpdateManyWithoutTagsInputSchema)])
}).strict();
var IpynbUpdateManyWithWhereWithoutTagsInputSchema_default = IpynbUpdateManyWithWhereWithoutTagsInputSchema;




exports.IpynbUpdateManyWithWhereWithoutTagsInputSchema = IpynbUpdateManyWithWhereWithoutTagsInputSchema; exports.IpynbUpdateManyWithWhereWithoutTagsInputSchema_default = IpynbUpdateManyWithWhereWithoutTagsInputSchema_default;
//# sourceMappingURL=chunk-HPBZMNAG.cjs.map