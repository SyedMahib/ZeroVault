import { useEffect, useState } from "react";
import { getCurrentWebview } from "@tauri-apps/api/webview";

import { useFiles } from "@/context/FileContext";
import type { SelectedFile } from "@/features/file-list";

export function useDragDrop() {
  const [isDragging, setIsDragging] = useState(false);

  const { addFiles } = useFiles();

  useEffect(() => {
    let unlisten: (() => void) | undefined;

    const setup = async () => {
      unlisten = await getCurrentWebview().onDragDropEvent((event) => {
        switch (event.payload.type) {
          case "over":
            setIsDragging(true);
            break;

          case "leave":
            setIsDragging(false);
            break;

          case "drop":
            setIsDragging(false);

            const files: SelectedFile[] = event.payload.paths.map((path) => ({
              path,
              name: path.split("/").pop() ?? path,
            }));

            addFiles(files);
            break;
        }
      });
    };

    setup();

    return () => {
      unlisten?.();
    };
  }, [addFiles]);

  return {
    isDragging,
  };
}