import { a as a$1 } from '../../../chunk-WGFZJLBQ.mjs';
import { a } from '../../../chunk-ORBRSQKI.mjs';
import '../../../chunk-PD25TUY5.mjs';
import * as e from 'react';
import { Slot } from '@radix-ui/react-slot';
import { FormProvider, Controller, useFormContext } from 'react-hook-form';

var b=FormProvider,c=e.createContext({}),N=({...t})=>e.createElement(c.Provider,{value:{name:t.name}},e.createElement(Controller,{...t})),l=()=>{let t=e.useContext(c),o=e.useContext(F),{getFieldState:r,formState:a}=useFormContext(),m=r(t.name,a);if(!t)throw new Error("useFormField should be used within <FormField>");let{id:i}=o;return {id:i,name:t.name,formItemId:`${i}-form-item`,formDescriptionId:`${i}-form-item-description`,formMessageId:`${i}-form-item-message`,...m}},F=e.createContext({}),x=e.forwardRef(({className:t,...o},r)=>{let a$1=e.useId();return e.createElement(F.Provider,{value:{id:a$1}},e.createElement("div",{ref:r,className:a("space-y-2",t),...o}))});x.displayName="FormItem";var C=e.forwardRef(({className:t,...o},r)=>{let{error:a$2,formItemId:m}=l();return e.createElement(a$1,{ref:r,className:a(a$2&&"text-destructive",t),htmlFor:m,...o})});C.displayName="FormLabel";var P=e.forwardRef(({...t},o)=>{let{error:r,formItemId:a,formDescriptionId:m,formMessageId:i}=l();return e.createElement(Slot,{ref:o,id:a,"aria-describedby":r?`${m} ${i}`:`${m}`,"aria-invalid":!!r,...t})});P.displayName="FormControl";var I=e.forwardRef(({className:t,...o},r)=>{let{formDescriptionId:a$1}=l();return e.createElement("p",{ref:r,id:a$1,className:a("text-sm text-muted-foreground",t),...o})});I.displayName="FormDescription";var T=e.forwardRef(({className:t,children:o,...r},a$1)=>{let{error:m,formMessageId:i}=l(),n=m?String(m?.message):o;return n?e.createElement("p",{ref:a$1,id:i,className:a("text-sm font-medium text-destructive",t),...r},n):null});T.displayName="FormMessage";

export { b as Form, P as FormControl, I as FormDescription, N as FormField, x as FormItem, C as FormLabel, T as FormMessage, l as useFormField };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=form.mjs.map