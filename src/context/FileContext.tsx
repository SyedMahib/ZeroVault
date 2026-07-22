import { createContext, useContext } from "react";
import { useFilePicker } from "@/features/dropzone/hooks/useFilePicker";

const FileContext = createContext<ReturnType<typeof useFilePicker> | null>(null);

export function FileProvider({ children }: { children: React.ReactNode }) {
  const value = useFilePicker();

  return (
    <FileContext.Provider value={value}>
      {children}
    </FileContext.Provider>
  );
}

export function useFiles() {
  const context = useContext(FileContext);

  if (!context) {
    throw new Error("useFiles must be used inside FileProvider");
  }

  return context;
}