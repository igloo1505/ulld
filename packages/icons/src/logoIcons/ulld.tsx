import React from "react";
import { IconProps } from "../types";
import { BrandTitle } from "../logo/ulldLogo";

const UlldLogo = (props: IconProps) => {
    return <BrandTitle {...props} />;
};

UlldLogo.displayName = "UlldLogo";

export default UlldLogo;
