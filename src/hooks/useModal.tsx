'use client';
import { ReactNode, useState } from 'react';
import useScrollLock from './useScrollLock';

export interface ModalData {
    modalOpen: boolean;
    modalContent: ReactNode;
    modalTitle: string;
}

const useModal = () => {
    const { setScrollLocked } = useScrollLock();
    const [modal, setModal] = useState<ModalData>({
        modalOpen: false,
        modalContent: null,
        modalTitle: '',
    });

    const toggleModal = (toBeOpened: boolean, modalContent: ReactNode, modalTitle: string) => {
        setModal({ modalOpen: toBeOpened, modalContent, modalTitle });
        setScrollLocked(toBeOpened);
        return;
    };

    return {
        ...modal,
        toggleModal,
    };
};

export default useModal;
