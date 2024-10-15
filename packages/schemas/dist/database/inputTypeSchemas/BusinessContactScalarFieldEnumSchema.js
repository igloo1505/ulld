import { z } from 'zod';
export const BusinessContactScalarFieldEnumSchema = z.enum(['id', 'companyName', 'contactName', 'contactPreference', 'email', 'phone', 'message', 'purpose']);
export default BusinessContactScalarFieldEnumSchema;
