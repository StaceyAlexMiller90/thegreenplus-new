'use client';
import { MouseEventHandler } from 'react';
import { useModalContext } from '../../context/ModalContext';
import Imprint from '../legal/Imprint';
import PrivacyPolicy from '../legal/PrivacyPolicy';
import Terms from '../legal/Terms';
import { ModalData } from '../../hooks/useModal';
import Button from '../button/Button';

import styles from './Footer.module.scss';

const MODALS: Record<string, Partial<ModalData>> = {
    privacy: {
        modalContent: <PrivacyPolicy />,
        modalTitle: 'Privacy Policy',
    },
    imprint: {
        modalContent: <Imprint />,
        modalTitle: 'Imprint',
    },
    terms: {
        modalContent: <Terms />,
        modalTitle: 'Terms & Conditions',
    },
};

const Footer = () => {
    const { toggleModal } = useModalContext();

    const openModal: MouseEventHandler<HTMLButtonElement> = e => {
        toggleModal(
            true,
            MODALS[e.currentTarget.value].modalContent,
            MODALS[e.currentTarget.value].modalTitle,
        );
    };

    return (
        <footer className={styles.Footer}>
            <Button variant="naked" className={styles.Link} value="privacy" onClick={openModal}>
                Privacy
            </Button>
            <Button variant="naked" className={styles.Link} value="imprint" onClick={openModal}>
                Imprint
            </Button>
            <Button variant="naked" className={styles.Link} value="terms" onClick={openModal}>
                Terms & Conditions
            </Button>
        </footer>
    );
};

export default Footer;
