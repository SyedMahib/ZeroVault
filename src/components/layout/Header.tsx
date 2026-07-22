import { Moon, Settings, Shield } from "lucide-react";

export default function Header() {
  return (
    <header className="app-header">
      <div className="brand">
        <div className="brand-icon">
          <Shield size={20} />
        </div>

        <div className="brand-text">
          <h1>ZeroVault</h1>
          <p>Secure Local File Encryption</p>
        </div>
      </div>

      <div className="toolbar">
        <button className="icon-button" aria-label="Theme">
          <Moon size={18} />
        </button>

        <button className="icon-button" aria-label="Settings">
          <Settings size={18} />
        </button>
      </div>
    </header>
  );
}