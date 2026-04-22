import ColoredInput from "@/components/ColoredInput";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-10 bg-white p-8">
      <h1 className="text-5xl font-bold text-gray-900">Hello World</h1>
      <ColoredInput />
    </main>
  );
}
