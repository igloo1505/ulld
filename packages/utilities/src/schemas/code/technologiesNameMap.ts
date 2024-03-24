import { Technologies } from "@ulld/database/internalDatabaseTypes";

export const technologiesNameMap: { [k in Technologies]: string } = {
    python: "Python",
    javascript: "Javascript",
    lua: "Lua",
    typescript: "Typescript",
    css: "CSS",
    scss: "SCSS",
    react: "React",
    prisma: "Prisma",
    tailwind: "Tailwind",
    node: "Node.js",
    bash: "Bash",
    zsh: "Zsh",
    bibtex: "Bibtex",
    latex: "Latex",
    applescript: "Apple Script",
    swift: "Swift",
    json: "JSON"
}
