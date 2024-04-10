"use client"
import { RootState } from '../state/store';
import { useToast } from '@ulld/tailwind/use-toast';
import { ToastConfigType } from '@ulld/utilities/types/toastConfig';
import { WithChildren } from '@ulld/utilities/types/utilityTypes';
import { useEffect } from 'react'
import { connect } from 'react-redux';


const connector = connect((state: RootState, props: any) => ({
    toast: state.UI.toast,
    props: props
}))

interface ToastListenerProps extends WithChildren {
    toast: ToastConfigType | undefined | null
}

export const ToastListener = connector(({ toast: toastData }: ToastListenerProps) => {
    const t = useToast()
    useEffect(() => {
        if (toastData) {
            t.toast({
                ...(toastData.destructive && { variant: "destructive" }),
                title: toastData.title,
                description: toastData.description,
            })
        }
    }, [toastData])
    return null
})



ToastListener.displayName = "ToastListener"
