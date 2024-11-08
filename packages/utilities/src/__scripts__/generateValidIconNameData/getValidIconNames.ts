import path from "path";
import { globSync } from "glob";
import { admonitionTypeList } from "@ulld/types/admonitionTypes";
import allDynamicLucideImports from "lucide-react/dynamicIconImports";
import { iconNameMap } from "@ulld/types/iconNameMap";
import { getUlldDevRoot } from "../../developmentUtilities/getUlldDevRoot.js";

type IconType = "logo" | "lucide" | "admonition" | "nameMap";

interface IconData {
    type: IconType;
    name: string;
}


export const getValidIconData = (): IconData[] => {
    const icons: IconData[] = [];
    for (const lucideIcon in allDynamicLucideImports) {
        icons.push({
            type: "lucide",
            name: lucideIcon,
        });
    }
    const logoIconDirectory = path.join(
        getUlldDevRoot("getValidIconNames"),
        "packages/icons/src/logoIcons",
    );
    globSync("**/*.{ts,tsx}", {
        cwd: logoIconDirectory,
        nodir: true,
    }).forEach((f) => {
        icons.push({
            type: "logo",
            name: path.parse(f).name,
        });
    });
    admonitionTypeList.forEach((a) => {
        icons.push({
            type: "admonition",
            name: a,
        });
    });
    for (const k in iconNameMap) {
        icons.push({
            type: "nameMap",
            name: k,
        });
    }
    return icons;
};
