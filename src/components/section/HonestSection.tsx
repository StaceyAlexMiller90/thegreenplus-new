import Section from './Section';
import styles from './HonestSection.module.scss';
import Grid from '../grid/Grid';
import HeaderHighlight from '../header-highlight/HeaderHighlight';

const HONEST_DATA = [
    {
        heading: 'Calculations',
        paragraphs: [
            'There are different ways to calculate your emission. For example, one can look at the impact of only burning the fuel however the honest way would be to look at the impact of both the production and the actual usage of the fuel. Since honesty is one of our core values it is needless to say we calculate your emission by looking at the full picture, well-to-wheel.',
            'Next to that we work with the most recent science based emission factors which are constantly reviewed to ensure a realistic calculation of your footprint.',
        ],
    },
    {
        heading: 'Door-to-Door',
        paragraphs: [
            'The calculation of someone’s footprint is often based on the travel from airport to airport, whilst almost always people commute by car, taxi or train to get from one destination to the other.',
            'With our analysis of existing travel data, we were able to develop our door-to-door model in which we can include the local impact of each trip as opposed to just the calculation between the from and to destination, the full picture.',
        ],
    },
    {
        heading: 'Low-risk projects',
        paragraphs: [
            'Unfortunately compensation projects can sometimes fail, whether due to unforeseen circumstances or even simply a lack of oversight, such as forest fires or foul play.',
            'Because we care about the quality of the carbon credits we purchase; we developed our own Five-Star quality and risk assessment method. Every project we invest in has been analyzed according to the five biggest success factors of a carbon offset project.',
        ],
    },
    {
        heading: 'Investing in the future',
        paragraphs: [
            'We realise that offsetting your footprint by funding carbon offset projects is not the long-term solution in our fight against climate change.',
            'By compensating through The Green Plus, you go beyond solely offsetting the impact. Instead, you will be automatically investing in projects and research that helps us in our transition towards a sustainable future.',
        ],
    },
];

const HonestSection = () => {
    return (
        <Section variant="secondary" className={styles.HonestSection}>
            <HeaderHighlight heading="How we are honest." highlightSubstring="honest." />
            <Grid gridItems={HONEST_DATA} />
        </Section>
    );
};

export default HonestSection;
