import { ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "danger";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  fullWidth?: boolean;
  loading?: boolean;
}

const variants: Record<Variant, string> = {
  primary:
    "bg-blue-600 hover:bg-blue-700 text-white",

  secondary:
    "bg-slate-800 hover:bg-slate-700 text-white",

  danger:
    "bg-red-600 hover:bg-red-700 text-white",
};

export default function Button({
  children,
  variant = "primary",
  fullWidth = false,
  loading = false,
  disabled,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      disabled={disabled || loading}
      className={`
        h-12
        rounded-xl
        px-6
        font-medium
        transition-all
        duration-150
        disabled:opacity-50
        disabled:cursor-not-allowed
        ${fullWidth ? "w-full" : ""}
        ${variants[variant]}
        ${className}
      `}
    >
      {loading ? "Loading..." : children}
    </button>
  );
}