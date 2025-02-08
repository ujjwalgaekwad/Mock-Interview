import { cn } from "@/lib/utils";
import Container from "./Container";
import { useAuth } from "@clerk/clerk-react";
import Logo from "./Logo";
import NavigationBar from "./NavigationBar";
import { NavLink } from "react-router-dom";
import Profile from "./Profile";
import ToggleMenu from "./ToggleMenu";

function Header() {
  const { userId } = useAuth();
  return (
    <header className={cn("w-full border-b duration-150 transition-all ease-in-out")}>
      <Container>
        <div className="flex justify-between items-center gap-5">
          <div className="flex items-center gap-5">
            <Logo />
            <div className="hidden md:block">
              <nav className="flex items-center gap-5">
                <NavigationBar />
                {userId && <NavLink to={"/interviews"} className={({ isActive }) => cn("text-base text-neutral-500", isActive && "text-black font-semibold")}>
                  Take an Interview
                </NavLink>}
              </nav>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <Profile />
            <ToggleMenu />
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Header