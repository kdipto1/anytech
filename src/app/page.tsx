import FutureOfFinance from "@/components/home/FutureOfFinance";
import HeroSection from "@/components/home/HeroSection";
import PartnersSection from "@/components/home/PartnersSection";
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
        <PartnersSection />
      </main>
    </div>
  );
}
