import { type ReactNode } from 'react';
import { MultiSelectOption } from '../../components/select/multi-select/types.js';
interface UlldSlicedSelectListProps<T> {
    options: MultiSelectOption<T>[];
    /** Number of list items to show at once */
    showCount?: number;
    selectedIds: string[];
}
export declare const UlldSlicedSelectList: {
    <T extends unknown>({ options, showCount, selectedIds, }: UlldSlicedSelectListProps<T>): ReactNode;
    displayName: string;
};
export {};
