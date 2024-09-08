import { logLevelSchema } from './chunk-PESBV4SX.js';
import { z } from 'zod';

var terminalConfigSchema = z.object({
  logLevel: logLevelSchema.default("info")
}).default({});

export { terminalConfigSchema };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=chunk-5VKVDMSO.js.map