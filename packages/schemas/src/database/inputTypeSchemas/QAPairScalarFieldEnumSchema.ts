import { z } from 'zod';

export const QAPairScalarFieldEnumSchema = z.enum(['id','question','answer','description','secondaryLabel','correctCount','inCorrectCount']);

export default QAPairScalarFieldEnumSchema;
