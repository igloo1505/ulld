"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkGEN2VNYQcjs = require('./chunk-GEN2VNYQ.cjs');


var _chunkBMDCSI4Ncjs = require('./chunk-BMDCSI4N.cjs');


var _chunkHGLQEYTScjs = require('./chunk-HGLQEYTS.cjs');

// src/database/outputTypeSchemas/GoogleCalendarAuthUpdateManyArgsSchema.ts
var _zod = require('zod');
var GoogleCalendarAuthUpdateManyArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkGEN2VNYQcjs.GoogleCalendarAuthUpdateManyMutationInputSchema, _chunkBMDCSI4Ncjs.GoogleCalendarAuthUncheckedUpdateManyInputSchema]),
  where: _chunkHGLQEYTScjs.GoogleCalendarAuthWhereInputSchema.optional()
}).strict();
var GoogleCalendarAuthUpdateManyArgsSchema_default = GoogleCalendarAuthUpdateManyArgsSchema;




exports.GoogleCalendarAuthUpdateManyArgsSchema = GoogleCalendarAuthUpdateManyArgsSchema; exports.GoogleCalendarAuthUpdateManyArgsSchema_default = GoogleCalendarAuthUpdateManyArgsSchema_default;
//# sourceMappingURL=chunk-C7BEXCMG.cjs.map