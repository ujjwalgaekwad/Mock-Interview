import { cn } from "@/lib/utils"
import { Loader } from "lucide-react"
function LoadingPage({ className }: { className?: string }) {

    return (
        <div className={cn("w-screen h-screen flex justify-center bg-transparent", className)}>
            <Loader className="w-5 h-5 animate-spin" />
        </div>
    )
}

export default LoadingPage
