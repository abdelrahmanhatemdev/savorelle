import Logo from "@/components/custom/Logo";
import { memo } from "react";
import dynamic from "next/dynamic";
import Container from "@/components/custom/Container";
const MainMenu = dynamic(() => import("@/components/modules/header/MainMenu"));
const SideMenus = dynamic(
  () => import("@/components/modules/header/SideMenus")
);

function Header() {
  return (
    <nav className="py-5 bg-neutral-900">
      <Container>
        <div className="flex items-center justify-between">
          <Logo />
          <MainMenu />
          <SideMenus />
        </div>
      </Container>
    </nav>
  );
}
export default memo(Header);
