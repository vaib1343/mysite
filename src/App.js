import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./Home";
import Service from "./Service";
import Contact from "./Contact";
import About from "./About";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from "./component/Navbar";

function App() {
    return (
        <>
            <Navbar />
            <Switch>
                <Route exact path="/mysite" component={Home} />
                <Route exact path="/mysite/contact" component={Contact} />
                <Route exact path="/mysite/about" component={About} />
                <Route exact path="/mysite/service" component={Service} />
                <Redirect to="/mysite" />
            </Switch>
        </>
    );
}

export default App;
