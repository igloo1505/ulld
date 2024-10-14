import React from 'react';
import z from 'zod';
export declare const args: z.ZodTuple<[], null>;
export declare const options: z.ZodObject<{
    name: z.ZodDefault<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    name: string;
}, {
    name?: string | undefined;
}>;
type Props = {
    options: z.infer<typeof options>;
};
export default function Build({ options }: Props): React.JSX.Element;
export {};
