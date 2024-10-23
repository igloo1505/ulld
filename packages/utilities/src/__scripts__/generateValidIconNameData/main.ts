import { DevelopmentOutput } from "../../developmentUtilities";
import { getValidIconData } from "./getValidIconNames";

const dev = new DevelopmentOutput();

const validIconData = getValidIconData();

const locationComment: Parameters<DevelopmentOutput["genFileContent"]>[0][number] = {
    fnc: "sourceLocationComment",
    props: {
        sourceFile:
            "packages/utilities/src/__scripts__/generateValidIconNameData/getValidIconNames.ts",
    },
};

const validIconNames = validIconData.map((n) => n.name)

dev.genFileContent(
    [
        {
            fnc: "arrayToTypeUnion",
            props: {
                arr: validIconNames,
                getValue: (val) => `"${val as string}"`,
                varName: "ValidIconName",
                exportVar: true,
            },
        },
        locationComment,
    ],
    {
        filePath: "packages/types/src/internallyGenerated/validIconNameUnion.ts",
        useUlldDevRootEnvVar: true,
    },
);

dev.clear();

dev.genFileContent(
    [
        {
            fnc: "arrayToTypescriptArray",
            props: {
                arr: validIconNames,
                getValue: (val) => `    "${val as string}"`,
                varName: "validIconNameList",
                exportVar: true,
                readOnly: true,
            },
        },
        {
            fnc: "rawSuffixContent",
            props: {
                content:
                    "export type ValidIconNameDynamicallyGenerated = typeof validIconNameList[number]",
            },
        },
        locationComment,
    ],
    {
        filePath: "packages/types/src/enums/icons/validIconName.ts",
        useUlldDevRootEnvVar: true,
    },
);

dev.clear();

dev.genFileContent(
    [
        {
            fnc: "arrayToEnum",
            props: {
                arr: validIconNames,
                getValue: (val) => val as string,
                getKey: (val) => val as string,
                exportVar: true,
                varName: "ValidIconNameEnumDynamicallyGenerated",
                prefixFirstLine:
                    "/* eslint-disable @typescript-eslint/naming-convention -- Enum needs to match names in Lucide */",
            },
        },
        locationComment,
    ],
    {
        filePath: "packages/types/src/enums/icons/validIconNameEnum.ts",
        useUlldDevRootEnvVar: true,
    },
);


dev.clear()

dev.genFileContent([
    {
        fnc: "rawPrefixContent",
        props: {
            content: 'import type { ValidIconName } from "../../internallyGenerated/validIconNameUnion";'
        }
    },
    {
        fnc: "arrayToTypescriptArray",
        props: {
            arr: validIconData.filter((f) => f.type === "logo").map((x) => x.name),
            getValue: (val) => `"${val as string}"`,
            varName: "logoIconNames",
            exportVar: true,
            castToType: "const satisfies ValidIconName[];"
        }
    },
    {
        fnc: "rawSuffixContent",
        props: {
            content: "export type LogoIconNames = (typeof logoIconNames)[number];"
        }
    }
], {
        filePath: "packages/types/src/enums/icons/iconTypes.ts",
        useUlldDevRootEnvVar: true
    })
