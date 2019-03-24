import React, { Component } from "react";
import "./Cv.css";

class Cv extends Component {
  render() {
    return (
      <div>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <div className="resume-wrapper">
          <section className="profile section-padding">
            <div className="container">
              <div className="picture-resume-wrapper">
                <div className="picture-resume">
                  <span>
                    <img
                      src="https://raw.githubusercontent.com/omkarnath1123/Profiler/master/public/images/avatar.png"
                      alt="profile pic"
                    />
                  </span>
                  <svg version="1.1" viewBox="0 0 350 350">
                    <defs>
                      <filter id="goo">
                        <feGaussianBlur
                          in="SourceGraphic"
                          stdDeviation="8"
                          result="blur"
                        />
                        <feColorMatrix
                          in="blur"
                          mode="matrix"
                          values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 21 -9"
                          result="cm"
                        />
                      </filter>
                    </defs>

                    <g filter="url(#goo)">
                      <circle
                        id="main_circle"
                        className="st0"
                        cx="171.5"
                        cy="175.6"
                        r="130"
                      />
                    </g>
                  </svg>
                </div>
                <div className="clearfix" />
              </div>
              <div className="name-wrapper">
                <h1>
                  Omkar <br />
                  Nath
                </h1>
              </div>
              <div className="clearfix" />
              <div className="contact-info clearfix">
                <ul className="list-titles">
                  <li>Primary Call</li>
                  <li>Secondary Call</li>
                  <li>Mail</li>
                  {/* <li>Web</li> */}
                  <li>Home</li>
                </ul>
                <ul className="list-content ">
                  <li>+91 837 685 6533</li>
                  <li>+91 798 207 8756</li>
                  <li>omkarnath1123@gmail.com</li>
                  {/* <li>
                    <a href="#">janderson.com</a>
                  </li> */}
                  <li>Delhi, INDIA</li>
                </ul>
              </div>
              <div className="contact-presentation">
                <p>
                  <span className="bold" /> To work in a prestigious IT company
                  and contribute in the success of the organization to the best
                  of my capabilities and knowledge.
                </p>
              </div>
              <div className="contact-social clearfix">
                <ul className="list-titles">
                  <li>Twitter</li>
                  <li>Github</li>
                  <li>LinkedIN</li>
                  <li>Quora</li>
                </ul>
                <ul className="list-content">
                  <li>
                    <a href="https://twitter.com/omkarnath1123">
                      @omkarnath1123
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/omkarnath1123">omkarnath1123</a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/omkarnath1123/">
                      omkarnath1123
                    </a>
                  </li>
                  <li>
                    <a href="https://www.quora.com/profile/Omkar-Nath-14">
                      /Omkar-Nath-14
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="education-title">Education</h3>

                <div className="education-type">B.Tech</div>
                <div className="inst-type">
                  Delhi Technological University formerly{" "}
                  <a href="http://www.dtu.ac.in/"> DCE</a>
                </div>
                <div className="edu-year">2014 - 2018</div>
                <br />

                <div className="education-type">
                  Central Board of Secondary Education (Class XII)
                </div>
                <div className="inst-type">
                  <a href="http://www.crpfpsrohini.org/">
                    Central Reserve Police Force Public School
                  </a>
                </div>
                <div className="edu-year">2012 - 2014</div>
                <br />

                <div className="education-type">
                  Central Board of Secondary Education (Class X)
                </div>
                <div className="inst-type">
                  <a href="http://www.crpfpsrohini.org/">
                    Central Reserve Police Force Public School
                  </a>
                </div>
                <div className="edu-year">till 2012</div>
              </div>
            </div>
          </section>

          <section className="experience section-padding">
            <div className="container">
              <h3 className="experience-title">Experience</h3>

              <div className="experience-wrapper">
                <div className="company-wrapper clearfix">
                  <div className="experience-title">
                    Bharti Airtel (Appstreet Software Pvt. Ltd.)
                  </div>
                  <div className="time">June 2018 - Present</div>
                  <div className="time">Gurugram, Haryana</div>
                </div>
                <div className="job-wrapper clearfix">
                  <div className="experience-title">Backend Developer</div>
                  <div className="company-description">
                    <p className="white-color">
                      {/* specialise in Mobile Applications, UI/UX Design, Website Development, Backend and Analytics & Reporting. */}
                      The project helps us to automate end to end site
                      deployment process, following by all the 23 circles across
                      India. This project delivers a robust automated system,
                      which clearly define each and every role involved into
                      deploying a site. <br />
                      <br />
                      <span className="italic">
                        As part of the Network Digitization initiative we have
                        partners supporting in building automated network site
                        deployment process for radio, microwave and fiber.
                        <br />
                        Bharti Airtel Limited is an Indian global
                        telecommunications services company based in New Delhi,
                        India. It operates in 20 countries across South Asia and
                        Africa.
                      </span>
                    </p>
                  </div>
                </div>

                <div className="company-wrapper clearfix">
                  <div className="experience-title">Chegg Inc.</div>
                  <div className="time">Dec 2018 - Present</div>
                  <div className="time">Work from home(Part time)</div>
                </div>
                <div className="job-wrapper clearfix">
                  <div className="experience-title">
                    Computer Science Expert (Tutor)
                  </div>
                  <div className="company-description">
                    <p className="white-color">
                      working as a tutor and providing computer science coding
                      solution to students around the globe using chegg expertQA
                      portal.
                      <br />
                      <br />
                      <span className="italic">
                        Chegg offers flexible work from home opportunities for
                        working professionals, teachers, professors, and fresh
                        post graduates to join as a managed network expert and
                        help millions of students around the world.
                      </span>
                    </p>
                  </div>
                </div>

                <div className="company-wrapper clearfix">
                  <div className="experience-title">Startupflux</div>
                  <div className="time">Dec 2016 - Jan 2017</div>
                  <div className="time">Noida, Uttar Pradesh</div>
                </div>
                <div className="job-wrapper clearfix">
                  <div className="experience-title">
                    Backend Developer (Internship)
                  </div>
                  <div className="company-description">
                    <p className="white-color">
                      Project on scraping and crawling, building mongodB
                      database and predict the future growth of startups by
                      collecting data using scraping and crawling for the
                      machine learning algorithm.
                      <br />
                      <br />
                      <span className="italic">
                        Startupflux is a Comprehensive and Curated Startup Data
                        Analytics platform for investors and entrepreneurs
                        alike. Users can Discover, research and compare startups
                        across several verticals.
                      </span>
                    </p>
                  </div>
                </div>

                <div className="company-wrapper clearfix">
                  <div className="experience-title">Zapplon</div>
                  <div className="time">Mar 2016 - July 2016</div>
                  <div className="time">connaught place, Delhi</div>
                </div>
                <div className="job-wrapper clearfix">
                  <div className="experience-title">Front end Developer</div>
                  <div className="company-description">
                    <p className="white-color">
                      Front end Developer – Develops the UI & UX of website for
                      booking taxi in intra and inter states.
                      <br />
                      <br />
                      <span className="italic">
                        Zapplon aggregates cab services to help users book the
                        most suitable cab at the best price, without any
                        app-fatigue.
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="section-wrapper clearfix">
                <h3 className="section-title">Skills</h3>
                <ul>
                  <li className="skill-percentage">Node.js</li>
                  <li className="skill-percentage">Javascript</li>
                  <li className="skill-percentage">Java</li>
                  <li className="skill-percentage">Python</li>
                  <li className="skill-percentage">React / Redux</li>
                  <li className="skill-percentage">mongodB</li>
                </ul>
              </div>

              <div className="section-wrapper clearfix">
                <h3 className="section-title">Hobbies</h3>
                <p>
                  A professional playstation gamer and a coder really like indie
                  and story driven games. Always open to innovative project
                  ideas and looking to create something innovative or build from
                  scratch.
                </p>

                <p>
                  A huge fan of Ted talks, AI, ML and Elon Musk. Highly active
                  on watching youtube and reading answers/articles on quora or
                  medium.
                </p>
              </div>
            </div>
          </section>

          <div className="clearfix" />
        </div>
      </div>
    );
  }
}

export default Cv;
