import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuTrigger,
} from "@/components/ui/custom-navigation-menu";
import { accountList } from "@/data/accountList";
import { LuUserRound } from "react-icons/lu";
import dynamic from "next/dynamic";

const AccountMenuItem = dynamic( () => import('@/components/modules/header/sideMenus/AccountMenu/AccountMenuItem'))
function AccountMenu() {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger className="h-full flex items-center">
        <LuUserRound size={25} />
      </NavigationMenuTrigger>
      <NavigationMenuContent className=" -left-20 pr-0">
        <ul className="w-[150px] lg:w-[200px] flex flex-col">
          {accountList.map((item) => (
            <AccountMenuItem item={item} key={item.name} />
          ))}
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
}

export default AccountMenu;
