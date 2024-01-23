'use client';
import { createContext, ReactNode, useContext } from 'react';
import { ModalData } from '@/hooks/useModal';

export interface ModalContextProps extends ModalData {
    toggleModal(toBeOpened: boolean, modalContent?: ReactNode, modalTitle?: string): void;
}

const ModalContext = createContext<ModalContextProps>({
    modalOpen: false,
    toggleModal: () => {
        /** no-op */
    },
    modalTitle: '',
    modalContent: null,
});

export default ModalContext;

export function useModalContext() {
    const context = useContext(ModalContext);

    if (context === undefined) {
        throw new Error('useModalContext must be used within a ModalContext.Provider');
    }
    return context;
}
