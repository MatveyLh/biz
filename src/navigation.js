import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link, Redirect
} from "react-router-dom";

class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {redirect: '/'}
    }

    exitButton(text) {
        localStorage.setItem('login','false');
    }

    render() {
        return(
            <React.Fragment>
                <header>
                    <nav id="navigation">
                        <Link to='/' className="logo-company"><img src={'assets/img/logo.png'}/></Link>
                        <div className="about-us">
                            <a href="#advantages">Преимущества</a>
                            <a href="#reviews">Отзывы</a>
                            <a href="#consultation">Консультация</a>
                            <a href="#cases">Кейсы</a>
                            <a href="#contacts">Контакты</a>
                            <Link to='/news'>Новости</Link>
                            <Link to='/profile'>Профиль</Link>
                        </div>
                        <a href="#contacts" className="contact-us"><img src={'assets/img/call-request.png'}/></a>
                        <Link className="exit-btn" style={{"color": "#ffffff","text-decoration":"none", "cursor":"pointer"}}
                              onClick={this.exitButton.bind(this)} to='/'>Выйти</Link>
                        <div className="hamburger-menu">
                            <input id="menu__toggle" type="checkbox"/>
                            <label className="menu__btn" htmlFor="menu__toggle">
                                <span></span>
                            </label>
                            <ul className="menu__box">
                                <li><a className="menu__item" href="#advantages">Преимущества</a></li>
                                <li><a className="menu__item" href="#reviews">Отзывы</a></li>
                                <li><a className="menu__item" href="#consultation">Консультация</a></li>
                                <li><a className="menu__item" href="#cases">Кейсы</a></li>
                                <li><a className="menu__item" href="#contacts">Контакты</a></li>
                                <li><Link className="menu__item" to='/news'>Новости</Link></li>
                                <li><Link className="menu__item" to='/profile'>Профиль</Link></li>
                                <li><Link className="menu__item" onClick={this.exitButton.bind(this)} to='/'>Выйти</Link></li>
                            </ul>
                        </div>
                    </nav>
                </header>
            </React.Fragment>
        )
    }
}

export default Navigation;