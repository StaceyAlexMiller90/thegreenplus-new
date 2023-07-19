import Section from './Section';
import IntroVideo from '../video/Video';
import Quote from '../quote/Quote';
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
