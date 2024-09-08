"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkLAM7YAS5cjs = require('./chunk-LAM7YAS5.cjs');

// src/developer/navigationLink.ts
var _zod = require('zod');
var navigationLinkSchema = _zod.z.object({
  label: _zod.z.string(),
  href: _zod.z.string(),
  icon: _zod.z.string().optional(),
  pluginName: _zod.z.string().optional(),
  category: _chunkLAM7YAS5cjs.navigationLinkCategory.default("general")
});



exports.navigationLinkSchema = navigationLinkSchema;
//# sourceMappingURL=chunk-LKRJO5IZ.cjs.map