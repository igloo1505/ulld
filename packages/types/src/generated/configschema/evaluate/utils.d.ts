type Comparable = boolean | string | Date | number;
export declare const arrayHasDuplicates: <T extends unknown>(items: T[], parseItem?: (item: T) => Comparable) => boolean;
export {};
