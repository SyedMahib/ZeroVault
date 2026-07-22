import { FileText } from "lucide-react";
import { useFiles } from "@/context/FileContext";

export default function FileListCard() {
  const { files, removeFile, clearFiles } = useFiles();

  return (
    <section className="file-list-card">
      <div className="card-header">
        <h2>Selected Files</h2>

        {files.length > 0 && (
          <button
            type="button"
            className="clear-files-btn"
            onClick={clearFiles}
          >
            Clear All
          </button>
        )}
      </div>

      {files.length === 0 ? (
        <div className="file-list-empty">
          <FileText size={42} />

          <p>No files selected</p>

          <span>Your selected files will appear here.</span>
        </div>
      ) : (
        <div className="file-list-items">
          {files.map((file) => (
            <div
              key={file.path}
              className="file-item"
            >
              <div className="file-item-left">
                <FileText size={20} />

                <div className="file-info">
                  <span className="file-name">
                    {file.name}
                  </span>

                  <span className="file-path">
                    {file.path}
                  </span>
                </div>
              </div>

              <button
                type="button"
                className="remove-file-btn"
                onClick={() => removeFile(file.path)}
                aria-label={`Remove ${file.name}`}
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}