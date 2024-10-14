import { z } from 'zod';

export const AutoSettingScalarFieldEnumSchema = z.enum(['id','type','glob','value']);

export default AutoSettingScalarFieldEnumSchema;
