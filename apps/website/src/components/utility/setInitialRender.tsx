"use client"
import {useEffect} from "react"
import { setInitialRender } from '#/state/slices/core'
import store from '#/state/store'


const SetInitialRender = () => {
    useEffect(() => {
        store.dispatch(setInitialRender(true))
    }, [])
    return null
}


SetInitialRender.displayName = "SetInitialRender"


export default SetInitialRender;
