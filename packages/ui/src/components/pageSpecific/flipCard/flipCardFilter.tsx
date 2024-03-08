import React from 'react'
import { FlipCardParams } from './flipcardTypes'



interface FlipcardFilterProps {
    params: FlipCardParams
}

const FlipcardFilter = ({ params }: FlipcardFilterProps) => {
    return (
        <div>
            Flipcard filter
        </div>
    )
}


FlipcardFilter.displayName = "FlipcardFilter"


export default FlipcardFilter;
