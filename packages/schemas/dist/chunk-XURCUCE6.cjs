"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkH5RV6W2Mcjs = require('./chunk-H5RV6W2M.cjs');


var _chunkONT6ZUFNcjs = require('./chunk-ONT6ZUFN.cjs');


var _chunkFVCLRUQWcjs = require('./chunk-FVCLRUQW.cjs');

// src/database/inputTypeSchemas/BibEntryUpdateManyWithWhereWithoutSubjectsInputSchema.ts
var _zod = require('zod');
var BibEntryUpdateManyWithWhereWithoutSubjectsInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkONT6ZUFNcjs.BibEntryScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunkFVCLRUQWcjs.BibEntryUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunkH5RV6W2Mcjs.BibEntryUncheckedUpdateManyWithoutSubjectsInputSchema)])
}).strict();
var BibEntryUpdateManyWithWhereWithoutSubjectsInputSchema_default = BibEntryUpdateManyWithWhereWithoutSubjectsInputSchema;




exports.BibEntryUpdateManyWithWhereWithoutSubjectsInputSchema = BibEntryUpdateManyWithWhereWithoutSubjectsInputSchema; exports.BibEntryUpdateManyWithWhereWithoutSubjectsInputSchema_default = BibEntryUpdateManyWithWhereWithoutSubjectsInputSchema_default;
//# sourceMappingURL=chunk-XURCUCE6.cjs.map