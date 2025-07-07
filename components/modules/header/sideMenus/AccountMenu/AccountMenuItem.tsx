import type { AccountMenuItem as AccountMenuItemType } from "@/types";

function AccountMenuItem({ item }: { item: AccountMenuItemType }) {
  return (
    <li>
      <a
        href={item.link}
        className="relative group/account-link flex items-center gap-5 p-3 overflow-hidden z-0"
      >
        <span className="absolute inset-0 -z-10 bg-gradient-to-r from-red to-orange opacity-0 transition-opacity ease-in-out duration-1000 group-hover/account-link:opacity-100" />

        <item.icon size={18} className="transition-colors duration-300" />
        <span className="group-hover/account-link:ms-1 transition-all duration-1000">
          {item.name}
        </span>
      </a>
    </li>
  );
}
export default AccountMenuItem;
