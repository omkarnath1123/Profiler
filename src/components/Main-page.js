import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Main-page.css";

class MainPage extends Component {
  render() {
    return (
      <div>
        {/* <!--[if lt IE 8]>
            <p className="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
        <![endif]--> */}

        <div className="main-body-wrapper maxWidth" id="top">
          <nav id="navbarOn" className="navbar-main">
            <ul>
              <li>
                <a href="#aboutHere">about</a>
              </li>
              <li>
                <a href="#codeHere">code</a>
              </li>
              <li>
                <a href="#callToAction">email</a>
              </li>
            </ul>
          </nav>

          <nav id="burgerOn" className="burger">
            <a href="#" className="burger__button" id="burger-button">
              <span className="burger__button__icon" />
            </a>
            <ul className="burger__menu" id="about_code_cta">
              <li>
                <a onclick="close_menu()" href="#aboutHere">
                  about
                </a>
              </li>
              <li>
                <a onclick="close_menu()" href="#codeHere">
                  code
                </a>
              </li>
              <li>
                <a onclick="close_menu()" href="#callToAction">
                  email
                </a>
              </li>
            </ul>
          </nav>

          <div className="lappyTitleWrapper" id="lapTitWrap">
            <canvas id="canvasShade1" className="shade1" />

            <div className="lapy" id="lapytwister">
              <img
                src="https://rawgit.com/appijumbo/landingPage/gh-pages/img/laptop.svg"
                alt="laptop"
              />
            </div>

            <header className="titleCol">
              <div className="col">
                <h1 className="title">Omkar</h1>
                <h1 className="title">Nath</h1>
                <br />
                <h2>
                  Hello fellow surfers and welcome to this little corner of the
                  web.....{" "}
                </h2>
              </div>
            </header>

            <Link to="/cv">
              CODE LINK
              <span className="codeLink" />
            </Link>
          </div>
          <article className="aboutWrapper" id="aboutHere">
            <section className="aboutCol">
              <div className="ab-col">
                <span className="about-title">About</span>
                <br />
                <span>
                  Experienced Backend Developer with a demonstrated history of
                  working in the telecom industry. Skilled in Node.js, Core
                  Java, React, Servers (Linux), Node.js, MongoDB and SQL. Strong
                  engineering professional with a B.tech focused on Mathematics
                  and computing (MCE) from Delhi Technological University
                  (Formally DCE).
                </span>
                <span>
                  I'm following a path of discovery with the open source
                  knowledge of code to master server and web technologies. I'd
                  love to hear from other fellow travelers, so please checkout
                  my code below and I'd welcome your feedback and comments.
                  <br />
                  Thanks for stopping by!
                </span>
              </div>
            </section>

            <section className="socialBox">
              <div id="twitter_logo" className="logo">
                <a
                  href="https://twitter.com/omkarnath1123"
                  alt="TWITTER"
                  target="_blank"
                >
                  <p>Twitter</p>
                </a>
              </div>
              <div id="quora_logo" className="logo">
                <a
                  href="https://www.quora.com/profile/Omkar-Nath-14"
                  alt="QUORA"
                  target="_blank"
                >
                  <p>Quora</p>
                </a>
              </div>
              <div id="linked_in_logo" className="logo">
                <a
                  href="https://www.linkedin.com/in/omkarnath1123/"
                  alt="LINKED IN"
                  target="_blank"
                >
                  <p>Linked IN</p>
                </a>
              </div>
              <div id="github_logo" className="logo">
                <a
                  href="https://github.com/omkarnath1123"
                  alt="GITHUB"
                  target="_blank"
                >
                  <p>GitHub</p>
                </a>
              </div>
            </section>
          </article>

          <canvas id="canvasShade2" className="shade2" />

          <div id="codeHere" className="codeWrapper">
            <section className="codeTagBox ">
              <div className="tagBox tagTitle">
                <span className="bracket">&lt;</span>
                <span>CODE</span>
                <span className="bracket">&gt;</span>
              </div>

              <div className="tagBox tagText">
                “....open source project is the next step to build products with
                your knowledge and also the open source industry has a long
                history of successful developers with varying backgrounds. so,
                here is some of my ideas into action..”
              </div>
            </section>

            <section className="codeExamplesBox">
              <a
                id="appLink1"
                className="appSize"
                href="https://github.com/omkarnath1123/Spider-REST-API"
                alt="Spider REST API"
                target="_blank"
              />
              <a
                id="appLink2"
                className="appSize"
                href="https://github.com/omkarnath1123/standalone-algorithm-visualizer"
                alt="Standalone Algorithm Visualizer"
                target="_blank"
              />
              <a
                id="appLink3"
                className="appSize"
                href="https://github.com/omkarnath1123/My-Awesome-Shop"
                alt="Awesome shop"
                target="_blank"
              />
              {/* <a
                id="appLink4"
                className="appSize"
                href=""
                alt=""
                target="_blank"
              />
              <a
                id="appLink5"
                className="appSize"
                href=""
                alt=""
                target="_blank"
              />
              <a
                id="appLink6"
                className="appSize"
                href=""
                alt=""
                target="_blank"
              /> */}
            </section>
          </div>

          <section id="callToAction" className="cta">
            <h3>
              <span>like what you see?..</span>
              <span>great then email me!</span>
            </h3>
            <p>omkarnath1123@gmail.com</p>
          </section>

          <footer className="footer">
            <div className="footerLink">
              <a href="#top" className="chevron">
                &#x2227;
              </a>
            </div>
            <div className="footerBottom">
              <h4 className="item">&copy; Omkar Nath 2019</h4>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}

export default MainPage;
