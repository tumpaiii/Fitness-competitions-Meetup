import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  className?: string;
}

export default function Badge({ className, ...props }: BadgeProps) {
  return <span className={cn("inline-flex rounded-full border border-[#E2E8E4] px-2.5 py-0.5 text-xs font-semibold", className)} {...props} />;
}
