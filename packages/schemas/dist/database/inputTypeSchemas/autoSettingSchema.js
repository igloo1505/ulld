import { z } from 'zod';
export const autoSettingSchema = z.enum(['tag', 'topic', 'subject']);
export default autoSettingSchema;
