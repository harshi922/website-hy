import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { Projects } from "@/components/Projects";
import WorkEx from "@/components/WorkEx";
import CurrentWork from "@/components/CurrentWork";
import Grid from "@/components/Grid";
export default function Home() {

  return (
    <main className="relative bg-black-900 flex justify-center items-center flex-col overflow-hidden mx-auto">
      <div className="max-w-9xl w-full">
        <FloatingNav />
        <Hero />
        <CurrentWork />
        <WorkEx />
        <Projects />
        <Grid />
        <Footer />
      </div>
    </main>
    
  );
}
