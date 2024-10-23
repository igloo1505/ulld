import { DevelopmentOutput } from "../../utilities/src/developmentUtilities/developmentOutput/main";
import { internalGlobalActionMap } from "../src/actions/clientOnly/actionMap";

const dev = new DevelopmentOutput();

const arr = Object.keys(internalGlobalActionMap).map((k) => ({
  id: k,
  ...internalGlobalActionMap[k],
}));

dev.genFileContent(
  [
    {
      fnc: "arrayToTypeUnion",
      props: {
        arr,
        getValue: (val) => `"${(val as { id: string }).id}"`,
        varName: "InternalGlobalActionIds",
        exportVar: true,
      },
    },
    {
      fnc: "arrayToTypescriptRecord",
      props: {
        arr,
        getValue: (v) => {
        const val = v as {label: string, defaultIcon: string, id: string}
        return `{
        label: "${val.label}",
        defaultIcon: "${val.defaultIcon}"
        }`
    },
        getKey: (val) => `${(val as { id: string }).id}`,
        varName: "internalGlobalActionsIdMap",
        typescriptType: `Record<InternalGlobalActionIds, {
    label: string
    defaultIcon: ValidIconNameDynamicallyGenerated
}>`,
        exportVar: true,
      },
    },
    {
            fnc: "sourceLocationComment",
            props: {
                sourceFile: "packages/state/src/actions/clientOnly/actionMap.ts"
            }
    },
    {
            fnc: "generatedFromScriptComment",
            props: {
                scriptName: "build",
                package: "@ulld/utilities"
            }
    },
    {
      fnc: "rawPrefixContent",
      props: {
        content:
          'import type { ValidIconNameDynamicallyGenerated } from "@ulld/types";\n\n',
      },
    },
  ],
  {
    filePath:
      "packages/utilities/src/utils/generatedUtils/internalGlobalActions.ts",
    useUlldDevRootEnvVar: true,
  },
);
