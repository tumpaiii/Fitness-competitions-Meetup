import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export default function Card({ className, ...props }: CardProps) {
  return <div className={cn("rounded-xl border border-[#E2E8E4] bg-[#FFFFFF] text-[#101B1A]", className)} {...props} />;
}
