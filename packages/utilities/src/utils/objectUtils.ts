
export const getResursiveValue = (a: any, keys: string[]) => {
    if (keys.length > 1) {
        return getResursiveValue(a[keys[0]], keys.slice(1));
    }
    return a[keys[0]];
};

export const applyRecursiveValue = (a: any, keys: string[], value: any) => {
    let i: number | undefined;
    for (i = 0; i < keys.length - 1; i++) {
        a = a[keys[i]];
    }
    a[keys[i]] = value;
};
