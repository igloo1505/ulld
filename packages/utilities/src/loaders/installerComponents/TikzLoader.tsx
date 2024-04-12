import Script from 'next/script';
import React from 'react'
/* import "#/lib/bin/tikz.css" */


/* TODO: Download the fonts from here required to make this package run locally and then convert these script tags to load from local sources. */
/* https://ctan.org/tex-archive/fonts/cm/ps-type1/bakoma */

{/* <Script id="tikz-script" src="../../../lib/bin/tikz.js"></Script> */ }
/* <Script src="https://tikzjax.com/v1/tikzjax.js" /> */


/* TODO: Currently this only loads on a reload. Try moving this over to a Next.js script and play around with the props as well as in the /components/markdown/emeddedComponents/tikz.tsx script to get this to load on the initial navigation. */
const TikzLoader = () => {
    return (
        <>
            <link rel="stylesheet" type="text/css" href="https://tikzjax.com/v1/fonts.css" />
            <Script
                src="https://tikzjax.com/v1/tikzjax.js"
                async
                strategy="afterInteractive"
            />
        </>
    )
}


TikzLoader.displayName = "TikzLoader"


export default TikzLoader;
