import { z } from 'zod';
export const ImageAlignmentSchema = z.enum(['bottom', 'center', 'top', 'left', 'right']);
export default ImageAlignmentSchema;
