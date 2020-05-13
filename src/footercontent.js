import React from "react";
import OwlCarousel from "react-owl-carousel";

class FooterContent extends React.Component {
    render() {
        return(
            <section className="footer-content">
                <section id="consultation" className="consultation">
                    <div className="consultation__description">
                        <p>Есть вопрос? Ответим через 36 секунд</p>
                        <span>Оставьте заявку, и наш специалист проконсультирует вас</span>
                        <hr/>
                    </div>
                    <form className="request-call">
                        <input type="text" className="username" placeholder="Ваше имя" required/>
                        <input type="text" className="user-phone" placeholder="Телефон" required/>
                        <div className="submit-form">
                            <input type="submit" className="btn-call" value="Заказать звонок"/>
                            <div>
                                <input type="checkbox" id="acception"/>
                                <label htmlFor="acception">
                                    <span>Даю согласие на <span style={{"textDecoration": "underline","text-underline-position": "under"}}>
                             обработку данных</span>
                            </span>
                                </label>
                            </div>
                        </div>
                    </form>
                </section>
                <section id="cases" className="cases">
                    <p>Посмотрите выполненные кейсы</p>
                    <span>Мероприятия, о которых слышали все</span>
                    <hr/>
                    <div className="list-slide">
                        <span className="list-item">Все мероприятия</span>
                        <span className="list-item">Конференции</span>
                        <span className="list-item">Бизнес завтраки</span>
                        <span className="list-item">Коучинги и тренинги</span>
                        <span className="list-item">Тимбилдинги и корпоративы</span>
                    </div>
                </section>
                <OwlCarousel items={1}
                             className="owl-carousel cases-carousel"
                             loop
                             nav
                             margin={8} >
                    <div className="item-1">
                        <img className="conference" src={'./assets/img/conference.png'}/>
                        <div className="another-sliders">
                            <img className="training" src={"./assets/img/training.png"}/>
                            <div className="last-sliders">
                                <img className="business-breakfast" src={"./assets/img/b-b.png"}/>
                                <img className="teambuild" src={"./assets/img/teambuild.png"}/>
                            </div>
                        </div>
                    </div>
                    <div className="item-2">
                        <img src={"./assets/img/conference.png"}/>
                    </div>
                    <div className="item-3">
                        <img src={"./assets/img/b-b.png"}/>
                    </div>
                    <div className="item-4">
                        <img src={"./assets/img/training.png"}/>
                    </div>
                    <div className="item-5">
                        <img src={"./assets/img/teambuild.png"}/>
                    </div>
                </OwlCarousel>
            </section>
        )
    }
}

export default FooterContent;