import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

class Navigation extends React.Component {
    constructor(props) {
        super(props);
    }

    handleClick(text) {
        window.location.assign('/' + text);
    }

    exitButton(text) {
        window.location.assign('/' + text);
        localStorage.setItem('login','false');
    }

    render() {
        return(
            <React.Fragment>
                <header>
                    <nav id="navigation">
                        <button onClick={this.handleClick.bind(this, '')} className="logo-company"><img src={'assets/img/logo.png'}/></button>
                        <div className="about-us">
                            <a href="#advantages">Преимущества</a>
                            <a href="#reviews">Отзывы</a>
                            <a href="#consultation">Консультация</a>
                            <a href="#cases">Кейсы</a>
                            <a href="#contacts">Контакты</a>
                            <button onClick={this.handleClick.bind(this, 'news')}>Новости</button>
                            <button onClick={this.handleClick.bind(this, 'profile')}>Профиль</button>
                        </div>
                        <a href="#contacts" className="contact-us"><img src={'assets/img/call-request.png'}/></a>
                        <button className='exit-btn' onClick={this.exitButton.bind(this, '')}>Выйти</button>
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
                                <li><button className="menu__item" onClick={this.handleClick.bind(this, 'news')}>Новости</button></li>
                                <li><button className="menu__item" onClick={this.handleClick.bind(this, 'profile')}>Профиль</button></li>
                            </ul>
                        </div>
                    </nav>
                </header>
            </React.Fragment>
        )
    }
}

export default Navigation;