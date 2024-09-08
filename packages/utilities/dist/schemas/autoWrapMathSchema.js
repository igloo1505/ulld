import { autoWrapMath } from '../chunk-JT776YC2.js';
import '../chunk-F3FYYIAV.js';
import { z } from 'zod';

var autoWrapMathInlineField = z.string().transform((data) => autoWrapMath(data, false));
var autoWrapMathDisplayField = z.string().transform((data) => autoWrapMath(data, true));
var autoWrapMathInlineNullishField = z.string().transform((data) => data ? autoWrapMath(data, false) : data);
var autoWrapMathDisplayNullishField = z.string().transform((data) => data ? autoWrapMath(data, true) : data);

export { autoWrapMathDisplayField, autoWrapMathDisplayNullishField, autoWrapMathInlineField, autoWrapMathInlineNullishField };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=autoWrapMathSchema.js.map