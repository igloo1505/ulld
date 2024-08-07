// import type { Options } from 'rehype-mathjax/lib/create-plugin'
import { MermaidConfigType, mermaidTheme } from './defaultMermaidConfig'


export const mathOptions = {
    tex: {
        // packages: [],
        tags: 'all', // "all" | "ams" (ams breaks EqRef component, unless can find other way to force label creation.),
        useLabelIds: true,
        processEscapes: true,
        processEnvironments: true
    },
    chtml: {
        fontURL: '/font/mathjax',
        adaptiveCSS: true
    }
}

export const mermaidConfig: MermaidConfigType = {
    output: 'svg',
    /* theme: { light: 'dark', dark: 'dark' }, */
    mermaid: {
        themeVariables: mermaidTheme.dark,
        theme: "base"
    }
}



