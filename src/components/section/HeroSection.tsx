import IntroVideo from '@/components/video/Video';
import Quote from '@/components/quote/Quote';
import Section from './Section';
import styles from './HeroSection.module.scss';

const HeroSection = () => {
    return (
        <Section className={styles.Hero} variant="naked">
            <IntroVideo />
            <Quote />
        </Section>
    );
};

export default HeroSection;
