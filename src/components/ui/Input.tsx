import { forwardRef, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className = "", ...props }, ref) => {
    return (
      <div className="flex flex-col gap-2">
        {label && (
          <label className="text-sm font-medium text-slate-300">
            {label}
          </label>
        )}

        <input
          ref={ref}
          {...props}
          className={`
            h-12
            rounded-xl
            border
            border-slate-700
            bg-slate-900
            px-4
            text-white
            outline-none
            transition-all
            duration-150
            placeholder:text-slate-500
            focus:border-blue-500
            focus:ring-2
            focus:ring-blue-500/20
            ${className}
          `}
        />

        {error && (
          <span className="text-sm text-red-500">
            {error}
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;