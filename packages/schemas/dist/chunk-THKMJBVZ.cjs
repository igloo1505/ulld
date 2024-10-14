"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkXIFXR42Ecjs = require('./chunk-XIFXR42E.cjs');


var _chunkFSUP6TTZcjs = require('./chunk-FSUP6TTZ.cjs');


var _chunkHYOFN6RRcjs = require('./chunk-HYOFN6RR.cjs');

// src/database/inputTypeSchemas/BibEntryCreateOrConnectWithoutBibInputSchema.ts
var _zod = require('zod');
var BibEntryCreateOrConnectWithoutBibInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkHYOFN6RRcjs.BibEntryWhereUniqueInputSchema),
  create: _zod.z.union([_zod.z.lazy(() => _chunkXIFXR42Ecjs.BibEntryCreateWithoutBibInputSchema), _zod.z.lazy(() => _chunkFSUP6TTZcjs.BibEntryUncheckedCreateWithoutBibInputSchema)])
}).strict();
var BibEntryCreateOrConnectWithoutBibInputSchema_default = BibEntryCreateOrConnectWithoutBibInputSchema;




exports.BibEntryCreateOrConnectWithoutBibInputSchema = BibEntryCreateOrConnectWithoutBibInputSchema; exports.BibEntryCreateOrConnectWithoutBibInputSchema_default = BibEntryCreateOrConnectWithoutBibInputSchema_default;
//# sourceMappingURL=chunk-THKMJBVZ.cjs.map