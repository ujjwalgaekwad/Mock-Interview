import LoadingPage from "@/pages/LoadingPage";
import { useAuth } from "@clerk/clerk-react"
import { Navigate } from "react-router";

function ProtectedRoute({ className }: { className?: string }) {
    const { isLoaded, isSignedIn } = useAuth();

    if (!isLoaded) return <LoadingPage />
    if (!isSignedIn) return <Navigate to={'/signin'} replace/>
    return className
}

export default ProtectedRoute
