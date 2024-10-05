import { z } from 'zod';

export const EquationOrderByRelevanceFieldEnumSchema = z.enum(['equationId','title','desc','content','asPython','variables','keywords']);

export default EquationOrderByRelevanceFieldEnumSchema;
