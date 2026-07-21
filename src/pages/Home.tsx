import Header from "../components/layout/Header";
import Card from "../components/ui/Card";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)]">
      <Header />

      <div className="mx-auto flex max-w-6xl flex-col gap-6 p-8">
        <Card title="Drop Zone">
            <div className="h-48 rounded-xl border-2 border-dashed border-slate-700" ></div>
        </Card>

        <Card title="Selected Files">
          <div className="h-24 rounded-xl bg-slate-900" />
        </Card>

        <Card title="Password">
          <div className="h-20 rounded-xl bg-slate-900" />
        </Card>

        <Card title="Actions">
          <div className="h-16 rounded-xl bg-slate-900" />
        </Card>

        <Card title="Status">
          <div className="h-12 rounded-xl bg-slate-900" />
        </Card>
      </div>
    </main>
  );
}