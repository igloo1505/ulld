import { z } from 'zod';

export const HealthReportOrderByRelevanceFieldEnumSchema = z.enum(['title','summary','anxiety_desc','mood_desc','dietId']);

export default HealthReportOrderByRelevanceFieldEnumSchema;
