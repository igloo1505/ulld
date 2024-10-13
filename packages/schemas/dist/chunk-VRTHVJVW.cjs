"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkGBHC76DWcjs = require('./chunk-GBHC76DW.cjs');


var _chunkTI3TGPDFcjs = require('./chunk-TI3TGPDF.cjs');


var _chunkNCMAIJ2Scjs = require('./chunk-NCMAIJ2S.cjs');

// src/database/outputTypeSchemas/GoogleCalendarAuthUpdateManyArgsSchema.ts
var _zod = require('zod');
var GoogleCalendarAuthUpdateManyArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkGBHC76DWcjs.GoogleCalendarAuthUpdateManyMutationInputSchema, _chunkTI3TGPDFcjs.GoogleCalendarAuthUncheckedUpdateManyInputSchema]),
  where: _chunkNCMAIJ2Scjs.GoogleCalendarAuthWhereInputSchema.optional()
}).strict();
var GoogleCalendarAuthUpdateManyArgsSchema_default = GoogleCalendarAuthUpdateManyArgsSchema;




exports.GoogleCalendarAuthUpdateManyArgsSchema = GoogleCalendarAuthUpdateManyArgsSchema; exports.GoogleCalendarAuthUpdateManyArgsSchema_default = GoogleCalendarAuthUpdateManyArgsSchema_default;
//# sourceMappingURL=chunk-VRTHVJVW.cjs.map