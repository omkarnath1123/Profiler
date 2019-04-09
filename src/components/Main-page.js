import React, { Component } from "react";
import "./Main-page.css";

class MainPage extends Component {
  render() {
    return (
      <div>
        {/* <!--[if lt IE 8]>
            <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
        <![endif]--> */}

        <div class="main-body-wrapper maxWidth" id="top">
          <nav id="navbarOn" class="navbar-main">
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

          <nav id="burgerOn" class="burger">
            <a href="#" class="burger__button" id="burger-button">
              <span class="burger__button__icon" />
            </a>
            <ul class="burger__menu" id="about_code_cta">
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

          <div class="lappyTitleWrapper" id="lapTitWrap">
            <canvas id="canvasShade1" class="shade1" />

            <div class="lapy" id="lapytwister">
              <img
                src="https://rawgit.com/appijumbo/landingPage/gh-pages/img/laptop.svg"
                alt="laptop"
              />
            </div>

            <header class="titleCol">
              <div class="col">
                <h1 class="title">Omkar</h1>
                <h1 class="title">Nath</h1>
                <br />
                <h2>
                  Hello fellow surfers and welcome to this little corner of the
                  web.....{" "}
                </h2>
              </div>
            </header>

            <a class="codeLink" href="" />
          </div>
          <article class="aboutWrapper" id="aboutHere">
            <section class="aboutCol">
              <div class="ab-col">
                <span class="about-title">About</span>
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

            <section class="socialBox">
              <div id="twitter_logo" class="logo">
                <a href="https://twitter.com/omkarnath1123">
                  <p>Twitter</p>
                </a>
              </div>
              <div id="quora_logo" class="logo">
                <a href="https://www.quora.com/profile/Omkar-Nath-14">
                  <p>Quora</p>
                </a>
              </div>
              <div id="linked_in_logo" class="logo">
                <a href="https://www.linkedin.com/in/omkarnath1123/">
                  <p>Linked IN</p>
                </a>
              </div>
              <div id="github_logo" class="logo">
                <a href="https://github.com/omkarnath1123">
                  <p>GitHub</p>
                </a>
              </div>
            </section>
          </article>

          <canvas id="canvasShade2" class="shade2" />

          <div id="codeHere" class="codeWrapper">
            <section class="codeTagBox ">
              <div class="tagBox tagTitle">
                <span class="bracket">&lt;</span>
                <span>CODE</span>
                <span class="bracket">&gt;</span>
              </div>

              <div class="tagBox tagText">
                “....the industry has a long history of successful developers
                with varying backgrounds, people tend to care more about what
                you've actually built than how you got there..”
                <br />
                The Odin Project
              </div>
            </section>

            <section class="codeExamplesBox">
              <a
                id="appLink1"
                class="appSize"
                href="https://github.com/omkarnath1123/Spider-REST-API"
                alt="Spider REST API"
                target="_blank"
              />
              <a
                id="appLink2"
                class="appSize"
                href="https://github.com/omkarnath1123/standalone-algorithm-visualizer"
                alt="Standalone Algorithm Visualizer"
                target="_blank"
              />
              <a
                id="appLink3"
                class="appSize"
                href="https://github.com/omkarnath1123/My-Awesome-Shop"
                alt="Awesome shop"
                target="_blank"
              />
              {/* <a
                id="appLink4"
                class="appSize"
                href=""
                alt=""
                target="_blank"
              />
              <a
                id="appLink5"
                class="appSize"
                href=""
                alt=""
                target="_blank"
              />
              <a
                id="appLink6"
                class="appSize"
                href=""
                alt=""
                target="_blank"
              /> */}
            </section>
          </div>

          <section id="callToAction" class="cta">
            <h3>
              <span>like what you see?..</span>
              <span>great then email me!</span>
            </h3>
            <p>omkarnath1123@gmail.com</p>
          </section>

          <footer class="footer">
            <div class="footerLink">
              <a href="#top" class="chevron">
                &#x2227;
              </a>
            </div>
            <div class="footerBottom">
              <h4 class="item">&copy; Omkar Nath 2019</h4>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}

export default MainPage;
