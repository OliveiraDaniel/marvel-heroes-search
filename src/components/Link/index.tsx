
import { ReactNode } from 'react'

interface LinkProps {
    href: string
    title: string
    children: ReactNode
}

export default function Link({href, title, children} : LinkProps) {
    return <a href={href} title={title}>{children}</a>
}