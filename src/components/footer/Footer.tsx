'use client';
import { MouseEventHandler } from 'react';
import { useModalContext } from '@/context/ModalContext';
import Imprint from '@/components/legal/Imprint';
import PrivacyPolicy from '@/components/legal/PrivacyPolicy';
import Terms from '@/components/legal/Terms';
import { ModalData } from '@/hooks/useModal';
import Button from '@/components/button/Button';

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
        e.preventDefault();
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
