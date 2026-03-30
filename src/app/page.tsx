import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Tesis from "@/components/Tesis";
import Metodologia from "@/components/Metodologia";
import Arquetipos from "@/components/Arquetipos";
import LeadForm from "@/components/LeadForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Tesis />
        <Metodologia />
        <Arquetipos />
        <LeadForm />
      </main>
      <Footer />
    </>
  );
}
