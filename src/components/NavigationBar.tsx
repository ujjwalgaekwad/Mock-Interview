import { cn } from "@/lib/utils";
import { NavLink } from "react-router-dom";
import Navs from "./Navs";
interface Navites {
    isMobile?: boolean;
}

function NavigationBar({ isMobile = false }: Navites) {

    return (
        <ul className={cn("flex items-center gap-6", isMobile && "items-start flex-col gap-6")}>
            {Navs.map((route) =>
                <NavLink key={route.label} to={route.slug} className={({ isActive }) => cn("text-base text-neutral-500", isActive && "text-black font-semibold")}>
                    {route.label}
                </NavLink>
            )}
        </ul>
    )
}

export default NavigationBar
