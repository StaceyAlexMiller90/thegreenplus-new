import { useRef } from 'react';
import { useScroll, m } from 'framer-motion';
import useParallax from '../../hooks/useParallax';
import Section from './Section';
import styles from './HonestSection.module.scss';
import Grid from '../grid/Grid';
import HeaderHighlight from '../header-highlight/HeaderHighlight';

const HonestSection = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
    const y = useParallax(scrollYProgress, '0%', '-10%');

    return (
        <Section variant="secondary" className={styles.HonestSection}>
            <HeaderHighlight heading="How we are honest." highlightSubstring="honest." />
            <m.div ref={ref} style={{ y }}>
                <Grid>
                    <Grid.Item heading="Calculations">
                        <p>
                            There are different ways to calculate your emission. For example, one
                            can look at the impact of only burning the fuel however the honest way
                            would be to look at the impact of both the production and the actual
                            usage of the fuel. Since honesty is one of our core values it is
                            needless to say we calculate your emission by looking at the full
                            picture, well-to-wheel.
                        </p>
                        <p>
                            Next to that we work with the most recent science based emission factors
                            which are constantly reviewed to ensure a realistic calculation of your
                            footprint.
                        </p>
                    </Grid.Item>
                    <Grid.Item heading="Door-to-Door">
                        <p>
                            The calculation of someone&apos;s footprint is often based on the travel
                            from airport to airport, whilst almost always people commute by car,
                            taxi or train to get from one destination to the other.
                        </p>
                        <p>
                            With our analysis of existing travel data, we were able to develop our
                            door-to-door model in which we can include the local impact of each trip
                            as opposed to just the calculation between the from and to destination,
                            the full picture.
                        </p>
                    </Grid.Item>
                    <Grid.Item heading="Low-risk projects">
                        <p>
                            Unfortunately compensation projects can sometimes fail, whether due to
                            unforeseen circumstances or even simply a lack of oversight, such as
                            forest fires or foul play.
                        </p>
                        <p>
                            Because we care about the quality of the carbon credits we purchase; we
                            developed our own Five-Star quality and risk assessment method. Every
                            project we invest in has been analyzed according to the five biggest
                            success factors of a carbon offset project.
                        </p>
                    </Grid.Item>
                    <Grid.Item heading="Investing in the future">
                        <p>
                            We realise that offsetting your footprint by funding carbon offset
                            projects is not the long-term solution in our fight against climate
                            change.
                        </p>
                        <p>
                            By compensating through The Green Plus, you go beyond solely offsetting
                            the impact. Instead, you will be automatically investing in projects and
                            research that helps us in our transition towards a sustainable future.
                        </p>
                    </Grid.Item>
                </Grid>
            </m.div>
        </Section>
    );
};

export default HonestSection;
