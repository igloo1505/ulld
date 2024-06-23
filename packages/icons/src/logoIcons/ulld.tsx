import React from "react";
import { IconProps } from "../types";
import { BrandTitle } from "../logo/ulldLogo";

const UlldLogo = (props: IconProps) => {
    console.log(`Returning ulld logo`)
    return <BrandTitle {...props} />;
};

UlldLogo.displayName = "UlldLogo";

export default UlldLogo;
