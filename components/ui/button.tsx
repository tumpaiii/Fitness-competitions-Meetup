import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export default function Button({ className, type = "button", ...props }: ButtonProps) {
  return (
    <button type={type} className={cn("inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-semibold bg-[#102E2B] text-[#FFFFFF] focus-visible:outline focus-visible:outline-2 disabled:opacity-50", className)} {...props} />
  );
}
