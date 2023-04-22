import ModalContextProvider from '../context/ModalContextProvider';
import IntroVideo from '../components/video/Video';
import Footer from '../components/footer/Footer';
import Modal from '../components/modal/Modal';

const HomePage = () => {
    return (
        <ModalContextProvider>
            <div id="viewport">
                <div id="scroll-container" className="scroll-container">
                    <section id="hero" className="d-flex flex-wrap intro">
                        <div className="overlay" />
                        <IntroVideo />
                        <div className="container introquote d-flex flex-column align-items-start">
                            <h1 className="quote">
                                <span className="text_2">Offset </span>
                                <span className="text_2">Your </span>
                                <span className="text_2">Travel</span>
                            </h1>
                            <div className="quote_subline">
                                <p>
                                    <span className="honest">HONEST</span>{' '}
                                    <span className="and">&amp;</span>{' '}
                                    <span className="easy">EASY</span>.
                                </p>
                            </div>
                        </div>
                        <nav className="choose_lang d-none">
                            <div className="languages">
                                <a className="lang_link lang_switch nl_switch p-2">Netherlands</a>
                            </div>
                            <a className="lang_link lang-select d-flex align-items-center p-2">
                                English
                                <span className="icon">
                                    <svg
                                        width={5}
                                        height={4}
                                        viewBox="0 0 5 4"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M0.707107 0.0859375L3.03422 2.41305L2.32711 3.12016L0 0.793044L0.707107 0.0859375Z"
                                            fill="#000"
                                        />
                                        <path
                                            d="M4.0356 0L1.62002 2.41558L2.32713 3.12268L4.7427 0.707107L4.0356 0Z"
                                            fill="#000"
                                        />
                                    </svg>
                                </span>
                            </a>
                        </nav>
                    </section>
                    <section className="page-break__section page-break__section--about">
                        <div className="page-break container page-break--about">
                            <div className="page-break__text">
                                <h4 className="page-break__title">
                                    The Green Plus was founded in Amsterdam in 2021 by 3 partners
                                    with a clear mission: <br />
                                    <br /> To have an increasingly positive impact on the world by
                                    making offsetting travel accessible and easy.
                                </h4>
                            </div>
                            <div className="page-break__image">
                                <img
                                    id="logo-video"
                                    src="./Founded.png"
                                    width={1}
                                    height={64}
                                    className="fx-logo"
                                />
                            </div>
                        </div>
                    </section>
                    <section className="about_honest">
                        <div className="container w_limited">
                            <header className="header_headline">
                                <h2 className="splittext text-center">
                                    How we are
                                    <br />
                                    <span className="highlight--honest">honest.</span>
                                </h2>
                            </header>
                            <div className="row textfly">
                                <div className="text col-md-6">
                                    <h3 className="headline gs_reveal">Calculations</h3>
                                    <div className="gs_reveal gs_reveal_fromLeft">
                                        <p>
                                            There are different ways to calculate your emission. For
                                            example, one can look at the impact of only burning the
                                            fuel however the honest way would be to look at the
                                            impact of both the production and the actual usage of
                                            the fuel. Since honesty is one of our core values it is
                                            needless to say we calculate your emission by looking at
                                            the full picture, well-to-wheel.
                                        </p>
                                        <p>
                                            Next to that we work with the most recent science based
                                            emission factors which are constantly reviewed to ensure
                                            a realistic calculation of your footprint.
                                        </p>
                                    </div>
                                </div>
                                <div className="text col-md-6">
                                    <h3 className="headline gs_reveal">Door-to-Door</h3>
                                    <div className="gs_reveal gs_reveal_fromRight">
                                        <p>
                                            The calculation of someone&#39;s footprint is often
                                            based on the travel from airport to airport, whilst
                                            almost always people commute by car, taxi or train to
                                            get from one destination to the other.
                                        </p>
                                        <p>
                                            With our analysis of existing travel data, we were able
                                            to develop our door-to-door model in which we can
                                            include the local impact of each trip as opposed to just
                                            the calculation between the from and to destination, the
                                            full picture.
                                        </p>
                                    </div>
                                </div>
                                <div className="text col-md-6">
                                    <h3 className="headline gs_reveal">Low-risk projects</h3>
                                    <div className="gs_reveal gs_reveal_fromLeft">
                                        <p>
                                            Unfortunately compensation projects can sometimes fail,
                                            whether due to unforeseen circumstances or even simply a
                                            lack of oversight, such as forest fires or foul play.
                                        </p>
                                        <p>
                                            Because we care about the quality of the carbon credits
                                            we purchase; we developed our own Five-Star quality and
                                            risk assessment method. Every project we invest in has
                                            been analyzed according to the five biggest success
                                            factors of a carbon offset project.
                                        </p>
                                    </div>
                                </div>
                                <div className="text col-md-6">
                                    <h3 className="headline gs_reveal">Investing in the future</h3>
                                    <div className="gs_reveal gs_reveal_fromRight">
                                        <p>
                                            We realise that offsetting your footprint by funding
                                            carbon offset projects is not the long-term solution in
                                            our fight against climate change.
                                        </p>
                                        <p className="mb-0">
                                            By compensating through The Green Plus, you go beyond
                                            solely offsetting the impact. Instead, you will be
                                            automatically investing in projects and research that
                                            helps us in our transition towards a sustainable future.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="page-break__section">
                        <div className="page-break container">
                            <div className="page-break__video">
                                <div className="page-break__video-wrapper">
                                    <video
                                        id="calculations-video"
                                        className="fx-calculations gs_reveal gs_reveal_fromLeft icon-video"
                                        autoPlay
                                        loop
                                        muted
                                        playsInline></video>
                                </div>
                            </div>
                            <img
                                id="calculations-image"
                                className="icon-image"
                                data-src="./Calculations.png"
                                src=""
                                alt="calculations icon"
                                width={203}
                                height={174}
                            />
                            <div className="page-break__text">
                                <h4 className="page-break__title">
                                    Unless there are immediate and large scale reductions in
                                    greenhouse gas emissions, the global carbon budget will run out
                                    by 2030.
                                </h4>
                                <p className="page-break__subtitle">
                                    <a
                                        className="page-break__link"
                                        href="https://www.ipcc.ch/report/ar6/wg1/#FullReport">
                                        IPCC report of 2021
                                    </a>
                                </p>
                            </div>
                        </div>
                    </section>
                    <section id="about-easy" className="about_easy">
                        <div className="container w_limited">
                            <header className="header_headline">
                                <h2 className="splittext text-center">
                                    How we make things
                                    <br />
                                    <span className="highlight--easy">easy.</span>
                                </h2>
                            </header>
                            <div className="row">
                                <div className="text col-md-6">
                                    <h3 className="headline gs_reveal">Flexibility</h3>
                                    <div className="gs_reveal gs_reveal_fromLeft">
                                        <p>
                                            Because we believe in creating win-win solutions for the
                                            partners we work with, we developed multiple ways to
                                            easily integrate in your workflow. We are able to fully
                                            integrate with any travel agent thanks to our in-house
                                            designed and developed API. A request for an offset is
                                            as simple as a click of a button.
                                        </p>
                                        <p>
                                            If you are looking for a more on-demand approach that
                                            doesn&#39;t need integration in your system, we
                                            developed an online tool where you can easily fill in
                                            the trips you&#39;d like to offset.
                                        </p>
                                    </div>
                                </div>
                                <div className="text col-md-6">
                                    <h3 className="headline gs_reveal">Independent</h3>
                                    <div className="gs_reveal gs_reveal_fromRight">
                                        <p>
                                            For us at The Green Plus being independent is something
                                            we value as it means we can flexibly switch between
                                            different types of offset projects.
                                        </p>
                                        <p>
                                            This gives us the freedom to constantly review the
                                            market in order to purchase the best carbon credits for
                                            our clients.
                                        </p>
                                    </div>
                                </div>
                                <div className="text col-md-6">
                                    <h3 className="headline gs_reveal">Smart Data</h3>
                                    <div className="gs_reveal gs_reveal_fromRight">
                                        <p>
                                            We know that time is precious. Often offsetting requires
                                            answering a series of questions regarding each journey
                                            in order to calculate your impact.
                                        </p>
                                        <p>
                                            We developed a calculation method using a bank of
                                            comprehensive, trustworthy travel data that enables us
                                            to calculate your impact using only the origin and
                                            destination. Making offsetting accessible and easy
                                        </p>
                                    </div>
                                </div>
                                <div className="text col-md-6 text--video">
                                    <div className="fx-flexible__container">
                                        <img
                                            src="./Data.png"
                                            className="fx-flexible"
                                            width={1}
                                            height={78}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="contact" id="contact">
                        <div className="container w_limited container--contact">
                            <header className="header_headline header--contact">
                                <h2 id="response" className="splittext splittext--contact">
                                    Together we can make <br />a change. Let&#39;s start today.
                                </h2>
                            </header>
                            <div className="contact-section">
                                <div className="contact-section__column contact-section__column--mobile">
                                    <p className="contact_fade">
                                        For more information about the options we offer, our project
                                        criteria, project portfolio or any other queries.
                                    </p>
                                </div>
                                <form className="contact-form" id="contact-form">
                                    {/* name */}
                                    <div className="form-group">
                                        {/* <label for="name">Name</label> */}
                                        <input
                                            type="text"
                                            name="name"
                                            className="form-control"
                                            id="name"
                                            placeholder="Name"
                                            required
                                        />
                                    </div>
                                    {/* email */}
                                    <div className="form-group">
                                        {/* <label for="email">Email address</label> */}
                                        <input
                                            type="email"
                                            name="email"
                                            className="form-control"
                                            id="email"
                                            placeholder="Email"
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        {/* <label for="message">Message</label> */}
                                        <textarea
                                            className="form-control"
                                            id="message"
                                            name="message"
                                            rows={5}
                                            placeholder="Your message"
                                            required
                                            defaultValue={''}
                                        />
                                    </div>
                                </form>
                                <div className="contact-section__column contact-section__column--desktop">
                                    <p className="contact_fade contact-section__text--desktop">
                                        For more information about the options we offer, our project
                                        criteria, project portfolio or any other queries.
                                    </p>
                                    <button
                                        type="submit"
                                        form="contact-form"
                                        className="btn btn-primary form__button">
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <Modal />
            <Footer />
        </ModalContextProvider>
    );
};

export default HomePage;
