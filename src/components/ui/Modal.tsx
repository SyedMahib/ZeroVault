import { ReactNode } from "react";

interface ModalProps {
  open: boolean;
  title: string;
  children: ReactNode;
  footer?: ReactNode;
}

export default function Modal({
  open,
  title,
  children,
  footer,
}: ModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      <div className="w-full max-w-lg rounded-2xl border border-slate-700 bg-[var(--surface)] shadow-2xl">
        <header className="border-b border-slate-700 p-6">
          <h2 className="text-xl font-semibold">
            {title}
          </h2>
        </header>

        <div className="p-6">
          {children}
        </div>

        {footer && (
          <footer className="flex justify-end gap-3 border-t border-slate-700 p-6">
            {footer}
          </footer>
        )}
      </div>
    </div>
  );
}