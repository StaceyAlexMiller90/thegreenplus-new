import Section from './Section';
import styles from './StatementSection.module.scss';

const StatementSection = () => {
    return (
        <Section variant="primary" className={styles.StatementSection}>
            <video
                id="calculations-video"
                className={styles.Video}
                autoPlay
                loop
                muted
                playsInline
                poster="./Calculations.png">
                <source src="./calculations.mp4" type="video/mp4" />
            </video>

            <div className={styles.Body}>
                <q cite="https://www.ipcc.ch/report/ar6/wg1/#FullReport" className={styles.Text}>
                    Unless there are immediate and large scale reductions in greenhouse gas
                    emissions, the global carbon budget will run out by 2030.
                </q>
                <a className={styles.Link} href="https://www.ipcc.ch/report/ar6/wg1/#FullReport">
                    IPCC report of 2021
                </a>
            </div>
        </Section>
    );
};

export default StatementSection;
