export interface MultiSelectOption<T extends unknown = unknown> {
    label: string;
    value: T;
    /** Must be unique. */
    id: string;
}
