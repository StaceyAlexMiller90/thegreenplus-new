'use client';
import { m, AnimatePresence } from 'framer-motion';
import classNames from 'classnames';
import { useModalContext } from '../../context/ModalContext';

import styles from './Modal.module.scss';

const modalVariants = {
    open: { x: 0 },
    closed: { x: '100%' },
};

const overlayVariants = {
    invisible: { opacity: 0 },
    visible: { opacity: 0.5 },
};

const Modal = () => {
    const { modalOpen, toggleModal, modalContent, modalTitle } = useModalContext();

    const closeModal = () => {
        toggleModal(false);
    };

    return (
        <AnimatePresence>
            {modalOpen ? (
                <>
                    <m.div
                        key="modal"
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={modalVariants}
                        transition={{ duration: 0.2, stiffness: 40 }}
                        role="dialog"
                        aria-modal={modalOpen}
                        aria-labelledby="modalTitle"
                        className={classNames(styles.Modal)}>
                        <div className={styles.Content}>
                            <div className={styles.Header}>
                                {modalTitle && (
                                    <h5 id="modalTitle" className={styles.Title}>
                                        {modalTitle}
                                    </h5>
                                )}
                                <button
                                    aria-label="close modal"
                                    onClick={closeModal}
                                    className={styles.Button}>
                                    <span className={styles.Close} />
                                </button>
                            </div>
                            <div className={styles.Body}>{modalContent}</div>
                        </div>
                    </m.div>
                    <m.div
                        initial="invisible"
                        animate={modalOpen ? 'visible' : 'invisible'}
                        exit="invisible"
                        variants={overlayVariants}
                        role="presentation"
                        className={classNames(styles.Overlay, { [styles.isOpen]: modalOpen })}
                        onClick={closeModal}
                    />
                </>
            ) : null}
        </AnimatePresence>
    );
};

export default Modal;
