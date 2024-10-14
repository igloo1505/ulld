import { z } from 'zod';

export const BibScalarFieldEnumSchema = z.enum(['id','filename','firstSync','lastSync']);

export default BibScalarFieldEnumSchema;
