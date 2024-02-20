import Image from 'next/image';
import Section from './Section';
import styles from './InfoSection.module.scss';
import FoundedImage from '../../../public/Founded.png';

const InfoSection = () => {
    return (
        <Section variant="primary" className={styles.InfoSection}>
            <h2 className={styles.Text}>
                The Green Plus was founded in Amsterdam in 2021 by 3 partners with a clear mission:
                <br />
                <br />
                To have an increasingly positive impact on the world by making offsetting travel
                accessible and easy.
            </h2>

            <div className={styles.ImageContainer}>
                <Image
                    id="logo-video"
                    src={FoundedImage}
                    alt="balancing scales"
                    className={styles.Image}
                />
            </div>
        </Section>
    );
};

export default InfoSection;
