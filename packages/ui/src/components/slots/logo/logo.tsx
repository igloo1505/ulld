import React, { HTMLProps, ReactNode } from "react";
/* import { AnimatedUlldLogo, BaseProps } from "@ulld/icons/ulld-animated"; */
import {BrandTitle} from "@ulld/icons/ulld"

interface LogoProps extends HTMLProps<HTMLOrSVGElement> { }

const Logo = (props: LogoProps): ReactNode => {
    return (
        <BrandTitle
            {...props}
            /* brandColor */
        />
    );
};

Logo.displayName = "Logo";

export default Logo;
