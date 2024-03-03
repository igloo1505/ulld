export const makeArrayTransform = (b: any) => {
    return Array.isArray(b) ? b : [b]
}
