import {useState, useEffect, RefObject} from "react"
import { FeatureUIStage, initialFeatureTimeout } from "./types"
import { useInView } from "framer-motion";


export const useShouldShowFeature = (scope: RefObject<HTMLElement>, stage: FeatureUIStage, idx: number, isHero: boolean): FeatureUIStage => {
    const [isInitial, setIsInitial] = useState(true)
    const [hasSet, setHasSet] = useState(false)
    const isVisible = useInView(scope);
    useEffect(() => {
        if(stage === "current"){
            if(idx === 0 && !hasSet){
                setTimeout(() => setIsInitial(false), initialFeatureTimeout)
                setHasSet(true)
            } else {
                setIsInitial(false)
            }
        } else {
            setIsInitial(true)
        }
    }, [stage])
    useEffect(() => {
        if(isHero){
            setHasSet(false)
        }
    }, [isHero])
    return Boolean(isVisible && !isInitial) ? stage : "hidden"
}
