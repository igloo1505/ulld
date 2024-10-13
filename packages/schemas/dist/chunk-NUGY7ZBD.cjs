"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk3QNN4VUKcjs = require('./chunk-3QNN4VUK.cjs');


var _chunkW33EWOU7cjs = require('./chunk-W33EWOU7.cjs');


var _chunkTNGLEEEDcjs = require('./chunk-TNGLEEED.cjs');

// src/database/inputTypeSchemas/IpynbUpdateManyWithWhereWithoutTagsInputSchema.ts
var _zod = require('zod');
var IpynbUpdateManyWithWhereWithoutTagsInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkW33EWOU7cjs.IpynbScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunkTNGLEEEDcjs.IpynbUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunk3QNN4VUKcjs.IpynbUncheckedUpdateManyWithoutTagsInputSchema)])
}).strict();
var IpynbUpdateManyWithWhereWithoutTagsInputSchema_default = IpynbUpdateManyWithWhereWithoutTagsInputSchema;




exports.IpynbUpdateManyWithWhereWithoutTagsInputSchema = IpynbUpdateManyWithWhereWithoutTagsInputSchema; exports.IpynbUpdateManyWithWhereWithoutTagsInputSchema_default = IpynbUpdateManyWithWhereWithoutTagsInputSchema_default;
//# sourceMappingURL=chunk-NUGY7ZBD.cjs.map