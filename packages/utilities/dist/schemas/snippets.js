import { languageList_default } from '../chunk-NO2ZLG2J.js';
import '../chunk-F3FYYIAV.js';
import { z } from 'zod';

var snippetValidator = z.object({
  id: z.number().int(),
  content: z.string(),
  description: z.string(),
  keywords: z.string().array().default([]),
  language: z.enum(languageList_default)
});

export { snippetValidator };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=snippets.js.map