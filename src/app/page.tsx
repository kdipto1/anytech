import FutureOfFinance from "@/components/home/FutureOfFinance";
import HeroSection from "@/components/home/HeroSection";
import PhilosophySection from "@/components/home/PhilosophySection";
import Technology from "@/components/home/Technology";

export default function Home() {
  return (
    <div className="">
      <main className="">
        <HeroSection />
        <FutureOfFinance />
        <PhilosophySection />
        <Technology />
      </main>
    </div>
  );
}
