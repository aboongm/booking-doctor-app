import { Link } from "react-router-dom";
import Hero from "../Layout/Hero";
import picture from "../../assets/woman-on-phone-with-doctor-on-demand-1200x1200.jpg";

function Home() {
    return (
        <div>
            <Hero />
            <div className="container mx-auto">
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
            <div>
                <div>
                    <p>
                        Meet with an online therapist or psychiatrist when and
                        where it works for you.
                    </p>
                </div>
                <Link to="/">
                    <div>Online Therapy </div>
                </Link>
            </div>

            <div>
                <div>
                    <h2>We're Here For You</h2>
                    <p>
                        Meet with an urgent care doctor in minutes. Schedule a
                        session with a{" "}
                        <Link to="/">therapist or psychiatrist</Link> this week.
                    </p>
                </div>
                <div>
                    <div>
                        <Link to="/">
                            <h3>Cold & Flue</h3>
                        </Link>
                        <ul>
                            <li>Cough</li>
                            <li>Headaches</li>
                            <li>Nausea & vomiting</li>
                            <li>Fever</li>
                        </ul>
                    </div>
                    <div>
                        <h3>Skin Conditions</h3>
                        <ul>
                            <li>Acne</li>
                            <li>Cellulitis</li>
                            <li>Rashes</li>
                            <li>Sunburn</li>
                        </ul>
                    </div>
                    <div>
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
                    <div>
                        <h3>Headaches</h3>
                        <ul>
                            <li>Migraines</li>
                            <li>Sinus headaches</li>
                            <li>Tension headaches</li>
                            <li>Nausea</li>
                        </ul>
                    </div>
                    <div>
                        <h3>Everyday Care</h3>
                        <ul>
                            <li>UTIs</li>
                            <li>Fatigue</li>
                            <li>IBS</li>
                            <li>Joint pain</li>
                        </ul>
                    </div>
                    <div>
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
    );
}

export default Home;
