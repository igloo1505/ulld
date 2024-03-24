import React from 'react'
import { MdxContentSERVERProps } from './mdxContentSERVER'



interface MdxContentClientSideProps extends MdxContentSERVERProps {
    stylesId?: string
    applyUserStyles?: boolean
    small?: boolean
}

export const MdxContentCLIENT = (props: MdxContentClientSideProps) => {
    return (
        <div></div>
    )
}


MdxContentCLIENT.displayName = "MdxContentClientSide"
