import { z } from 'zod';

export const PracticeExamScalarFieldEnumSchema = z.enum(['id','correctCount','inCorrectCount','timeLimitInSeconds','timeCompletedInSeconds','date']);

export default PracticeExamScalarFieldEnumSchema;
