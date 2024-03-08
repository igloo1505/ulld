"use client"
import React from 'react'
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '#/components/shad/ui/form';
import { Input } from '#/components/shad/ui/input';
import { Textarea } from '#/components/shad/ui/textarea';
import { UseFormReturn } from 'react-hook-form';
import { ToDoZodSchema } from '#/zod/local/todo';



export interface ToDoListFormStepOneProps {
    currentStep: number
    form: UseFormReturn<ToDoZodSchema>
    resetCategories?: () => void
}



const ToDoListFormStepOne = ({ currentStep, form }: ToDoListFormStepOneProps) => {
    if (currentStep !== 1) return null
    return (
        <div>
            <FormField
                control={form.control}
                name="task"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Task</FormLabel>
                        <FormControl>
                            <Input  {...field} />
                        </FormControl>
                        <FormDescription>
                            Can contain latex
                        </FormDescription>
                        <FormMessage />
                    </FormItem>
                )
                }
            />
            <FormField
                control={form.control}
                name="details"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Details</FormLabel>
                        <FormControl>
                            <Textarea
                                className="w-full"
                                {...field}
                            />
                        </FormControl>
                        <FormDescription>
                            Can contain latex
                        </FormDescription>
                        <FormMessage />
                    </FormItem>
                )
                }
            />
            <FormField
                control={form.control}
                name="id"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Id</FormLabel>
                        <FormControl>
                            <Input  {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )
                }
            />
        </div>
    )
}


ToDoListFormStepOne.displayName = "ToDoListFormStepOne"


export default ToDoListFormStepOne;
