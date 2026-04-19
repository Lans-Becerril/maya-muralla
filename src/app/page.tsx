import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Tesis from "@/components/Tesis";
import Metodologia from "@/components/Metodologia";
import Arquetipos from "@/components/Arquetipos";
import TestimoniosDobleCapa from "@/components/TestimoniosDobleCapa";
import LeadForm from "@/components/LeadForm";
import ReportesEstrategicos from "@/components/ReportesEstrategicos";
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
        <TestimoniosDobleCapa />
        <LeadForm />
        <ReportesEstrategicos />
      </main>
      <Footer />
    </>
  );
}
