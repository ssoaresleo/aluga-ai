import * as React from "react";
import { cn } from "../../lib/utils";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "px-4 h-8 bg-zinc-900 border border-zinc-800 rounded-lg placeholder-zinc-500 outline-none text-sm hover:border-zinc-800 focus-visible:border-orange-400 focus-visible:ring-4 ring-orange-400/10",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
