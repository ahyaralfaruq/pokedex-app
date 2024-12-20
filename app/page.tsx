import Header from "@/components/Header/Header";
import HomeSection from "@/components/HomeSection/HomeSection";

export default function Home() {
  return (
    <>
      <Header />
      <main className="relative z-0 bg-primary">
        <HomeSection />
        <div>test</div>
      </main>
    </>
  );
}
