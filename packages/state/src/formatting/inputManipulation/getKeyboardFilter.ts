import { replaceRecursively } from "@ulld/utilities/utils/general";
import React, { ChangeEvent } from 'react'
export type KeyboardFilterType = "noSpaces" | "numberOnly" | "integerOnly"
type KeyboardFilterElement = HTMLInputElement | HTMLTextAreaElement
type KeyboardFilterReturnType<T> = React.DetailedHTMLProps<React.InputHTMLAttributes<T>, T>
type ExistingListenerType<T> = KeyboardFilterReturnType<T>


const keyboardFilterMap: { [k in KeyboardFilterType]: KeyboardFilterReturnType<KeyboardFilterElement> } = {
    noSpaces: {
        onChange: (e: ChangeEvent<KeyboardFilterElement>) => {
            e.target.value = e.target.value ? replaceRecursively(e.target.value, " ", "") : ""
        }
    },
    numberOnly: {
        onChange: (e: ChangeEvent<KeyboardFilterElement>) => {
            let nv = e.target.value ? replaceRecursively(e.target.value, /[^\d.]/gmi, "") : ""
            let pi = nv.indexOf(".")
            if (pi !== -1) {
                nv = `${nv.slice(0, pi + 1)}${replaceRecursively(nv.slice(pi, nv.length), ".", "")}`
            }
            e.target.value = nv
        }
    },
    integerOnly: {
        onChange: (e: ChangeEvent<KeyboardFilterElement>) => {
            e.target.value = e.target.value ? replaceRecursively(e.target.value, /[^\d]/gm, "") : ""
        }
    }
}


export const getKeyboardFilter = <T extends KeyboardFilterElement>(filterType?: KeyboardFilterType, existingListeners: ExistingListenerType<T> = {}): KeyboardFilterReturnType<T> => {
    if (!filterType) return existingListeners
    let listenerProperties = keyboardFilterMap[filterType] as KeyboardFilterReturnType<T>
    let returnedListenerType = Object.keys(keyboardFilterMap[filterType])[0] as keyof ExistingListenerType<T>
    if (!existingListeners[returnedListenerType]) {
        return {
            ...existingListeners,
            ...listenerProperties
        }
    } else {
        return {
            ...existingListeners,
            [returnedListenerType]: (e: ChangeEvent<T>) => {
                listenerProperties[returnedListenerType](e)
                existingListeners[returnedListenerType](e)
            }
        }
    }
}
