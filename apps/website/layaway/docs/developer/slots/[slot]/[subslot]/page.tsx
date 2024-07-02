import MDXArticle from '#/components/layouts/mdxArticle';
import MathjaxProvider from '#/components/utility/providers/mathjax';
import { allSlotDocs } from 'contentlayer/generated';
import { notFound } from 'next/navigation';
import React from 'react'



interface SubSlotDocumentationPageProps {
   params: {
        slot: string
        subSlot: string
    }
}

const SubSlotDocumentationPage = ({params}: SubSlotDocumentationPageProps) => {
    const item = allSlotDocs.find((f) => f.slot === params.slot && f.subSlot === params.subSlot)
    if(!item){
        return notFound()
    }
return (
    <MathjaxProvider>
            <MDXArticle
                mdx={item}
            />
    </MathjaxProvider>
)
}


SubSlotDocumentationPage.displayName = "SubSlotDocumentationPage"


export default SubSlotDocumentationPage;
