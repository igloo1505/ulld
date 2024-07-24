import { getRepoPaths, readJsonData } from "./getRepoPaths";


interface ComponentData {
    slot: string;
    subSlot: string;
    type: "page" | "component" | "embeddable";
}


export const getFlattenedComponents = () => {
    const paths = getRepoPaths();
    const slotMap = readJsonData(paths.slotMap);
    const buildData = readJsonData(paths.buildData);

    let components: ComponentData[] = [];

    for (const slot in slotMap) {
        for (const subSlot in slotMap[slot]) {
            components.push({
                ...slotMap[slot][subSlot],
                slot,
                subSlot,
            });
        }
    }
    return components;
};
