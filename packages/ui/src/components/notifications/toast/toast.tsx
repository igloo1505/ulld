"use client"
import {  useToast } from '@ulld/tailwind/use-toast'
import { ToastAction } from '@ulld/tailwind/toast'
import React, { useEffect } from 'react'
import { ToastConfigType } from '@ulld/utilities/types/toastConfig'
import { WithChildren } from '@ulld/utilities/types/utilityTypes'



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
