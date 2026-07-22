import { FolderOpen } from "lucide-react";
import { useFiles } from "@/context/FileContext";

export default function DropZoneCard() {
  const { openFilePicker } = useFiles();

  return (
    <section className="dropzone-card">
      <button type="button" className="dropzone-button" onClick={openFilePicker}>
        <div className="dropzone-icon">
          <FolderOpen size={56} />
        </div>

        <h2 className="dropzone-title">Drag &amp; Drop Files</h2>

        <p className="dropzone-subtitle">
          or click here to browse your computer
        </p>
      </button>
    </section>
  );
}
