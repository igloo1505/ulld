import React from 'react'
import { IoLogoGithub } from 'react-icons/io5';
import { IconProps } from '../../../types/general';



export const GithubIcon = (props: IconProps) => {
    return (
        <IoLogoGithub {...props} />
    )
}


GithubIcon.displayName = "GithubIcon"


