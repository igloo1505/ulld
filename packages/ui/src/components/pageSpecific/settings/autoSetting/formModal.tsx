"use client"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, Button, useToast } from '@ulld/tailwind/base'
import React from 'react'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import AutoSettingForm from './autoSettingForm'
import { AutoSettingType, AutoPropertyFormSchema, client } from '@ulld/api'
import { useRouter } from 'next/router'



interface AutoSettingFormModalProps {
    edit?: AutoSettingType
    open: boolean
    setOpen: (b: boolean) => void
    appendSetting: (s: AutoSettingType) => void
}




const AutoSettingFormModal = ({ edit, open, setOpen, appendSetting }: AutoSettingFormModalProps) => {
    const router = useRouter()
    const { toast } = useToast()
    const form = useForm<z.infer<typeof AutoPropertyFormSchema>>({
        resolver: zodResolver(AutoPropertyFormSchema),
        defaultValues: {
            glob: edit?.glob || "",
            value: edit?.value || "",
            type: edit?.type || "subject",
            id: edit?.id || undefined
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
        if (edit) {
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
