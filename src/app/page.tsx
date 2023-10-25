import HonestSection from 'src/components/section/HonestSection';
import HeroSection from '../components/section/HeroSection';
import InfoSection from '../components/section/InfoSection';
import StatementSection from 'src/components/section/StatementSection';
import EasySection from 'src/components/section/EasySection';
import ContactSection from 'src/components/section/ContactSection';

const HomePage = () => {
    return (
        <>
            <HeroSection />
            <InfoSection />
            <HonestSection />
            <StatementSection />
            <EasySection />
            <ContactSection />
        </>
    );
};

export default HomePage;
