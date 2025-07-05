import { cn } from "@/lib/utils";
import { memo, ReactNode } from "react";

function Container({
  className,
  children,
}: Readonly<{ className?: string; children: ReactNode }>) {
  return <div className={cn("w-full lg:w-[1200px] mx-auto", className)}>{children}</div>;
}

export default memo(Container);
