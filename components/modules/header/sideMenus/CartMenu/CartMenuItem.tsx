import { NavigationMenuLink } from "@/components/ui/custom-navigation-menu";
import Image from "next/image";
import { ChangeEvent, memo, useState } from "react";
import { ImBin } from "react-icons/im";

function CartItem({ item }: { item: CartMenuItem }) {
  const [quantity, setQuantity] = useState(item.quantity);
  const onChange = (e: ChangeEvent<HTMLInputElement>) =>
    setQuantity(Number(e.target.value));
  const onAdd = () => setQuantity((old) => (old !== 50 ? old + 1 : old));
  const onSubtract = () => setQuantity((old) => (old !== 1 ? old - 1 : old));

  return (
    <li>
      <div className="flex gap-5">
        <div className="relative h-24 w-32">
          <Image
            src={`/images/items/${item.photo}.png`}
            alt=""
            fill
            className="h-full w-full object-cover"
          />
        </div>
        <div className="grow flex flex-col justify-between">
          <div className="flex flex-col gap-1">
            <NavigationMenuLink href={item.href} className="font-medium hover:bg-gradient-to-r hover:from-red hover:to-orange hover:text-transparent hover:bg-clip-text transition-all duration-500">
              {item.name}
            </NavigationMenuLink>
            <p className="text-sm text-neutral-400 font-bold flex gap-2 items-center">
              <span>${item.discountPrice}</span>
              <span className="line-through">${item.oldPrice}</span>
            </p>
          </div>
          <div className="flex justify-between">
            <div className="flex gap-2 items-center">
              <button className="flex items-center cursor-pointer" onClick={onSubtract}>-</button>
              <input
                type="text"
                value={quantity}
                onChange={onChange}
                name="quantity"
                className="h-full w-7 border border-neutral-400 rounded text-center text-sm flex justify-center items-center"
              />
              <button className="flex items-center cursor-pointer" onClick={onAdd}>+</button>
            </div>
            <ImBin size={18} />
          </div>
        </div>
      </div>
    </li>
  );
}
export default memo(CartItem);
