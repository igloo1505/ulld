"use client"
import { RootState } from '@ulld/state';
import { useToast } from '@ulld/tailwind';
import { WithChildren, ToastConfigType } from '@ulld/utilities';
import { useEffect } from 'react'
import { connect } from 'react-redux';


const connector = connect((state: RootState, props: any) => ({
    toast: state.UI.toast,
    props: props
}))

interface ToastListenerProps extends WithChildren {
    toast: ToastConfigType | undefined | null
}

const ToastListener = connector(({ toast: toastData }: ToastListenerProps) => {
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


export default ToastListener;
