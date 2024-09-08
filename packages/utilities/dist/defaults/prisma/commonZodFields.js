import '../../chunk-F3FYYIAV.js';
import { TERTIARY_TOGGLE } from '@ulld/database';
import { z } from 'zod';

var zodTertiaryToggleSchema = z.nativeEnum(TERTIARY_TOGGLE);
var zodRatingField = z.number().min(0).max(10);

export { zodRatingField, zodTertiaryToggleSchema };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=commonZodFields.js.map