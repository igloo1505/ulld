import { getInternalPackageNames } from "@ulld/utilities/internalDataHelpers";
import staticData from "../../staticDevelopmentData.json" with {type: "json"};

export const getInternalTailwindSources = () => {
    let items = staticData.alwaysIncludedTailwindSources as string[];
    const internalPackageNames = getInternalPackageNames()
    for (const k of internalPackageNames) {
        if (
            !(staticData.excludeFromInternalTailwindSources as string[]).includes(k)
        ) {
            items.push(`./node_modules/${k}/src/**/*.{js,ts,tsx,jsx,mdx}`);
        }
    }
    return items;
};
