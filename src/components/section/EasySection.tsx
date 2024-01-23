import { useRef } from 'react';
import Image from 'next/image';
import { useScroll, m } from 'framer-motion';
import useParallax from '@/hooks/useParallax';
import Grid from '@/components/grid/Grid';
import HeaderHighlight from '@/components/header-highlight/HeaderHighlight';
import Section from './Section';
import styles from './EasySection.module.scss';

import DataImage from '../../../public/Data.png';

const EasySection = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
    const y = useParallax(scrollYProgress, '0%', '-10%');

    return (
        <Section variant="secondary" className={styles.EasySection}>
            <HeaderHighlight heading="How we make things easy." highlightSubstring="easy." />
            <m.div ref={ref} style={{ y }}>
                <Grid>
                    <Grid.Item heading="Flexibility">
                        <p>
                            Because we believe in creating win-win solutions for the partners we
                            work with, we developed multiple ways to easily integrate in your
                            workflow. We are able to fully integrate with any travel agent thanks to
                            our in-house designed and developed API. A request for an offset is as
                            simple as a click of a button.
                        </p>
                        <p>
                            If you are looking for a more on-demand approach that doesn&apos;t need
                            integration in your system, we developed an online tool where you can
                            easily fill in the trips you&apos;d like to offset.
                        </p>
                    </Grid.Item>

                    <Grid.Item heading="Independent">
                        <p>
                            For us at The Green Plus being independent is something we value as it
                            means we can flexibly switch between different types of offset projects.
                        </p>
                        <p>
                            This gives us the freedom to constantly review the market in order to
                            purchase the best carbon credits for our clients.
                        </p>
                    </Grid.Item>
                    <Grid.Item heading="Smart Data">
                        <p>
                            We know that time is precious. Often offsetting requires answering a
                            series of questions regarding each journey in order to calculate your
                            impact.
                        </p>
                        <p>
                            We developed a calculation method using a bank of comprehensive,
                            trustworthy travel data that enables us to calculate your impact using
                            only the origin and destination. Making offsetting accessible and easy.
                        </p>
                    </Grid.Item>
                    <Grid.Item>
                        <Image
                            key="data"
                            src={DataImage}
                            alt="bar graph"
                            className={styles.Image}
                        />
                    </Grid.Item>
                </Grid>
            </m.div>
        </Section>
    );
};

export default EasySection;
