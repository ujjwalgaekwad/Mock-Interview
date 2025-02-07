import { cn } from "@/lib/utils"

interface ContainerProps {
    children: React.ReactNode;
    className?: string;
}

function Container({ className, children }: ContainerProps) {
    return (
        <div className={cn("w-full mx-auto px-4 md:px-8 py-4", className)}>
            {children}
        </div>
    )
}

export default Container
