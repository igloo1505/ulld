import staticData from "staticContent"

export const getStaticDataByString = (query: string, root: object = staticData): string => {
    const linkItems: string[] = query.split(".");
    let newVal = root[linkItems[0] as keyof typeof root];
    if (linkItems.length > 1) {
        return getStaticDataByString(linkItems.splice(1).join("."), newVal);
    }
    return newVal as string;
}
