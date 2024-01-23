'use client';
import { useRef } from 'react';
import { useScroll, m } from 'framer-motion';
import useParallax from '@/hooks/useParallax';
import IntroVideo from '@/components/video/Video';
import Quote from '@/components/quote/Quote';
import Section from './Section';
import styles from './HeroSection.module.scss';

const HeroSection = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
    const y = useParallax(scrollYProgress, '0%', '12%');

    return (
        <m.div ref={ref} style={{ y }} className={styles.Wrapper}>
            <Section className={styles.Hero} variant="naked">
                <IntroVideo />
                <Quote />
            </Section>
        </m.div>
    );
};

export default HeroSection;
