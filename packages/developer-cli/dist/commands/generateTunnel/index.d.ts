import React from 'react';
import { z } from 'zod';
export declare const args: z.ZodTuple<[z.ZodDefault<z.ZodString>, z.ZodDefault<z.ZodString>], null>;
export declare const options: z.ZodObject<{
    exclude: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    glob: z.ZodDefault<z.ZodString>;
    asType: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    glob: string;
    asType: boolean;
    exclude?: string[] | undefined;
}, {
    asType: boolean;
    exclude?: string[] | undefined;
    glob?: string | undefined;
}>;
interface GenerateTunnelFileProps {
    args: z.infer<typeof args>;
    options: z.infer<typeof options>;
}
declare const GenerateTunnelFile: {
    ({ args, options }: GenerateTunnelFileProps): React.JSX.Element;
    displayName: string;
};
export default GenerateTunnelFile;
