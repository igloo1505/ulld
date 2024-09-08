"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkI7I3Z7ILcjs = require('./chunk-I7I3Z7IL.cjs');

// src/developer/navigationLink.ts
var _zod = require('zod');
var navigationLinkSchema = _zod.z.object({
  label: _zod.z.string(),
  href: _zod.z.string(),
  icon: _zod.z.string().optional(),
  pluginName: _zod.z.string().optional(),
  category: _chunkI7I3Z7ILcjs.navigationLinkCategory.default("general")
});



exports.navigationLinkSchema = navigationLinkSchema;
//# sourceMappingURL=chunk-7FRG3H7V.cjs.map