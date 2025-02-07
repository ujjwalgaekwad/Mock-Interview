import { Outlet } from "react-router"

function AuthenticationLayout() {
    return (
        <div className="h-screen w-screen flex justify-center items-center">
            <Outlet />
        </div>
    )
}

export default AuthenticationLayout
