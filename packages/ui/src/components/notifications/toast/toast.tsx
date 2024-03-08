"use client"
import { ToastAction, useToast } from '@ulld/tailwind'
import { WithChildren, ToastConfigType } from '@ulld/utilities'
import React, { useEffect } from 'react'



interface ToastWrapperProps extends WithChildren {
    toast: ToastConfigType | undefined | null
}

const ToastWrapper = ({ children, toast: toastData }: ToastWrapperProps) => {
    const t = useToast()
    useEffect(() => {
        if (toastData) {
            t.toast({
                ...(toastData.destructive && { variant: "destructive" }),
                title: toastData.title,
                description: toastData.description,
                ...(children && { action: <ToastAction altText="">{children}</ToastAction> })
            })
        }
    }, [toastData])
    return null
}



ToastWrapper.displayName = "ToastWrapper"


export default ToastWrapper;
