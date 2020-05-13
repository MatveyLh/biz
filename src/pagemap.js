import React from "react";
import {GoogleMap, Marker, withGoogleMap, withScriptjs} from "react-google-maps";

class PageMap extends React.Component {
    static defaultProps = {
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyC0e4DADAcJ1FnEvH_FIdVbmFdb2b7T6es&v=3.exp&libraries=geometry,drawing,places",
    };

    constructor(props) {
        super(props);
    };
    CMap = withScriptjs(withGoogleMap(props =>
        <GoogleMap
            defaultZoom={17}
            defaultCenter={{ lat: 53.878046, lng: 27.579457 }}
        >
            {props.children}
        </GoogleMap>
    ));

    render() {
        return (
            <section id="contacts" className="page-map">
                <section id="map">
                    <this.CMap
                        googleMapURL={this.props.googleMapURL}
                        loadingElement={<div style={{ height: `100%` }} />}
                        containerElement={<div style={{ height: `500px` }} />}
                        mapElement={<div style={{ height: `100%` }} />}
                        center= {{ lat: 25.03, lng: 121.6 }}
                    >
                        <Marker
                            position={{ lat: 53.878046, lng: 27.579457 }}
                        />
                    </this.CMap>
                </section>
                <section className="map-info">
                    <p><img src={"./assets/img/logo.png"}/></p>
                    <ul>
                        <li><span>г. Минск ул. Уманская д.3</span></li>
                        <li><span>+375 (29) 500-36-00</span></li>
                        <li><span>hello@eventbiz.pro</span></li>
                        <li><span>Пн Пт: 10:00 - 19:00 <br/> Сб: 10:00 - 17:00 <br/> Вс: выходной</span></li>
                    </ul>
                    <div>
                        <a href="http://facebook.com" className="facebook-logo"><img src={'assets/img/facebook.png'}/></a>
                        <a href="http://twitter.com" className="twitter-logo"><img src={'assets/img/twitter.png'}/></a>
                        <a href="http://instagram.com" className="inst-logo"><img src={'assets/img/inst.png'}/></a>
                        <a href="http://youtube.com" className="youtube-logo"><img src={'assets/img/youtube.png'}/></a>
                    </div>
                </section>
            </section>
        );
    }
}

export default PageMap;