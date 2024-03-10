import type { Preview } from "@storybook/react";
// import { darkModeTheme } from "./darkTheme"
// import { lightModeTheme } from "./lightTheme"
// import { themes } from "@storybook/theming"


const preview: Preview = {
    parameters: {
        // docs: {
        //     theme: themes.dark
        // },
        actions: {},
        controls: {
            // matchers: {
            //     color: /(background|color)$/i,
            //     date: /Date$/i,
            // },
        },
        nextjs: {
            appDirectory: true,
        },
        // darkMode: {
        //     current: "dark",
        //     classTarget: 'html',
        // dark: { ...themes.dark, ...darkModeTheme },
        // light: { ...themes.normal, ...lightModeTheme }
        // }
    },
};

export default preview;
