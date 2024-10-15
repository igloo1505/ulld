export const dateTimeStringTransform = (a) => {
    if (typeof a === "string") {
        return new Date(a);
    }
    if (a instanceof Date) {
        return a;
    }
    return new Date();
};
