import Header from "@/components/Header/Header";
import HomeSection from "@/components/HomeSection/HomeSection";
import Loading from "@/components/HomeSection/loading";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <Header />
      <main className="relative z-0 bg-primary-gua">
        <Suspense fallback={<Loading />}>
          <HomeSection />
        </Suspense>
      </main>
    </>
  );
}
