import React from 'react';
import { z } from 'zod';
export declare const args: z.ZodTuple<[z.ZodDefault<z.ZodString>], null>;
interface PackageJsonExportsCommandProps {
    args: z.infer<typeof args>;
}
declare const PackageJsonExportsCommand: {
    ({ args }: PackageJsonExportsCommandProps): React.JSX.Element;
    displayName: string;
};
export default PackageJsonExportsCommand;
