import React from 'react'
import { IoLogoVercel } from 'react-icons/io5';
import { IconProps } from '../../../types/general';



export const VercelIcon = (props: IconProps) => {
    return (
        <IoLogoVercel {...props} />
    )
}


VercelIcon.displayName = "VercelIcon"
