import React from 'react'
import { MdxContentSERVERProps } from '.';



interface MdxContentClientSideProps extends MdxContentSERVERProps {
    stylesId?: string
}

const MdxContentCLIENT = (props: MdxContentClientSideProps) => {
    return (
        <div></div>
    )
}


MdxContentCLIENT.displayName = "MdxContentClientSide"


export default MdxContentCLIENT;
