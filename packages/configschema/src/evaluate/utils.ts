type Comparable = boolean | string | Date | number;

export const arrayHasDuplicates = <T extends unknown>(
    items: T[],
    parseItem?: (item: T) => Comparable,
) => {
    let data: Comparable[] = [];
    for (const k of items) {
        let itemData = parseItem ? parseItem(k) : (k as Comparable);
        if (data.includes(itemData)) {
            return true;
        } else {
            data.push(itemData);
        }
    }
    return false;
};
