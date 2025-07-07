import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuTrigger,
} from "@/components/ui/custom-navigation-menu";
import { accountList } from "@/data/accountList";
import { LuUserRound } from "react-icons/lu";

function AccountMenu() {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger className="h-full flex items-center">
        <LuUserRound size={25} />
      </NavigationMenuTrigger>
      <NavigationMenuContent className=" -left-20 pr-0">
        <ul className="w-[150px] lg:w-[200px] flex flex-col">
          {accountList.map((item) => (
            <li key={item.name}>
              <a
                href={item.link}
                className="relative group/account-link flex items-center gap-5 p-3 overflow-hidden z-0"
              >
                <span className="absolute inset-0 -z-10 bg-gradient-to-r from-red to-orange opacity-0 transition-opacity ease-in-out duration-1000 group-hover/account-link:opacity-100" />

                <item.icon
                  size={18}
                  className="transition-colors duration-300"
                />
                <span className="group-hover/account-link:ms-1 transition-all duration-1000">
                  {item.name}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
}

export default AccountMenu;
