import { Lock, Unlock } from "lucide-react";

export default function EncryptionActions() {
  return (
    <section className="action-buttons">
      <button className="encrypt-btn">
        <Lock size={18} />
        Encrypt Files
      </button>

      <button className="decrypt-btn">
        <Unlock size={18} />
        Decrypt Files
      </button>
    </section>
  );
}