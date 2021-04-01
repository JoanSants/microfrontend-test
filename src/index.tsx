import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import { navigateToUrl } from "single-spa";

import "./index.css";
import CommpnPage from "./page";
import Partial from "./microfrontend-partial";

const Root = () => (
  <div
    style={{
      backgroundColor: "#222",
      height: "100vh",
      width: "100%",
      display: "flex",
      flexFlow: "column",
      alignItems: "center",
      justifyContent: "space-around",
    }}
  >
    <section
      style={{
        color: "#fff",
        fontSize: "40px",
        letterSpacing: "8px",
      }}
    >
      Microfrontend
    </section>
    <section
      style={{
        height: "400px",
        width: "400px",
        backgroundColor: "#fff",
        border: "1px solid #fff",
        borderRadius: "8px",
        overflow: "hidden",
        display: "grid",
        gridTemplateRows: "min-content 1fr",
      }}
    >
      <BrowserRouter>
        <header
          style={{
            display: "flex",
            justifyContent: "space-around",
            backgroundColor: "#222",
            padding: "20px 0",
            fontSize: "10px",
            letterSpacing: "1px",
          }}
        >
          <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
            Embedded Partial
          </Link>
          <Link to="/content" style={{ textDecoration: "none", color: "#fff" }}>
            Common Page
          </Link>
          <a
            href="/microfrontend-partial"
            onClick={(event) => navigateToUrl(event)}
            style={{ textDecoration: "none", color: "#fff" }}
          >
            Partial
          </a>
        </header>
        <div
          style={{
            position: "relative",
          }}
        >
          <Switch>
            <Route
              exact
              path={["/", "/about", "/contacts", "/home"]}
              component={Partial}
            />
            <Route path="/content" component={CommpnPage} />
          </Switch>
        </div>
      </BrowserRouter>
    </section>
  </div>
);

export default Root;
