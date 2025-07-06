import { memo } from "react";
import dynamic from "next/dynamic";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/custom-navigation-menu";

const AccountMenu = dynamic(() => import("./sideMenus/AccountMenu"));
const CartMenu = dynamic(() => import("./sideMenus/CartMenu"));
const ToggleThemeSwitch = dynamic(
  () => import("@/components/custom/ToggleThemeSwitch")
);

function SideMenues() {
  return (
    <div className="flex gap-5 items-center">
      <NavigationMenu viewport={false}>
        <NavigationMenuList className="gap-5">
          <CartMenu />
          <AccountMenu />
          <ToggleThemeSwitch />
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
export default memo(SideMenues);
