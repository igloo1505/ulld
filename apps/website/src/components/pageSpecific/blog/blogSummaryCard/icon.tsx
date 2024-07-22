import { DynamicIcon, ValidIconName } from '@ulld/icons';
import React from 'react'



interface IconImageProps {
   icon: ValidIconName
}

const IconImage = ({icon}: IconImageProps) => {
return (
        <div className={"w-full h-full flex flex-col justify-center items-center p-4"}>
            <DynamicIcon name={icon} className={"w-32 h-32"} />
        </div>
)
}


IconImage.displayName = "IconImage"


export default IconImage;
