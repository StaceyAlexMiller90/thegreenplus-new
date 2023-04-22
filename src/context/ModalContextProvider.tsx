'use client';
import { FC, PropsWithChildren } from 'react';
import ModalContext from '../context/ModalContext';
import useModal from '../hooks/useModal';

const ModalContextProvider: FC<PropsWithChildren> = ({ children }) => {
    const { modalOpen, toggleModal, modalContent, modalTitle } = useModal();

    return (
        <ModalContext.Provider value={{ modalOpen, toggleModal, modalContent, modalTitle }}>
            {children}
        </ModalContext.Provider>
    );
};

export default ModalContextProvider;
