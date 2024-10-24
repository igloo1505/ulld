import staticData from "../../staticDevelopmentData.json" with { type: "json" };
import buildUtilityData from "@ulld/utilities/buildStaticData.json" with { type: "json" };
export const getInternalTailwindSources = () => {
    let items = staticData.alwaysIncludedTailwindSources;
    for (const k of buildUtilityData.internalPackageNames) {
        if (!staticData.excludeFromInternalTailwindSources.includes(k)) {
            items.push(`./node_modules/${k}/src/**/*.{js,ts,tsx,jsx,mdx}`);
        }
    }
    return items;
};
