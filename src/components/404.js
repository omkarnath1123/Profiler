import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./404.css";

class ErrorPage extends Component {
  componentWillMount() {
    document.body.style.backgroundColor = "#081421";
    document.body.style.height = "100%";
    document.body.fontStyle = "Courier new";
  }

  componentWillUnmount() {
    document.body.style.backgroundColor = null;
    document.body.style.height = null;
    document.body.fontStyle = null;
  }

  render() {
    return (
      <div className="parent-div">
        <div className="code-area">
          <span
            style={{
              color: "#777",
              fontStyle: "italic",
              fontFamily: "Courier new",
              textAlign: "left"
            }}
          >
            {"// 404 page not found."}
          </span>
          <span style={{ fontFamily: "Courier new", textAlign: "left" }}>
            <span style={{ color: "#d65562" }}>if</span>
            {"("}
            <span style={{ color: "#4ca8ef" }}>{"!"}</span>
            <span style={{ fontStyle: "italic", color: "#bdbdbd" }}>found</span>
            {")"}
            {"{"}
          </span>
          <span style={{ fontFamily: "Courier new", textAlign: "left" }}>
            <span
              style={{
                paddingLeft: "15px",
                color: "#2796ec"
              }}
            >
              <i
                style={{
                  width: "10px",
                  display: "inline-block"
                }}
              />
              throw
            </span>
            <span>
              {"("}
              <span style={{ color: "#a6a61f" }}>
                {'"'}
                {"("} {"╯°□°)╯︵ ┻━┻"} {'"'}
              </span>
              {");"}
            </span>
            <span style={{ display: "block" }}>{"}"}</span>
            <span
              style={{
                color: "#777",
                fontStyle: "italic"
              }}
            >
              {"//"}{" "}
              <a href="" style={{ textDecoration: "underline" }}>
                <Link to="/">Go Home</Link>
                {"!"}
              </a>
            </span>
          </span>
        </div>
      </div>
    );
  }
}

export default ErrorPage;
