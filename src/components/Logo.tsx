import { CircleDashed } from "lucide-react";
import { Link } from "react-router-dom";

export default function Logo() {
    return (
        <div>
            <Link to={"/"}>
                <CircleDashed className="text-green-800 hover:animate-spin cursor-pointer" size={35} />
            </Link>
        </div>
    )
}