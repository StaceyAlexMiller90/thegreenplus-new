'use client';
import { useRef } from 'react';
import { useScroll, m } from 'framer-motion';
import HonestSection from '../components/section/HonestSection';
import HeroSection from '../components/section/HeroSection';
import InfoSection from '../components/section/InfoSection';
import StatementSection from '../components/section/StatementSection';
import EasySection from '../components/section/EasySection';
import ContactSection from '../components/section/ContactSection';
import useParallax from '../hooks/useParallax';

import styles from './Home.module.scss';

const HomePage = () => {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
    const y = useParallax(scrollYProgress, '0%', '12%');

    return (
        <>
            <m.div ref={ref} style={{ y }} className={styles.Hero}>
                <HeroSection />
            </m.div>
            <div className={styles.Info}>
                <InfoSection />
            </div>
            <HonestSection />
            <StatementSection />
            <EasySection />
            <div id="contact">
                <ContactSection />
            </div>
        </>
    );
};

export default HomePage;
