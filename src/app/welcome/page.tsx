import FAQSection from "@/components/WelcomePage/FAQSection";
import Header from "@/components/WelcomePage/Header";
import ItineraryForm from "@/components/WelcomePage/ItineraryForm";
import ServicesSection from "@/components/WelcomePage/ServicesSection";
import TravelStories from "@/components/WelcomePage/TravelStories";
import TripSection from "@/components/WelcomePage/TripSection";
import WelcomeSection from "@/components/WelcomePage/WelcomeSection";

export default function HomePage() {
  return (
    <main>
      <Header />
      <WelcomeSection />
      <ItineraryForm />
      <TripSection />
      <TravelStories />
      <ServicesSection />
      <FAQSection />
    </main>
  );
}
