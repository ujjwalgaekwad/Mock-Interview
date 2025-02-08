import { useAuth, UserButton } from "@clerk/clerk-react"
import { Loader } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

function Profile() {
    const { isLoaded, isSignedIn } = useAuth();

    if (!isLoaded) {
        return <Loader className="w-5 h-5 animate-spin" />
    }
    return (
        <div>
            {isSignedIn ? <UserButton /> :
                <Link to={"/signin"}>
                    <Button size={"sm"}>Get Started</Button>
                </Link>
            }
        </div>
    )
}

export default Profile
