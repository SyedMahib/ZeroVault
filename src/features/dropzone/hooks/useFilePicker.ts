import { useState } from "react";
import { open } from "@tauri-apps/plugin-dialog";

export interface SelectedFile {
  name: string;
  path: string;
}

export function useFilePicker() {
  const [files, setFiles] = useState<SelectedFile[]>([]);

  const openFilePicker = async () => {
    try {
      const result = await open({
        multiple: true,
        directory: false,
      });

      if (!result) return;

      const paths = Array.isArray(result) ? result : [result];

      const selected = paths.map((path) => ({
        path,
        name: path.split("/").pop() ?? path,
      }));

      // Merge with existing files and prevent duplicates
      setFiles((current) => {
        const merged = [...current];

        for (const file of selected) {
          if (!merged.some((f) => f.path === file.path)) {
            merged.push(file);
          }
        }

        return merged;
      });
    } catch (error) {
      console.error("Failed to open file picker:", error);
    }
  };

  const removeFile = (path: string) => {
    setFiles((current) => current.filter((file) => file.path !== path));
  };

  const clearFiles = () => {
    setFiles([]);
  };

  return {
    files,
    openFilePicker,
    removeFile,
    clearFiles,
  };
}