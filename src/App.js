import React from 'react';
import './App.css';
import $ from "jquery";
import OwlCarousel from 'react-owl-carousel';

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Navigation from "./navigation";
import Content from "./content";
import FooterContent from "./footercontent";
import PageMap from "./pagemap";
import Footer from "./footer";
import News from "./News";
import Profile from "./profile";
import Login from "./Login";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker
} from "react-google-maps";

const options = {
    items: 1,
    nav: true,
    rewind: true,
    autoplay: false
};

const mapData = {
    center: [55.751574, 37.573856],
    zoom: 5,
};

const coordinates = [
    [55.684758, 37.738521],
    [57.684758, 39.738521]
];

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {page: ''};
    }


    render() {
        return (
            <Router basename={process.env.PUBLIC_URL}>
                <Navigation/>
                <Route  path='/news' component={News}/>
                <Route  path='/profile' component={Profile}/>
                <Route  path='/login' component={Login}/>
                <Route exact path='/'>
                    <Content/>
                    <FooterContent/>
                    <PageMap/>
                    <Footer/>
                </Route>
            </Router>

        );
    }
}

export default App;