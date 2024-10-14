import React from 'react';
import zod from 'zod';
export declare const options: zod.ZodObject<{
    name: zod.ZodDefault<zod.ZodString>;
}, "strip", zod.ZodTypeAny, {
    name: string;
}, {
    name?: string | undefined;
}>;
type Props = {
    options: zod.infer<typeof options>;
};
export default function Index({ options }: Props): React.JSX.Element;
export {};
