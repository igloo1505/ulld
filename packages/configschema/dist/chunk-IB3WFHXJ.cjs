"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/buildStaticData/settingsPage.ts
var _zod = require('zod');
var settingsPageOutputSchema = _zod.z.object({
  title: _zod.z.string().optional(),
  subtitle: _zod.z.string().optional(),
  href: _zod.z.string(),
  pluginName: _zod.z.string()
});



exports.settingsPageOutputSchema = settingsPageOutputSchema;
//# sourceMappingURL=chunk-IB3WFHXJ.cjs.map