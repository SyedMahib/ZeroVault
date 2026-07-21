import { Shield } from "lucide-react";

export default function Header() {
  return (
    <header className="flex items-center justify-between border-b border-slate-800 px-8 py-5">
      <div className="flex items-center gap-3">
        <Shield size={28} />
        <div>
          <h1 className="text-xl font-bold">ZeroVault</h1>
          <p className="text-sm text-slate-400">Offline File Encryption</p>
        </div>
      </div>

      <span className="text-sm text-slate-500">v0.1.0</span>
    </header>
  );
}
