import { cn } from "@/lib/utils";
import Link from "next/link";
import { memo} from "react";

function Logo({
  className
}: Readonly<{ className?: string; invert?: boolean; small?: boolean }>) {


  return (
    <Link className={cn( "flex text-3xl lg:text-5xl font-bold text-gradient-to-b from-red to-teal-400", className)} href="/">
      S
    </Link>
  );
}
 
export default memo(Logo);
