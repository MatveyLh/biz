import React from "react";

class Footer extends React.Component {
    render() {
        return (
            <footer className="footer">
                <div className="page-links">
                    <div className="first-column">
                        <a href="#"><img src={"./assets/img/logo.png"}/></a>
                        <a href="#"><span>Политика<br/>конфеденциальности</span></a>
                        <a href="#"><span>Соглашение на обработку<br/>персональных данных</span></a>
                    </div>
                    <div className="second-column">
                        <a href="#advantages">Преимущества</a>
                        <a href="#reviews">Отзывы</a>
                        <a href="#consultation">Консультация</a>
                    </div>
                    <div className="third-column">
                        <a href="#cases">Кейсы</a>
                        <a href="#contacts">Контакты</a>
                    </div>
                    <div className="footer__request-call">
                        <button>Заказать звонок</button>
                        <p>+375 (29) 500-36-00</p>
                    </div>
                </div>
                <hr/>
                <div className="about-us-info">
                    <a href="#">Работа у нас</a>
                    <a href="#">День открытых дверей</a>
                    <a href="#">Благотворительность</a>
                    <div className="plastic-cards">
                        <a href="#"><img src={"./assets/img/masterCard.png"}/></a>
                        <a href="#"><img src={"./assets/img/visa.png"}/></a>
                        <a href="#"><img src={"./assets/img/payPal.png"}/></a>
                    </div>
                    <a href="#">hello@eventbiz.pro</a>
                </div>
            </footer>
        );
    }
}

export default Footer;