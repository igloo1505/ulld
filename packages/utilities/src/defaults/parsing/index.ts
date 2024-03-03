import type { Options } from 'rehype-mathjax/lib/create-plugin'


export const mathOptions: Options = {
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
