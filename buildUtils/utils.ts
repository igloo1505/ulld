import { getRepoPaths, readJsonData } from "./getRepoPaths";

export const getFlattenedComponents = () => {
    const paths = getRepoPaths();
    const slotMap = readJsonData(paths.slotMap);
    const buildData = readJsonData(paths.buildData);

    interface ComponentData {
        slot: string;
        subSlot: string;
        type: "page" | "component" | "embeddable";
    }

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
