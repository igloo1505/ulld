"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkSAQ7FOU5cjs = require('./chunk-SAQ7FOU5.cjs');


var _chunk7SNXTVFRcjs = require('./chunk-7SNXTVFR.cjs');


var _chunkTSE7XCT5cjs = require('./chunk-TSE7XCT5.cjs');


var _chunkOCYQURE7cjs = require('./chunk-OCYQURE7.cjs');

// src/database/inputTypeSchemas/BibCreateNestedOneWithoutEntriesInputSchema.ts
var _zod = require('zod');
var BibCreateNestedOneWithoutEntriesInputSchema = _zod.z.object({
  create: _zod.z.union([_zod.z.lazy(() => _chunk7SNXTVFRcjs.BibCreateWithoutEntriesInputSchema), _zod.z.lazy(() => _chunkTSE7XCT5cjs.BibUncheckedCreateWithoutEntriesInputSchema)]).optional(),
  connectOrCreate: _zod.z.lazy(() => _chunkSAQ7FOU5cjs.BibCreateOrConnectWithoutEntriesInputSchema).optional(),
  connect: _zod.z.lazy(() => _chunkOCYQURE7cjs.BibWhereUniqueInputSchema).optional()
}).strict();
var BibCreateNestedOneWithoutEntriesInputSchema_default = BibCreateNestedOneWithoutEntriesInputSchema;




exports.BibCreateNestedOneWithoutEntriesInputSchema = BibCreateNestedOneWithoutEntriesInputSchema; exports.BibCreateNestedOneWithoutEntriesInputSchema_default = BibCreateNestedOneWithoutEntriesInputSchema_default;
//# sourceMappingURL=chunk-UTUNCYVC.cjs.map