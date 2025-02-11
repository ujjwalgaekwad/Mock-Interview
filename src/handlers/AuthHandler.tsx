import { db } from "@/config/config";
import LoadingPage from "@/pages/LoadingPage";
import { useAuth, useUser } from "@clerk/clerk-react";
import { getDoc, doc, serverTimestamp, setDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { User } from "@/types"


const AuthHandler = () => {
    const [loading, setLoading] = useState(false);
    const { isSignedIn } = useAuth();
    const { user } = useUser();
    const pathname = useLocation().pathname;
    const navigate = useNavigate();

    useEffect(() => {
        async function UserStoreData() {
            if (isSignedIn && user) {
                setLoading(true);
                try {
                    const UserInfo = await getDoc(doc(db, "users", user.id));
                    if (!UserInfo.exists()) {
                        const userData: User = {
                            id: user.id,
                            name: user.fullName || user.firstName || "Anonymous",
                            email: user.primaryEmailAddress?.emailAddress || "NA",
                            imageURL: user.imageUrl,
                            createdAt: serverTimestamp(),
                            updateAt: serverTimestamp(),
                        }
                        await setDoc(doc(db, "users", user.id), userData)
                    }
                } catch (error) {
                    console.log("Error AuthHandle:", error);
                } finally {
                    setLoading(false)
                }
            }
        }
        UserStoreData();
    }, [isSignedIn, pathname, user, navigate])

    if (loading) {
        return <LoadingPage />
    }
    return null
}

export default AuthHandler;