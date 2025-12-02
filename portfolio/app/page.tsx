import { About } from "@/components/About";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ScrollIndicator } from "@/components/ScrollIndicator";
import { Technologies } from "@/components/Technologies";

export default function Home() {
  return (
    <main className="bg-neutral-950 flex min-h-screen flex-col items-center text-white cursor-default w-full overflow-x-hidden">
      <Header />
      <Hero />
      <About />
      <Technologies />
      <ScrollIndicator />
    </main>
  );
}
