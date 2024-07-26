"use client"
import {  Button } from '@ulld/tailwind/button'
import { useToast } from '@ulld/tailwind/use-toast'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@ulld/tailwind/dialog'
import React from 'react'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import AutoSettingForm from './autoSettingForm'
import { useRouter } from 'next/router'
import { client } from '@ulld/api/client'
import { AutoPropertyFormSchema } from '@ulld/api/schemas/formTrpcRelationships/autoPropertyFormSchema'
import { AutoSettingType } from '@ulld/utilities/types'
import { AutoSettingFormModalProps } from '../../../types/general'



const AutoSettingFormModal = ({ editing, open, setOpen, appendSetting }: AutoSettingFormModalProps) => {
    const router = useRouter()
    const { toast } = useToast()
    const form = useForm<z.infer<typeof AutoPropertyFormSchema>>({
        resolver: zodResolver(AutoPropertyFormSchema),
        defaultValues: {
            glob: editing?.glob || "",
            value: editing?.value || "",
            type: editing?.type || "subject",
            id: editing?.id || undefined
        }
    })

    const handleSubmit = async (data: z.infer<typeof AutoPropertyFormSchema>) => {
        let res = await client.autoSettings.addAutoSetting.mutate(data)
        setOpen(false)
        appendSetting(res)
        toast({
            title: "Success",
            description: `The automatic ${data.type} has been saved.`
        })
        if (editing) {
            router.push(`/settings/autoSettings`)
        }
        form.reset()
    }

    return (
        <Dialog
            open={open}
            onOpenChange={(o) => setOpen(o)}
        >
            <DialogContent className="max-w-[90vw] md:max-w-screen-md w-fit">
                <DialogHeader>
                    <DialogTitle>Add Auto Property</DialogTitle>
                    <DialogDescription>
                        Add an automatic tag, subject, or topic based on a file system glob pattern here.
                    </DialogDescription>
                </DialogHeader>
                <div className="flex flex-col gap-4 py-4">
                    <AutoSettingForm form={form} />
                </div>
                <DialogFooter>
                    <Button
                        onClick={() => setOpen(false)} variant="ghost"
                    >
                        Close
                    </Button>
                    <Button
                        onClick={form.handleSubmit(handleSubmit)}
                    >
                        Save
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}


AutoSettingFormModal.displayName = "AutoSettingFormModal"


export default AutoSettingFormModal;
