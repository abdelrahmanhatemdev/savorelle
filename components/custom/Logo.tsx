import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { memo} from "react";

function Logo({
  className
}: Readonly<{ className?: string; invert?: boolean; small?: boolean }>) {


  return (
    <Link className={cn( "w-10 h-10 relative", className)} href="/">
      <Image
      src={"/logo.webp"}
      alt="Logo"
      fill
      className="w-full h-full"
      />
    </Link>
  );
}
 
export default memo(Logo);
