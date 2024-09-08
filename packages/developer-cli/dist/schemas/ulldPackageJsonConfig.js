import { z } from 'zod';
import { pluginSlotSchema } from '@ulld/developer-schemas/slots';
export const ulldPackageJsonConfig = z.object({
    slots: pluginSlotSchema
});
