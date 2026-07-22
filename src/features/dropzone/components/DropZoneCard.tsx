import { FolderOpen } from "lucide-react";

import { useFiles } from "@/context/FileContext";
import { useDragDrop } from "../hooks/useDragDrop";

export default function DropZoneCard() {
  const { openFilePicker } = useFiles();

  const { isDragging } = useDragDrop();

  return (
    <section
      className={`dropzone-card ${
        isDragging ? "drag-active" : ""
      }`}
    >
      <button
        type="button"
        className="dropzone-button"
        onClick={openFilePicker}
      >
        <div className="dropzone-icon">
          <FolderOpen size={56} />
        </div>

        <h2 className="dropzone-title">
          {isDragging
            ? "Drop your files here"
            : "Drag & Drop Files"}
        </h2>

        <p className="dropzone-subtitle">
          {isDragging
            ? "Release to add your files"
            : "or click here to browse your computer"}
        </p>
      </button>
    </section>
  );
}