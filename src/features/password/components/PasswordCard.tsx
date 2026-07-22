import { Lock } from "lucide-react";

export default function PasswordCard() {
  return (
    <section className="password-card">
      <div className="card-header">
        <h2>Encryption Password</h2>
      </div>

      <div className="password-body">
        <div className="password-input-wrapper">
          <Lock size={18} />

          <input
            type="password"
            placeholder="Enter a strong password..."
            className="password-input"
          />
        </div>

        <p className="password-hint">
          This password will be required to decrypt your files.
        </p>
      </div>
    </section>
  );
}