import { z } from 'zod';

// src/buildStaticData/settingsPage.ts
var settingsPageOutputSchema = z.object({
  title: z.string().optional(),
  subtitle: z.string().optional(),
  href: z.string(),
  pluginName: z.string()
});

export { settingsPageOutputSchema };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=chunk-BOVJOOSV.js.map