import { navbarButtonClasses } from '#/components/layouts/navbar/navbarButtonGroup';
import React from 'react'
import NavbarButtonPortal from '../portals/navbar';
import Link from "next/link"



interface NavbarConfigureButtonProps {
}

const NavbarConfigureButton = (props: NavbarConfigureButtonProps) => {
   return (
            <NavbarButtonPortal>
                <Link className={navbarButtonClasses} href="/configure">
                    Configure
                </Link>
            </NavbarButtonPortal>
   )
}


NavbarConfigureButton.displayName = "NavbarConfigureButton"


export default NavbarConfigureButton;
