import { type ReactNode } from 'react';
import { MultiSelectOption } from './types.js';
import { CheckboxProps } from 'ink-checkbox';
interface UlldMultiSelectItemProps extends Pick<CheckboxProps, 'focused' | 'checked'> {
    item: MultiSelectOption;
    index: number;
}
export declare const UlldMultiSelectItem: {
    ({ item, focused, checked, index, }: UlldMultiSelectItemProps): ReactNode;
    displayName: string;
};
export {};
