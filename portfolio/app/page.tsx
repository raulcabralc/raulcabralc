import { About } from "@/components/About";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ScrollIndicator } from "@/components/ScrollIndicator";

export default function Home() {
  return (
    <main className="bg-neutral-950 flex min-h-screen flex-col items-center text-white cursor-default">
      <Header />
      <Hero />
      <About />
      <ScrollIndicator />
    </main>
  );
}
