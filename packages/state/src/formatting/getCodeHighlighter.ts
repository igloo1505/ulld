import { Technologies } from "@ulld/database"
import { BuiltinLanguage } from "shiki"



export const languageNameMap: { [k in Technologies]: BuiltinLanguage } = {
    python: 'python',
    javascript: 'javascript',
    lua: 'lua',
    typescript: 'typescript',
    css: 'css',
    scss: 'scss',
    react: 'tsx',
    prisma: 'prisma',
    node: 'js',
    bash: 'bash',
    zsh: 'zsh',
    bibtex: 'bibtex',
    latex: 'latex',
    json: 'json',
    applescript: 'applescript',
    swift: 'swift',
    tailwind: "html"
}

export const highlighterPaths = {
    themes: "/highlighting/themes",
    languages: "/highlighting/languages",
    wasm: "/highlighting/dist/"
}
