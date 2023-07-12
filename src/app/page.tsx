import ModalContextProvider from '../context/ModalContextProvider';
import IntroVideo from '../components/video/Video';
import Footer from '../components/footer/Footer';
import Modal from '../components/modal/Modal';

const HomePage = () => {
    return (
        <ModalContextProvider>
            <IntroVideo />
            <Modal />
            <Footer />
        </ModalContextProvider>
    );
};

export default HomePage;
