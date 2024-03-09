import React from 'react'



export const Ol = (props: React.HTMLAttributes<HTMLOListElement>) => {
    return (
        <ol {...props} className={"ol my-2"} />
    )
}


Ol.displayName = "Ol"
