import type { Metadata } from 'next'
import React from 'react'
import { Roboto as FontSans } from "next/font/google"
import clsx from 'clsx'




const fontSans = FontSans({
    weight: ["400", "500", "700", "900"],
    subsets: ["latin"],
    display: "swap",
    variable: "--font-sans",
})

const darkMode = true




export const metadata: Metadata = {
    title: 'Uh Little Less Dum',
    description: 'The world has enough stupid people.',
}


const RootLayout = async (props: {
    children: React.ReactNode
    modal: React.ReactNode
}) => {
    return (
        <html
            lang="en"
            className={clsx("group/html js-focus-visible", darkMode && "dark")}
            data-js-focus-visible=""
        >
            <head>
                <link rel="icon" href="/icons/favicon.ico" sizes="any" />
                <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
            </head>
            <body
                className={clsx(fontSans.variable, "preferFs")}
                id={`Ulld-body-root`}
            >
                {props.children}
                {props.modal && props.modal}
            </body>
        </html>
    )
}


export default RootLayout
