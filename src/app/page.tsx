import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Hobby from "@/components/Hobby";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col gap-8 md:gap-16 pt-16">
        <Hero />
        <About />
        <Experience />
        <Hobby />
      </main>
      <Footer />
    </>
  );
}
