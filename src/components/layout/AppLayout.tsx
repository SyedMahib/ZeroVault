import type { ReactNode } from "react";

import Header from "./Header";
import StatusBar from "./StatusBar";

interface AppLayoutProps {
  children: ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="app-layout">
      <Header />

      <main className="app-main">
        {children}
      </main>

      <StatusBar />
    </div>
  );
}