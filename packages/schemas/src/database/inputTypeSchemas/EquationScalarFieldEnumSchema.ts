import { z } from 'zod';

export const EquationScalarFieldEnumSchema = z.enum(['id','equationId','title','desc','content','asPython','variableLegend','variables','keywords','createdAt','lastAccess']);

export default EquationScalarFieldEnumSchema;
