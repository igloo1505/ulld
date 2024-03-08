import React from 'react'



const Ol = (props: React.HTMLAttributes<HTMLOListElement>) => {
    return (
        <ol {...props} className={"ol my-2"} />
    )
}


Ol.displayName = "Ol"


export default Ol;
