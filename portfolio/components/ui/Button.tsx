import * as React from "react"
import { cn } from "@/lib/utils"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center rounded-md text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 disabled:pointer-events-none disabled:opacity-50"
    
    const variants = {
      primary: "bg-cyan-500 text-gray-950 hover:bg-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20 font-bold",
      secondary: "bg-zinc-800 text-zinc-100 hover:bg-zinc-700 hover:text-white",
      outline: "border border-zinc-700 bg-transparent hover:bg-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-600",
      ghost: "hover:bg-zinc-800/50 text-zinc-400 hover:text-cyan-400",
    }

    const sizes = {
      sm: "h-9 px-4 text-xs",
      md: "h-11 px-6 text-sm",
      lg: "h-14 px-8 text-base",
    }

    return (
      <button
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }