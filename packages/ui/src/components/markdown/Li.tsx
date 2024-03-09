import React from 'react'



export const Li = (props: React.HTMLAttributes<HTMLLIElement>) => {
    return (
        <li {...props} />
    )
}


Li.displayName = "Li"
