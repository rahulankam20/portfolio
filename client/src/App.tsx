import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/Navbar";
import CustomCursor from "@/components/CustomCursor";
import Home from "@/components/sections/Home";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import Preloader from "@/components/Preloader";

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-background text-foreground">
        <Preloader />
        <Navbar />
        <CustomCursor />
        <main>
          <Home />
          <About />
          <Projects />
          <Contact />
        </main>
        <Toaster />
      </div>
    </QueryClientProvider>
  );
}