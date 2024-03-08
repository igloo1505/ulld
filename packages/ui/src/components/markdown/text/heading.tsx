import clsx from 'clsx'
import React from 'react'


const H1 = (props: React.HTMLAttributes<HTMLHeadingElement>) => {
    return (
        <h1 {...props} className={clsx("scroll-m-20 block text-4xl font-extrabold lg:text-5xl w-full text-center py-2", props.className && props.className)} ></h1>
    )
}


const H2 = (props: React.HTMLAttributes<HTMLHeadingElement>) => {
    return (
        <h2 {...props} className={clsx("scroll-m-20 block text-3xl font-semibold first:mt-0 py-2", props.className && props.className)} ></h2>
    )
}

const H3 = (props: React.HTMLAttributes<HTMLHeadingElement>) => {
    return (
        <h3 {...props} className={clsx("scroll-m-20 block text-2xl font-semibold py-1", props.className && props.className)} ></h3>
    )
}

const H4 = (props: React.HTMLAttributes<HTMLHeadingElement>) => {
    return (
        <h4 {...props} className={clsx("scroll-m-20 block text-xl font-semibold py-1", props.className && props.className)} ></h4>
    )
}

const H5 = (props: React.HTMLAttributes<HTMLHeadingElement>) => {
    return (
        <h5 {...props} className={clsx("text-xl py-1 block", props.className && props.className)} ></h5>
    )
}

const H6 = (props: React.HTMLAttributes<HTMLHeadingElement>) => {
    return (
        <h6 {...props} className={clsx("text-lg py-1 block", props.className && props.className)} ></h6>
    )
}


H1.displayName = "H1"

export { H1, H2, H3, H4, H5, H6 }
