import ColoredInput from "@/components/ColoredInput";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-10 bg-gray-950 p-8">
      <h1 className="text-5xl font-bold text-emerald-400 tracking-tight">Hello World</h1>
      <ColoredInput />
    </main>
  );
}
