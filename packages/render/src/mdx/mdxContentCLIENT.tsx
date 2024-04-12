import React, {useEffect} from 'react'
import type { MdxContentSERVERProps } from './mdxContentSERVER'
import { useDebounceMdxParse } from '@ulld/hooks/useDebounceMdxParse'
import { autoWrapMath } from "@ulld/utilities/latexUtils"
import { getMdxClassnames } from './getMdxClassnames';



interface MdxContentClientSideProps extends MdxContentSERVERProps {
    stylesId?: string
    applyUserStyles?: boolean
    debounceTimeout?: number
}



export const MdxContentCLIENT = (props: MdxContentClientSideProps) => {
    const {value, setValue, Component} = useDebounceMdxParse(props.content, props.debounceTimeout || 350, {
        bareAss: props.bareAss === false ? false : true
    })

    useEffect(() => {
       setValue(props.content ? props.autoWrap ? autoWrapMath(props.content, Boolean(props.inline === false || props.display)) : props.content : "") 
    }, [props.content])

    return (
        <div
            className={getMdxClassnames(props)}
        >
            <Component />
        </div>
    )
}


MdxContentCLIENT.displayName = "MdxContentClientSide"
