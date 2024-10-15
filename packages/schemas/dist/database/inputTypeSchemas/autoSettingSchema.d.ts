import { z } from 'zod';
export declare const autoSettingSchema: z.ZodEnum<["tag", "topic", "subject"]>;
export type autoSettingType = `${z.infer<typeof autoSettingSchema>}`;
export default autoSettingSchema;
//# sourceMappingURL=autoSettingSchema.d.ts.map