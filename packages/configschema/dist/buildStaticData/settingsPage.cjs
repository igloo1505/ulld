'use strict';

var zod = require('zod');

// src/buildStaticData/settingsPage.ts
var settingsPageOutputSchema = zod.z.object({
  title: zod.z.string().optional(),
  subtitle: zod.z.string().optional(),
  href: zod.z.string(),
  pluginName: zod.z.string()
});

exports.settingsPageOutputSchema = settingsPageOutputSchema;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=settingsPage.cjs.map