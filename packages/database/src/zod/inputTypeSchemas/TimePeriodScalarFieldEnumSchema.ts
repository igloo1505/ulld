import { z } from 'zod';

export const TimePeriodScalarFieldEnumSchema = z.enum(['id','start','end','dietId']);

export default TimePeriodScalarFieldEnumSchema;
