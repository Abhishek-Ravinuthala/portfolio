import Hero from "./components/Hero";
import PortfolioSections from "./components/PortfolioSections";
import TopNav from "./components/TopNav";

export default function Page() {
  return (
    <div className="relative min-h-screen text-white">
      <TopNav />
      <Hero />
      <PortfolioSections />
    </div>
  );
}