'use client';
import { LazyMotion, domAnimation } from 'framer-motion';
import HonestSection from '@/components/section/HonestSection';
import HeroSection from '@/components/section/HeroSection';
import InfoSection from '@/components/section/InfoSection';
import StatementSection from '@/components/section/StatementSection';
import EasySection from '@/components/section/EasySection';
import ContactSection from '@/components/section/ContactSection';
import LoadingScreen from '@/components/loading-screen/LoadingScreen';
import Modal from '@/components/modal/Modal';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import ModalContextProvider from '@/context/ModalContextProvider';

import styles from './Home.module.scss';

const HomePage = () => {
    return (
        <LazyMotion strict features={domAnimation}>
            <ModalContextProvider>
                <Header />
                <main>
                    <Modal />
                    <LoadingScreen />
                    <HeroSection />
                    <div className={styles.Info}>
                        <InfoSection />
                    </div>
                    <HonestSection />
                    <StatementSection />
                    <EasySection />
                    <div id="contact">
                        <ContactSection />
                    </div>
                </main>
                <Footer />
            </ModalContextProvider>
        </LazyMotion>
    );
};

export default HomePage;
