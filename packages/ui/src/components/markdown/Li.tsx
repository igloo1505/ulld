import React from 'react'



const Li = (props: React.HTMLAttributes<HTMLLIElement>) => {
    return (
        <li {...props} />
    )
}


Li.displayName = "Li"


export default Li;
