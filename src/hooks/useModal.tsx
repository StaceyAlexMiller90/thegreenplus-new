'use client';
import { ReactNode, useState } from 'react';
import styles from '../components/modal/Modal.module.scss';

export interface ModalData {
    modalOpen: boolean;
    modalContent: ReactNode;
    modalTitle: string;
}

const useModal = () => {
    const [modal, setModal] = useState<ModalData>({
        modalOpen: false,
        modalContent: null,
        modalTitle: '',
    });

    const toggleModal = (toBeOpened: boolean, modalContent: ReactNode, modalTitle: string) => {
        if (!toBeOpened) {
            setModal({ modalOpen: false, modalContent: null, modalTitle: '' });
            document.body.classList.remove(styles.ScrollLock);
            return;
        }

        if (toBeOpened) {
            if (modal.modalOpen) {
                setModal({ modalOpen: false, modalContent: null, modalTitle: '' });
                setTimeout(() => {
                    setModal({ modalOpen: true, modalContent, modalTitle });
                }, 0.25);
            } else {
                setModal({ modalOpen: true, modalContent, modalTitle });
            }
            document.body.classList.add(styles.ScrollLock);
            return;
        }
    };

    return {
        ...modal,
        toggleModal,
    };
};

export default useModal;
