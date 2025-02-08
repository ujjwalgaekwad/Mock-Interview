import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useAuth } from "@clerk/clerk-react";
import NavigationBar from "./NavigationBar";



function ToggleMenu() {
    const { userId } = useAuth();
    return <Sheet>
        <SheetTrigger className="block md:hidden"><Menu /></SheetTrigger>
        <SheetContent>
            <nav className="flex flex-col gap-3">
                <NavigationBar isMobile />
                {userId && <NavLink to={"/interviews"} className={({ isActive }) => cn("text-base text-neutral-500", isActive && "text-black font-semibold")}>
                    Take an Interview
                </NavLink>}
            </nav>
        </SheetContent>
    </Sheet>

}

export default ToggleMenu;
