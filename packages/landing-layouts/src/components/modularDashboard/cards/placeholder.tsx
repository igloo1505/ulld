import React from 'react'
import CardContainer from '../util/cardContainer';
import { BaseCardProps } from '../types';



interface PlaceholderCardProps extends BaseCardProps {
  label?: string
}


const PlaceholderCard = ({label = "placeholder", ...props}: PlaceholderCardProps) => {
return (
    <CardContainer {...props}>{label}</CardContainer>
)
}


PlaceholderCard.displayName = "PlaceholderCard"


export default PlaceholderCard;
