"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkW7NRROR3cjs = require('./chunk-W7NRROR3.cjs');


var _chunk5ICAT5AXcjs = require('./chunk-5ICAT5AX.cjs');


var _chunk4FYHHISDcjs = require('./chunk-4FYHHISD.cjs');

// src/database/outputTypeSchemas/BusinessContactUpdateManyArgsSchema.ts
var _zod = require('zod');
var BusinessContactUpdateManyArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkW7NRROR3cjs.BusinessContactUpdateManyMutationInputSchema, _chunk5ICAT5AXcjs.BusinessContactUncheckedUpdateManyInputSchema]),
  where: _chunk4FYHHISDcjs.BusinessContactWhereInputSchema.optional()
}).strict();
var BusinessContactUpdateManyArgsSchema_default = BusinessContactUpdateManyArgsSchema;




exports.BusinessContactUpdateManyArgsSchema = BusinessContactUpdateManyArgsSchema; exports.BusinessContactUpdateManyArgsSchema_default = BusinessContactUpdateManyArgsSchema_default;
//# sourceMappingURL=chunk-K2FVSNXU.cjs.map