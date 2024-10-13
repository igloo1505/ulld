"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk7SNXTVFRcjs = require('./chunk-7SNXTVFR.cjs');


var _chunkTSE7XCT5cjs = require('./chunk-TSE7XCT5.cjs');


var _chunkOCYQURE7cjs = require('./chunk-OCYQURE7.cjs');

// src/database/inputTypeSchemas/BibCreateOrConnectWithoutEntriesInputSchema.ts
var _zod = require('zod');
var BibCreateOrConnectWithoutEntriesInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkOCYQURE7cjs.BibWhereUniqueInputSchema),
  create: _zod.z.union([_zod.z.lazy(() => _chunk7SNXTVFRcjs.BibCreateWithoutEntriesInputSchema), _zod.z.lazy(() => _chunkTSE7XCT5cjs.BibUncheckedCreateWithoutEntriesInputSchema)])
}).strict();
var BibCreateOrConnectWithoutEntriesInputSchema_default = BibCreateOrConnectWithoutEntriesInputSchema;




exports.BibCreateOrConnectWithoutEntriesInputSchema = BibCreateOrConnectWithoutEntriesInputSchema; exports.BibCreateOrConnectWithoutEntriesInputSchema_default = BibCreateOrConnectWithoutEntriesInputSchema_default;
//# sourceMappingURL=chunk-SAQ7FOU5.cjs.map