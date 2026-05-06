import AmbientBackdrop from './components/AmbientBackdrop.jsx';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import EmergencyBanner from './components/EmergencyBanner.jsx';
import Services from './components/Services.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import WhyUs from './components/WhyUs.jsx';
import Testimonials from './components/Testimonials.jsx';
import TrustRow from './components/TrustRow.jsx';
import Brands from './components/Brands.jsx';
import FAQ from './components/FAQ.jsx';
import LiveChatPill from './components/LiveChatPill.jsx';
import BottomActionBar from './components/BottomActionBar.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div className="relative pb-16 md:pb-0">
      <AmbientBackdrop />
      <Navbar />
      <main>
        <Hero />
        <EmergencyBanner />
        <Services />
        <HowItWorks />
        <WhyUs />
        <Testimonials />
        <TrustRow />
        <Brands />
        <FAQ />
      </main>
      <Footer />
      <LiveChatPill />
      <BottomActionBar />
    </div>
  );
}
