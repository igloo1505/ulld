"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkIJ3AMDIAcjs = require('./chunk-IJ3AMDIA.cjs');


var _chunk54Y7O4A2cjs = require('./chunk-54Y7O4A2.cjs');


var _chunkTERO4NRDcjs = require('./chunk-TERO4NRD.cjs');

// src/database/inputTypeSchemas/ReadingListUpdateManyWithWhereWithoutMdxNotesInputSchema.ts
var _zod = require('zod');
var ReadingListUpdateManyWithWhereWithoutMdxNotesInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunk54Y7O4A2cjs.ReadingListScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunkTERO4NRDcjs.ReadingListUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunkIJ3AMDIAcjs.ReadingListUncheckedUpdateManyWithoutMdxNotesInputSchema)])
}).strict();
var ReadingListUpdateManyWithWhereWithoutMdxNotesInputSchema_default = ReadingListUpdateManyWithWhereWithoutMdxNotesInputSchema;




exports.ReadingListUpdateManyWithWhereWithoutMdxNotesInputSchema = ReadingListUpdateManyWithWhereWithoutMdxNotesInputSchema; exports.ReadingListUpdateManyWithWhereWithoutMdxNotesInputSchema_default = ReadingListUpdateManyWithWhereWithoutMdxNotesInputSchema_default;
//# sourceMappingURL=chunk-QC5YGFWT.cjs.map