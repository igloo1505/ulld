import { DefaultImageMapName } from '@ulld/configschema/staticData/defaultImageMap'
import React from 'react'
import dynamic from 'next/dynamic'



interface DynamicDefaultImageMapImageProps {
   name: DefaultImageMapName
    className?: string
}

export const DynamicDefaultImageMapImage = async ({name, className}: DynamicDefaultImageMapImageProps) => {
    const Component = dynamic(() => import(`./imageMap/${name}.tsx`)) as React.FC<{className?: string}>
    if(!Component) return null
    return (
        <Component className={className}/>
    )
}


DynamicDefaultImageMapImage.displayName = "DynamicDefaultImageMapImage"


export default DynamicDefaultImageMapImage;
