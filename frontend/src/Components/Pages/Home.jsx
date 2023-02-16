import { Link } from "react-router-dom";
import Hero from "../Layout/Hero";
import picture from "../../assets/woman-on-phone-with-doctor-on-demand-1200x1200.jpg";
import appStore from "../../assets/app-store.png";
import googlePlay from "../../assets/google-play.png";
import onlineMeeting from "../../assets/video-visit-img.jpg";
import useCare from "../../assets/use-care-img.jpg";

function Home() {
    return (
        <div>
            <Hero />
            <div className="container mx-auto max-width">
                <div className="row">
                    <div className="col m-0 p-0">
                        <img className="w-100 m-0 p-0" src={picture} alt="" />
                    </div>
                    <div className="col m-0 d-flex flex-column align-items-center justify-content-between">
                        <div className="bg-dod-blue text-white p-5">
                            <div className="dod-hero-text">
                                <p className="text-white m-0">
                                    Need to see a doctor now?
                                </p>
                                <p className="m-0">
                                    You've come to the right place.
                                </p>
                            </div>
                            <p>
                                Doctor On Demand offers 24-hour urgent care and
                                online therapy appointments in days. Telehealth
                                you can trust.
                            </p>
                        </div>
                        <div className="w-100">
                            <Link to="/">
                                <p className="w-100 text-center h5 p-4 border">
                                    Start a virtual doctor visit
                                </p>
                            </Link>
                        </div>
                        <div className="w-100">
                            <Link to="/">
                                <p className="bg-dod-blue text-white w-100 text-center h5 p-4">
                                    Book online therapy or psychiatry
                                </p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto">
                <div className="row">
                    <div className="col text-start">
                        <p>
                            Meet with an online therapist or psychiatrist when
                            and where it works for you.
                        </p>
                    </div>
                    <div className="col text-end">
                        <Link to="/">
                            <div>Online Therapy </div>
                        </Link>
                    </div>
                </div>
            </div>
            {/* WE'RE HERE FOR YOU */}

            <div className="container mx-auto">
                <div className="row">
                    <div className="col">
                        <h2>We're Here For You</h2>
                    </div>
                    <div className="col">
                        <p>
                            Meet with an urgent care doctor in minutes. Schedule
                            a session with a{" "}
                            <Link to="/">therapist or psychiatrist</Link> this
                            week.
                        </p>
                    </div>

                    <div className="row gap-5">
                        <div className="col-md-4 card card-width">
                            <Link to="/">
                                <h3 className="card-title card-link">
                                    Cold & Flue
                                </h3>
                            </Link>
                            <ul>
                                <li>Cough</li>
                                <li>Headaches</li>
                                <li>Nausea & vomiting</li>
                                <li>Fever</li>
                            </ul>
                        </div>
                        <div className="col-md-4 card card-width">
                            <h3>Skin Conditions</h3>
                            <ul>
                                <li>Acne</li>
                                <li>Cellulitis</li>
                                <li>Rashes</li>
                                <li>Sunburn</li>
                            </ul>
                        </div>
                        <div className="col-md-4 card card-width">
                            <Link to="/">
                                <h3>Mental Health</h3>
                            </Link>
                            <ul>
                                <li>Anxiety</li>
                                <li>Depression</li>
                                <li>Stress</li>
                                <li>PTSD</li>
                            </ul>
                        </div>

                        <div className="col-md-4 card card-width">
                            <h3>Headaches</h3>
                            <ul>
                                <li>Migraines</li>
                                <li>Sinus headaches</li>
                                <li>Tension headaches</li>
                                <li>Nausea</li>
                            </ul>
                        </div>
                        <div className="col-md-4 card card-width">
                            <h3>Everyday Care</h3>
                            <ul>
                                <li>UTIs</li>
                                <li>Fatigue</li>
                                <li>IBS</li>
                                <li>Joint pain</li>
                            </ul>
                        </div>
                        <div className="col-md-4 card card-width">
                            <Link to="/">
                                <h3>Allergies</h3>
                            </Link>
                            <ul>
                                <li>Seasonal Allergies</li>
                                <li>Epipen refills</li>
                                <li>Allergic sinusitis</li>
                                <li>Hives</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row bg-dod-blue">
                <div className="col">
                    <h3>Get the app</h3>
                    <p>Download Doctor On Demand today</p>
                </div>
                <div className="col">
                    <div>
                        <Link to="/">
                            <img src={appStore} alt="" />
                        </Link>
                        <Link to="/">
                            <img src={googlePlay} alt="" />
                        </Link>
                        <div>
                            <p>4.9</p>
                            <p>105.7K Ratings</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <p>Telehealth appointments & mental health services</p>
                    <h3>Total Virtual Care</h3>
                    <p>
                        With 24/7 access to online doctors, psychiatrists,
                        psychologists, therapists and other medical experts,
                        care is always available, anytime and anywhere. Select
                        and see your favorite providers again and again, right
                        from your smartphone, tablet or computer.
                    </p>
                    <p>
                        Better yet, Doctor On Demand is a covered benefit for
                        over 98 million Americans by their health plan or
                        employer. It's free to sign up and easy to check your
                        coverage when you register.
                    </p>

                    <Link to="/">
                        <button
                            type="button"
                            className="btn btn-outline-primary rounded-0"
                        >
                            Get started
                        </button>
                    </Link>
                </div>
                <div className="col">
                    <img src={onlineMeeting} alt="" />
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <img src={useCare} alt="" />
                </div>
                <div className="col">
                    <div>
                        <h2>Personalized care for your mind and body.</h2>
                        <p>
                            From rashes to colds, stress management to diabetes
                            management, individual treatment plans are created
                            around you. Our medical and mental health providers
                            work together, keeping your personal journey
                            protected and connected.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
