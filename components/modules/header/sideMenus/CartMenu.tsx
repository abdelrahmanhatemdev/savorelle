import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from "@/components/ui/custom-navigation-menu";
import Image from "next/image";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import CartItem from "./CartMenu/CartItem";
import { Button } from "@/components/ui/button";
import { cartList } from "@/data/cartList";

function CartMenu() {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger className="h-full flex items-center">
        <HiOutlineShoppingBag size={25} />
      </NavigationMenuTrigger>
      <NavigationMenuContent className="p-5 pb-10 -left-64">
        <ul className="w-[150px] lg:w-[320px] flex flex-col gap-5 max-h-54 overflow-y-auto pe-3">
          {cartList.map((item) => (
            <CartItem item={item} key={item.photo} />
          ))}
        </ul>
        <div className="h-[1px] bg-neutral-100 w-full mt-8"></div>
        <div className="flex flex-col gap-2 justify-center items-center pt-5">
          <p className="text-3xl font-semibold">$330</p>
          <Button variant={"special"} className="w-full h-12">
            Checkout
          </Button>
        </div>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
}
export default CartMenu;
