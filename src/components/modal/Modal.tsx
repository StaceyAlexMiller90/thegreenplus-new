'use client';
import classNames from 'classnames';
import { useModalContext } from 'src/context/ModalContext';

import styles from './Modal.module.scss';

const Modal = () => {
    const { modalOpen, toggleModal, modalContent, modalTitle } = useModalContext();

    const closeModal = () => {
        toggleModal(false);
    };

    return (
        <div className={classNames(styles.Modal, { [styles.isOpen]: modalOpen })}>
            <div role="presentation" className={styles.Overlay} onClick={closeModal} />

            <div
                className={styles.Dialog}
                role="dialog"
                aria-modal={modalOpen}
                aria-labelledby="modalTitle">
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
            </div>
        </div>
    );
};

export default Modal;
