import React, { useState, useEffect } from "react"
import {ConfirmationModalConfig} from "./confirmationModalConfig"
import {useEventListener} from "@ulld/hooks/useEventListener"
import {store} from "../../state/store"
import { showConfirmationModal } from "../../state/slices/ui"

type S = "pending" | "denied" | "accepted" | "waiting"

export const useConfirmation = (config: ConfirmationModalConfig) => {
    const [modalOpen, setModalOpen] = useState<string | number | boolean>(false)
    const [status, setStatus] = useState<S>("waiting")

    useEffect(() => {
       if(modalOpen){
            store.dispatch(showConfirmationModal(config))
        } else {
            store.dispatch(showConfirmationModal(false))
        }
    }, [modalOpen])

    useEventListener("confirmation-accept", () => {
           setStatus("accepted")
    })

    useEventListener("confirmation-denied", () => {
           setStatus("denied")
    })

    return {
        open: Boolean(modalOpen),
        requestConfirmation: (id?: number | string | true) => {
        setModalOpen(id || true)
            setStatus("pending")
        },
        closeConfirmationModal: () => setModalOpen(false),
        status: status
    } satisfies {
            open : boolean,
            requestConfirmation: (n: number | string) => void,
            closeConfirmationModal: () => void,
            status: S
        }
}
