import { z } from 'zod';
export const BusinessContactOrderByRelevanceFieldEnumSchema = z.enum(['companyName', 'contactName', 'contactPreference', 'email', 'phone', 'message', 'purpose']);
export default BusinessContactOrderByRelevanceFieldEnumSchema;
