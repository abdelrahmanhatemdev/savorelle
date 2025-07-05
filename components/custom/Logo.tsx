import { cn } from "@/lib/utils";
import Link from "next/link";
import { memo} from "react";

function Logo({
  className
}: Readonly<{ className?: string; invert?: boolean; small?: boolean }>) {


  return (
    <Link className={cn( "flex text-3xl lg:text-5xl font-bold bg-gradient-to-r from-red to-orange font-poppins", className)} href="/">
      S
    </Link>
  );
}
 
export default memo(Logo);
