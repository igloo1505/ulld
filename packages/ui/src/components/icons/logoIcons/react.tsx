import React from 'react'
import { IoLogoReact } from 'react-icons/io5';
import { IconProps } from '../../../types';



const ReactIcon = (props: IconProps) => {
    return (
        <IoLogoReact {...props} />
    )
}


ReactIcon.displayName = "ReactIcon"


export default ReactIcon;
