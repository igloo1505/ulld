import localFont from 'next/font/local'


export const fontSans = localFont({
    src: [
        {
            path: "./Roboto-Regular.ttf",
            weight: '400',
            style: 'normal'
        },
        {
            path: "./Roboto-Light.ttf",
            weight: '300',
            style: 'normal'
        },
        {
            path: "./Roboto-LightItalic.ttf",
            weight: '300',
            style: 'italic'
        },
        {
            path: "./Roboto-Italic.ttf",
            weight: '400',
            style: 'italic'
        },
        {
            path: "./Roboto-Medium.ttf",
            weight: '500',
            style: 'normal'
        },
        {
            path: "./Roboto-MediumItalic.ttf",
            weight: '500',
            style: 'italic'
        },
        {
            path: "./Roboto-Thin.ttf",
            weight: '300',
            style: 'normal'
        },
        {
            path: "./Roboto-ThinItalic.ttf",
            weight: '300',
            style: 'italic'
        },
        {
            path: "./Roboto-Bold.ttf",
            weight: '600',
            style: 'bold'
        },
        {
            path: "./Roboto-BoldItalic.ttf",
            weight: '600',
            style: 'italic'
        },
    ],
    variable: '--font-sans',
    display: 'swap'
})
