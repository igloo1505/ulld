export const dateTimeStringTransform = (a: Date | string | null | undefined): Date => {
    if (typeof a === "string") {
        return new Date(a);
    }
    if (a instanceof Date) {
        return a;
    }
    return new Date();
};
