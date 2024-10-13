"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkG4YSYX2Dcjs = require('./chunk-G4YSYX2D.cjs');


var _chunkONT6ZUFNcjs = require('./chunk-ONT6ZUFN.cjs');


var _chunkFVCLRUQWcjs = require('./chunk-FVCLRUQW.cjs');

// src/database/inputTypeSchemas/BibEntryUpdateManyWithWhereWithoutBibInputSchema.ts
var _zod = require('zod');
var BibEntryUpdateManyWithWhereWithoutBibInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkONT6ZUFNcjs.BibEntryScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunkFVCLRUQWcjs.BibEntryUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunkG4YSYX2Dcjs.BibEntryUncheckedUpdateManyWithoutBibInputSchema)])
}).strict();
var BibEntryUpdateManyWithWhereWithoutBibInputSchema_default = BibEntryUpdateManyWithWhereWithoutBibInputSchema;




exports.BibEntryUpdateManyWithWhereWithoutBibInputSchema = BibEntryUpdateManyWithWhereWithoutBibInputSchema; exports.BibEntryUpdateManyWithWhereWithoutBibInputSchema_default = BibEntryUpdateManyWithWhereWithoutBibInputSchema_default;
//# sourceMappingURL=chunk-USEWSLUG.cjs.map