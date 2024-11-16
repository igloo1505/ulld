import { Command as CommandPrimitive } from 'cmdk';
import * as React from 'react';
import { Command } from '../ui/command';
export interface Option {
    value: string;
    label: string;
    disable?: boolean;
    /** fixed option that can't be removed. */
    fixed?: boolean;
    /** Group the options by providing key. */
    [key: string]: string | boolean | undefined;
}
interface MultipleSelectorProps {
    value?: Option[];
    defaultOptions?: Option[];
    /** manually controlled options */
    options?: Option[];
    placeholder?: string;
    /** Loading component. */
    loadingIndicator?: React.ReactNode;
    /** Empty component. */
    emptyIndicator?: React.ReactNode;
    /** Debounce time for async search. Only work with `onSearch`. */
    delay?: number;
    /**
     * Only work with `onSearch` prop. Trigger search when `onFocus`.
     * For example, when user click on the input, it will trigger the search to get initial options.
     **/
    triggerSearchOnFocus?: boolean;
    /** async search */
    onSearch?: (value: string) => Promise<Option[]>;
    /**
     * sync search. This search will not showing loadingIndicator.
     * The rest props are the same as async search.
     * i.e.: creatable, groupBy, delay.
     **/
    onSearchSync?: (value: string) => Option[];
    onChange?: (options: Option[]) => void;
    /** Limit the maximum number of selected options. */
    maxSelected?: number;
    /** When the number of selected options exceeds the limit, the onMaxSelected will be called. */
    onMaxSelected?: (maxLimit: number) => void;
    /** Hide the placeholder when there are options selected. */
    hidePlaceholderWhenSelected?: boolean;
    disabled?: boolean;
    /** Group the options base on provided key. */
    groupBy?: string;
    className?: string;
    badgeClassName?: string;
    /**
     * First item selected is a default behavior by cmdk. That is why the default is true.
     * This is a workaround solution by add a dummy item.
     *
     * @reference: https://github.com/pacocoursey/cmdk/issues/171
     */
    selectFirstItem?: boolean;
    /** Allow user to create option when there is no option matched. */
    creatable?: boolean;
    /** Props of `Command` */
    commandProps?: React.ComponentPropsWithoutRef<typeof Command>;
    /** Props of `CommandInput` */
    inputProps?: Omit<React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>, 'value' | 'placeholder' | 'disabled'>;
    /** hide the clear all button. */
    hideClearAllButton?: boolean;
}
export interface MultipleSelectorRef {
    selectedValue: Option[];
    input: HTMLInputElement;
}
export declare function useDebounce<T>(value: T, delay?: number): T;
declare const MultipleSelector: React.ForwardRefExoticComponent<MultipleSelectorProps & React.RefAttributes<MultipleSelectorRef>>;
export default MultipleSelector;
//# sourceMappingURL=multiSelect.d.ts.map