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
        <div
            className={classNames(styles.Modal, { [styles.isOpen]: modalOpen })}
            aria-hidden={!modalOpen}>
            <div
                role="presentation"
                className={styles.Overlay}
                data-testid="ocp-backdrop"
                onClick={closeModal}
            />

            <div className={styles.Dialog} role="dialog" aria-modal="true">
                <div className={styles.Content}>
                    <div className={styles.ModalHeader}>
                        {modalTitle && <h5 className={styles.Title}>{modalTitle}</h5>}
                        <button onClick={closeModal} className={styles.Button}>
                            <span className={styles.Close} />
                        </button>
                    </div>

                    {modalContent}
                </div>
            </div>
        </div>
    );
};

export default Modal;
