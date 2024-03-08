
import React from 'react'



const Ul = (props: React.HTMLAttributes<HTMLUListElement>) => {
    return (
        <ul {...props} className={"my-2 [&>li>ul]:my-0"} />
    )
}


Ul.displayName = "Ul"


export default Ul;
