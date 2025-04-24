import { cn } from "@/lib/utils"
import { PropsWithChildren } from "react"

export const Section = (props: PropsWithChildren<{ className?: string }>) => {
    return (
        <section className={cn("max-width-3xl mx-auto px-4 py-8", props.className)}>
            {props.children}
        </section>
    )
}