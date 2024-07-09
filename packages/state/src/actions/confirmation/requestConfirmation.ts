import { useState, useEffect } from "react"
import {ConfirmationModalConfig} from "./confirmationModalConfig"
import {useEventListener} from "@ulld/hooks/useEventListener"
import { showConfirmationModal } from "../../state/slices/ui"
import {useUlldStore} from "@ulld/hooks/useUlldStore"
import { getRandomId } from "@ulld/utilities/identity"

type S = "pending" | "denied" | "accepted" | "waiting"


interface EventProps {
    confirmationId: string
}

declare global {
    // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
    interface WindowEventMap {
        "confirmation-accept": CustomEvent<EventProps>;
        "confirmation-denied": CustomEvent<EventProps>;
    }
}

export const useConfirmation = (config: ConfirmationModalConfig) => {
    const store = useUlldStore()
    const [modalOpen, setModalOpen] = useState<string | number | boolean>(false)
    const [status, setStatus] = useState<S>("waiting")
    const [confirmationId, setConfirmationId] = useState(config.primaryId || `confirmation-${getRandomId()}`)

    useEffect(() => {
       if(modalOpen){
            store?.dispatch(showConfirmationModal({...config, primaryId: confirmationId}))
            setStatus("waiting")
        } else {
            store?.dispatch(showConfirmationModal(false))
        }
    }, [modalOpen])

    useEventListener("confirmation-accept", (e) => {
        if(e.detail.confirmationId === confirmationId){
           setStatus("accepted")
        }
    })

    useEventListener("confirmation-denied", (e) => {
        if(e.detail.confirmationId === confirmationId){
           setStatus("denied")
        }
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
