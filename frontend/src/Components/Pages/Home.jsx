import { Link } from "react-router-dom";
import Hero from "../Layout/Hero";

function Home() {
    return (
        <div>
            <Hero />
            <div>
                <div>
                    <img src="" alt="" />
                </div>
                <div>
                    <h1>
                        Is it the Flu?
                        <br /> Don't wait to feel
                        <br /> better.
                    </h1>
                    <p>
                        Get the right care for your family, right away. Get 24/7
                        access to top-rated doctors with Doctor On Demand by
                        Included Health.
                    </p>
                </div>
                <div>
                    <Link to="/">
                        <p>See A Doctor Now</p>
                    </Link>

                    {/* This is supposed to be a Link but for some reason the Link component isn't working */}
                </div>
                <div>
                    <Link to="/">
                        <p>Sign In</p>
                    </Link>
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
                        <Link>
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
                        <Link>
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
