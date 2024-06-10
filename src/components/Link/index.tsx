
import { ReactNode } from 'react'

interface LinkProps {
    href: string
    title: string
    children: ReactNode
    target?: string
}

export default function Link({href, title, children, target} : LinkProps) {
    return <a href={href} title={title} target={target}>{children}</a>
}