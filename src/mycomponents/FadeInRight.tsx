"use client"

import React from "react"
import { useInView } from "react-intersection-observer"

type Props = {
    children: React.ReactNode
}

export const FadeInRight: React.FC<Props> = ({ children }) => {
    const { ref, inView } = useInView({
        rootMargin: "-50px",
        triggerOnce: true,
    })

    const fadeInClassName = inView ? "animate-fade-in-right" : "opacity-0"

    const wrappedChildren = React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
            const className = [child.props.className, fadeInClassName]
                .filter(el => el)
                .join(" ");

            return React.cloneElement(child as React.ReactElement, {
                ref,
                className,
            })
        } else {
            return child
        }
    })

    return <>{wrappedChildren}</>
}