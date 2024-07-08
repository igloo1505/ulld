export const sortAlphabetical = <T extends unknown>(items: T[], getProperty?: (item: T) => string): T[] => {
    return items.sort((a, b) => getProperty ? getProperty(a) < getProperty(b) ? -1 : 1 : (a as string)  < (b as string) ? -1 : 1)
}
