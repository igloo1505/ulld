"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkSBOXSHOOcjs = require('./chunk-SBOXSHOO.cjs');


var _chunk7XIOIJAHcjs = require('./chunk-7XIOIJAH.cjs');


var _chunkFNC37XSIcjs = require('./chunk-FNC37XSI.cjs');


var _chunkDOTAABR4cjs = require('./chunk-DOTAABR4.cjs');


var _chunkSAQ7FOU5cjs = require('./chunk-SAQ7FOU5.cjs');


var _chunk7SNXTVFRcjs = require('./chunk-7SNXTVFR.cjs');


var _chunkTSE7XCT5cjs = require('./chunk-TSE7XCT5.cjs');


var _chunkOCYQURE7cjs = require('./chunk-OCYQURE7.cjs');


var _chunkXQKVAOTYcjs = require('./chunk-XQKVAOTY.cjs');

// src/database/inputTypeSchemas/BibUpdateOneWithoutEntriesNestedInputSchema.ts
var _zod = require('zod');
var BibUpdateOneWithoutEntriesNestedInputSchema = _zod.z.object({
  create: _zod.z.union([_zod.z.lazy(() => _chunk7SNXTVFRcjs.BibCreateWithoutEntriesInputSchema), _zod.z.lazy(() => _chunkTSE7XCT5cjs.BibUncheckedCreateWithoutEntriesInputSchema)]).optional(),
  connectOrCreate: _zod.z.lazy(() => _chunkSAQ7FOU5cjs.BibCreateOrConnectWithoutEntriesInputSchema).optional(),
  upsert: _zod.z.lazy(() => _chunkSBOXSHOOcjs.BibUpsertWithoutEntriesInputSchema).optional(),
  disconnect: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunkXQKVAOTYcjs.BibWhereInputSchema)]).optional(),
  delete: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunkXQKVAOTYcjs.BibWhereInputSchema)]).optional(),
  connect: _zod.z.lazy(() => _chunkOCYQURE7cjs.BibWhereUniqueInputSchema).optional(),
  update: _zod.z.union([_zod.z.lazy(() => _chunk7XIOIJAHcjs.BibUpdateToOneWithWhereWithoutEntriesInputSchema), _zod.z.lazy(() => _chunkDOTAABR4cjs.BibUpdateWithoutEntriesInputSchema), _zod.z.lazy(() => _chunkFNC37XSIcjs.BibUncheckedUpdateWithoutEntriesInputSchema)]).optional()
}).strict();
var BibUpdateOneWithoutEntriesNestedInputSchema_default = BibUpdateOneWithoutEntriesNestedInputSchema;




exports.BibUpdateOneWithoutEntriesNestedInputSchema = BibUpdateOneWithoutEntriesNestedInputSchema; exports.BibUpdateOneWithoutEntriesNestedInputSchema_default = BibUpdateOneWithoutEntriesNestedInputSchema_default;
//# sourceMappingURL=chunk-E3PZCLDW.cjs.map