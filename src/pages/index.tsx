import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useRef } from "react";

const Home: NextPage = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
      if(videoRef.current) {
        videoRef.current.play()
      }
    }, [])

    return (
        <>
            <Head>
                <title>The Green Plus</title>
            </Head>

            <main>
                <header id="mastheader">
                    <div className="container-fluid d-flex justify-content-between">
                        <a className="logo">
                            <svg
                                width="100%"
                                height="100%"
                                viewBox="0 0 893 428"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                xmlSpace="preserve"
                            >
                                <g transform="matrix(1,0,0,1,-228.5,-114.3)">
                                    <rect
                                        className="rect"
                                        x="228.5"
                                        y="114.3"
                                        width="427.5"
                                        height="427.5"
                                    />
                                    <path
                                        className="rec_white"
                                        d="M322.6,427.5L551.1,427.5L436.8,313.3L322.6,427.5Z"
                                    />
                                    <path
                                        className="rec_white"
                                        d="M562,287.7L341.2,228.5L326.5,283.7L436.8,313.3L547.2,342.8L562,287.7Z"
                                    />
                                    <g className="logo-text">
                                        <path d="M827,183.9L802.2,183.9L802.2,252.6L789.1,252.6L789.1,183.9L764.4,183.9L764.4,171.4L827,171.4L827,183.9Z" />
                                        <path d="M896.3,212.3L896.3,252.6L883.2,252.6L883.2,215C883.2,205.1 878.8,199.9 869.2,199.9C858.1,199.9 852,207.2 852,219.5L852,252.6L838.9,252.6L838.9,163.2L852,163.2L852,199.2C856.5,191.8 863.5,187.4 873.4,187.4C887.6,187.4 896.3,196.8 896.3,212.3Z" />
                                        <path d="M974,224.3L922.1,224.3C923.1,236 931.4,242.5 942.1,242.5C949.8,242.5 956.1,239.2 959.2,233L972.8,233C967.8,247.3 955.6,254 942,254C922.6,254 908.8,240.1 908.8,220.8C908.8,201.5 922.5,187.4 941.8,187.4C962.3,187.4 975.3,203.3 974,224.3ZM922.9,213.6L960,213.6C958,204.9 951.4,198.7 941.8,198.7C931.8,198.7 925.1,205 922.9,213.6Z" />
                                        <path d="M848.3,325.4L848.3,368.6L836.9,368.6L836.9,352.4C833.1,362.8 822,370 807.5,370C784.5,370 766.8,352.4 766.8,328.1C766.8,303.8 784.7,286 808.7,286C827.6,286 842.5,297.1 847.6,313.6L833.6,313.6C829.2,304.3 820.1,298.5 808.7,298.5C792.1,298.5 780.2,310.9 780.2,328.3C780.2,344.8 791.1,357.8 808.6,357.8C822.2,357.8 833,349.8 835.1,336.6L804.6,336.6L804.6,325.5L848.3,325.5L848.3,325.4Z" />
                                        <path d="M903,303.7L903,317C901.8,316.9 900.8,316.8 899.1,316.8C887.1,316.8 878,323.5 878,339.3L878,368.5L864.9,368.5L864.9,304.7L878,304.7L878,317.3C881.8,308.4 889.1,303.3 899.2,303.3C900.8,303.4 902.1,303.5 903,303.7Z" />
                                        <path d="M975.4,340.3L923.5,340.3C924.5,352 932.8,358.5 943.5,358.5C951.2,358.5 957.5,355.2 960.6,349L974.2,349C969.2,363.3 957,370 943.4,370C924,370 910.2,356.1 910.2,336.8C910.2,317.5 923.9,303.4 943.2,303.4C963.7,303.4 976.7,319.3 975.4,340.3ZM924.2,329.6L961.3,329.6C959.3,320.9 952.7,314.7 943.1,314.7C933.2,314.8 926.5,321 924.2,329.6Z" />
                                        <path d="M1051.3,340.3L999.4,340.3C1000.4,352 1008.7,358.5 1019.4,358.5C1027.1,358.5 1033.4,355.2 1036.5,349L1050.1,349C1045.1,363.3 1032.9,370 1019.3,370C999.9,370 986.1,356.1 986.1,336.8C986.1,317.5 999.8,303.4 1019.1,303.4C1039.6,303.4 1052.6,319.3 1051.3,340.3ZM1000.1,329.6L1037.2,329.6C1035.2,320.9 1028.6,314.7 1019,314.7C1009.1,314.8 1002.3,321 1000.1,329.6Z" />
                                        <path d="M1121.5,328.3L1121.5,368.6L1108.4,368.6L1108.4,331C1108.4,321.1 1104.1,315.9 1094.5,315.9C1083.2,315.9 1077.2,323.2 1077.2,335.5L1077.2,368.6L1064.1,368.6L1064.1,304.8L1077.2,304.8L1077.2,315.4C1081.7,308 1088.6,303.4 1098.6,303.4C1112.9,303.4 1121.5,312.8 1121.5,328.3Z" />
                                        <path d="M832.1,430.1C832.1,446 821.3,457.1 803.6,457.1L783.4,457.1L783.4,484.6L770.3,484.6L770.3,403.4L803.6,403.4C821.3,403.4 832.1,414.1 832.1,430.1ZM818.8,430.2C818.8,422 813.8,415.9 803.1,415.9L783.4,415.9L783.4,444.6L803.1,444.6C813.8,444.6 818.8,438.5 818.8,430.2Z" />
                                        <rect
                                            x="844.9"
                                            y="395.3"
                                            width="13.2"
                                            height="89.4"
                                        />
                                        <path d="M929.5,420.8L929.5,484.6L916.4,484.6L916.4,474C911.9,481.3 905,486 895.2,486C881,486 872.6,476.6 872.6,461.1L872.6,420.8L885.7,420.8L885.7,458.4C885.7,468.3 889.9,473.5 899.4,473.5C910.3,473.5 916.5,466.2 916.5,453.9L916.5,420.8L929.5,420.8Z" />
                                        <path d="M941.4,464.1L954.7,464.1C956.7,471.2 961.9,474.4 972.9,474.4C981.4,474.4 986.6,471.8 986.6,467.1C986.6,461.8 980.6,460.9 969.9,458.4C952,454 944.5,450.4 944.5,439.7C944.5,426.8 955.4,419.4 971.4,419.4C987.8,419.4 996.9,427.2 999.3,438.8L986.1,438.8C984.2,433.6 979.4,431 971.2,431C962.7,431 957.7,433.9 957.7,438.3C957.7,442.4 961.6,443.4 972.8,446.1C990.1,450.2 1000.1,453.2 1000.1,465.6C1000.1,479.3 987.8,486 972.7,486C955.9,486 943.9,477.9 941.4,464.1Z" />
                                    </g>
                                </g>
                            </svg>
                        </a>
                        <nav className="navigation">
                            <button className="btn_contact">Contact</button>
                        </nav>
                    </div>
                </header>
                <div id="viewport">
                    <div id="scroll-container" className="scroll-container">
                        <section id="hero" className="d-flex flex-wrap intro">
                            <div className="overlay" />
                            <video
                                ref={videoRef}
                                id="introvideo"
                                loop
                                muted
                                playsInline
                                className="introvideo"
                            >
                                <source
                                    src="./greenplus.mp4"
                                    type="video/mp4"
                                />
                                <source
                                    src="./greenplus.webm"
                                    type="video/webm"
                                />
                            </video>
                            <div className="container introquote d-flex flex-column align-items-start">
                                <h1 className="quote">
                                    <span className="text_2">Offset </span>
                                    <span className="text_2">Your </span>
                                    <span className="text_2">Travel</span>
                                </h1>
                                <div className="quote_subline">
                                    <p>
                                        <span className="honest">HONEST</span>{" "}
                                        <span className="and">&amp;</span>
                                        <span className="easy">EASY</span>.
                                    </p>
                                </div>
                            </div>
                            <nav className="choose_lang d-none">
                                <div className="languages">
                                    <a className="lang_link lang_switch nl_switch p-2">
                                        Netherlands
                                    </a>
                                </div>
                                <a className="lang_link lang-select d-flex align-items-center p-2">
                                    English
                                    <span className="icon">
                                        <svg
                                            width={5}
                                            height={4}
                                            viewBox="0 0 5 4"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
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
                                        The Green Plus was founded in Amsterdam
                                        in 2021 by 3 partners with a clear
                                        mission: <br />
                                        <br /> To have an increasingly positive
                                        impact on the world by making offsetting
                                        travel accessible and easy.
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
                                        <span className="highlight--honest">
                                            honest.
                                        </span>
                                    </h2>
                                </header>
                                <div className="row textfly">
                                    <div className="text col-md-6">
                                        <h3 className="headline gs_reveal">
                                            Calculations
                                        </h3>
                                        <div className="gs_reveal gs_reveal_fromLeft">
                                            <p>
                                                There are different ways to
                                                calculate your emission. For
                                                example, one can look at the
                                                impact of only burning the fuel
                                                however the honest way would be
                                                to look at the impact of both
                                                the production and the actual
                                                usage of the fuel. Since honesty
                                                is one of our core values it is
                                                needless to say we calculate
                                                your emission by looking at the
                                                full picture, well-to-wheel.
                                            </p>
                                            <p>
                                                Next to that we work with the
                                                most recent science based
                                                emission factors which are
                                                constantly reviewed to ensure a
                                                realistic calculation of your
                                                footprint.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="text col-md-6">
                                        <h3 className="headline gs_reveal">
                                            Door-to-Door
                                        </h3>
                                        <div className="gs_reveal gs_reveal_fromRight">
                                            <p>
                                                The calculation of someone&#39;s
                                                footprint is often based on the
                                                travel from airport to airport,
                                                whilst almost always people
                                                commute by car, taxi or train to
                                                get from one destination to the
                                                other.
                                            </p>
                                            <p>
                                                With our analysis of existing
                                                travel data, we were able to
                                                develop our door-to-door model
                                                in which we can include the
                                                local impact of each trip as
                                                opposed to just the calculation
                                                between the from and to
                                                destination, the full picture.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="text col-md-6">
                                        <h3 className="headline gs_reveal">
                                            Low-risk projects
                                        </h3>
                                        <div className="gs_reveal gs_reveal_fromLeft">
                                            <p>
                                                Unfortunately compensation
                                                projects can sometimes fail,
                                                whether due to unforeseen
                                                circumstances or even simply a
                                                lack of oversight, such as
                                                forest fires or foul play.
                                            </p>
                                            <p>
                                                Because we care about the
                                                quality of the carbon credits we
                                                purchase; we developed our own
                                                Five-Star quality and risk
                                                assessment method. Every project
                                                we invest in has been analyzed
                                                according to the five biggest
                                                success factors of a carbon
                                                offset project.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="text col-md-6">
                                        <h3 className="headline gs_reveal">
                                            Investing in the future
                                        </h3>
                                        <div className="gs_reveal gs_reveal_fromRight">
                                            <p>
                                                We realise that offsetting your
                                                footprint by funding carbon
                                                offset projects is not the
                                                long-term solution in our fight
                                                against climate change.
                                            </p>
                                            <p className="mb-0">
                                                By compensating through The
                                                Green Plus, you go beyond solely
                                                offsetting the impact. Instead,
                                                you will be automatically
                                                investing in projects and
                                                research that helps us in our
                                                transition towards a sustainable
                                                future.
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
                                            playsInline
                                        ></video>
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
                                        Unless there are immediate and large
                                        scale reductions in greenhouse gas
                                        emissions, the global carbon budget will
                                        run out by 2030.
                                    </h4>
                                    <p className="page-break__subtitle">
                                        <a
                                            className="page-break__link"
                                            href="https://www.ipcc.ch/report/ar6/wg1/#FullReport"
                                        >
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
                                        <span className="highlight--easy">
                                            easy.
                                        </span>
                                    </h2>
                                </header>
                                <div className="row">
                                    <div className="text col-md-6">
                                        <h3 className="headline gs_reveal">
                                            Flexibility
                                        </h3>
                                        <div className="gs_reveal gs_reveal_fromLeft">
                                            <p>
                                                Because we believe in creating
                                                win-win solutions for the
                                                partners we work with, we
                                                developed multiple ways to
                                                easily integrate in your
                                                workflow. We are able to fully
                                                integrate with any travel agent
                                                thanks to our in-house designed
                                                and developed API. A request for
                                                an offset is as simple as a
                                                click of a button.
                                            </p>
                                            <p>
                                                If you are looking for a more
                                                on-demand approach that doesn&#39;t
                                                need integration in your system,
                                                we developed an online tool
                                                where you can easily fill in the
                                                trips you&#39;d like to offset.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="text col-md-6">
                                        <h3 className="headline gs_reveal">
                                            Independent
                                        </h3>
                                        <div className="gs_reveal gs_reveal_fromRight">
                                            <p>
                                                For us at The Green Plus being
                                                independent is something we
                                                value as it means we can
                                                flexibly switch between
                                                different types of offset
                                                projects.
                                            </p>
                                            <p>
                                                This gives us the freedom to
                                                constantly review the market in
                                                order to purchase the best
                                                carbon credits for our clients.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="text col-md-6">
                                        <h3 className="headline gs_reveal">
                                            Smart Data
                                        </h3>
                                        <div className="gs_reveal gs_reveal_fromRight">
                                            <p>
                                                We know that time is precious.
                                                Often offsetting requires
                                                answering a series of questions
                                                regarding each journey in order
                                                to calculate your impact.
                                            </p>
                                            <p>
                                                We developed a calculation
                                                method using a bank of
                                                comprehensive, trustworthy
                                                travel data that enables us to
                                                calculate your impact using only
                                                the origin and destination.
                                                Making offsetting accessible and
                                                easy
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
                                    <h2
                                        id="response"
                                        className="splittext splittext--contact"
                                    >
                                        Together we can make <br />a change.
                                        Let&#39;s start today.
                                    </h2>
                                </header>
                                <div className="contact-section">
                                    <div className="contact-section__column contact-section__column--mobile">
                                        <p className="contact_fade">
                                            For more information about the
                                            options we offer, our project
                                            criteria, project portfolio or any
                                            other queries.
                                        </p>
                                    </div>
                                    <form
                                        className="contact-form"
                                        id="contact-form"
                                    >
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
                                                defaultValue={""}
                                            />
                                        </div>
                                    </form>
                                    <div className="contact-section__column contact-section__column--desktop">
                                        <p className="contact_fade contact-section__text--desktop">
                                            For more information about the
                                            options we offer, our project
                                            criteria, project portfolio or any
                                            other queries.
                                        </p>
                                        <button
                                            type="submit"
                                            form="contact-form"
                                            className="btn btn-primary form__button"
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <footer className="footer">
                            <a
                                className="footer_link privacy"
                                data-bs-toggle="modal"
                                data-bs-target="#modal_privacy"
                            >
                                Privacy |
                            </a>
                            <a
                                className="footer_link imprint"
                                data-bs-toggle="modal"
                                data-bs-target="#modal_imprint"
                            >
                                Imprint |
                            </a>
                            <a
                                className="footer_link terms"
                                data-bs-toggle="modal"
                                data-bs-target="#modal_terms"
                            >
                                Terms &amp; Conditions
                            </a>
                        </footer>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Home;
