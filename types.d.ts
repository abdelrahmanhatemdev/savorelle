import { ReactNode } from "react";

interface CartMenuItem {
  name: string;
  photo: string;
  href: string;
  oldPrice: number;
  discountPrice: number;
  quantity: number;
}

interface AccountMenuItem {
  name: string;
  link: string;
  icon: IconType;
}
