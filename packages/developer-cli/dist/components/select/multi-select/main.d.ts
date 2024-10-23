import { type ReactNode } from 'react';
import { MultiSelectOption } from './types.js';
interface UlldMultiSelectProps<T> {
    options?: MultiSelectOption<T>[];
}
export declare const UlldMultiSelect: {
    <T extends unknown>({ options, }: UlldMultiSelectProps<T>): ReactNode;
    displayName: string;
};
export {};
