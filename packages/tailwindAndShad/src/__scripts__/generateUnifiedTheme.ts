import fs from "fs";
import path from "path";
import { globSync } from "glob";
import { ThemeFile } from "./scssThemeFile";

const targetFile = "unifiedTheme.scss"

const targetPath = path.join(__dirname, `../shad/defaultThemes/${targetFile}`)

const _files = globSync(
    `${path.join(__dirname, "../shad/defaultThemes/")}/*.scss`,
    {},
);

let s = `@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
`;

_files.map((f) => new ThemeFile(f)).filter((a) => a.isValid).forEach((item) => {
    s += item.getUnifiedContent()
})

s += `
    * {
      @apply border-border;
    }

    body {
      @apply bg-background text-foreground font-sans;
    }
  }
`


fs.writeFileSync(targetPath, s, {encoding: "utf-8"})

