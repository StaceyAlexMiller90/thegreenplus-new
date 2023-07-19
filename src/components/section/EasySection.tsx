import Section from './Section';
import styles from './EasySection.module.scss';
import Grid from '../grid/Grid';
import HeaderHighlight from '../header-highlight/HeaderHighlight';
import Image from 'next/image';
import DataImage from '../../../public/Data.png';

const EASY_DATA = [
    {
        heading: 'Flexibility',
        paragraphs: [
            'Because we believe in creating win-win solutions for the partners we work with, we developed multiple ways to easily integrate in your workflow. We are able to fully integrate with any travel agent thanks to our in-house designed and developed API. A request for an offset is as simple as a click of a button.',
            "If you are looking for a more on-demand approach that doesn't need integration in your system, we developed an online tool where you can easily fill in the trips you'd like to offset.",
        ],
    },
    {
        heading: 'Independent',
        paragraphs: [
            'For us at The Green Plus being independent is something we value as it means we can flexibly switch between different types of offset projects.',
            'This gives us the freedom to constantly review the market in order to purchase the best carbon credits for our clients.',
        ],
    },
    {
        heading: 'Smart Data',
        paragraphs: [
            'We know that time is precious. Often offsetting requires answering a series of questions regarding each journey in order to calculate your impact.',
            'We developed a calculation method using a bank of comprehensive, trustworthy travel data that enables us to calculate your impact using only the origin and destination. Making offsetting accessible and easy.',
        ],
    },
    {
        customComponent: (
            <Image key="data" src={DataImage} alt="bar graph" className={styles.Image} />
        ),
    },
];

const EasySection = () => {
    return (
        <Section variant="secondary" className={styles.EasySection}>
            <HeaderHighlight heading="How we make things easy." highlightSubstring="easy." />
            <Grid gridItems={EASY_DATA} />
        </Section>
    );
};

export default EasySection;
