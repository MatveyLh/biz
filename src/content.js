import React from "react";
import OwlCarousel from "react-owl-carousel";

class Content extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="content">
                    <section className="header-title">
                        <p className="header-title__article">организация семинаров <br/> и
                            коучингов <span>под ключ</span></p>
                        <p className="header-title__description">Оставьте заявку до <span>10 октября</span> и
                            получите <br/>
                            в подарок кейтеринг <span>на 10 персон</span>
                        </p>
                        <div className="header-title__item-points">
                            <p>Конференции</p>
                            <p>Тимбилдинги и корпоративы</p>
                            <p>Бизнес-завтраки</p>
                        </div>
                        <div className="header-title__footer">
                            <input type="submit" className="header-title__footer_left-request" value="Оставить заявку"/>
                            <div className="header-title__footer_social-links">
                                <a href="http://facebook.com" className="facebook-logo"><img src={'assets/img/facebook.png'}/></a>
                                <a href="http://twitter.com" className="twitter-logo"><img src={'assets/img/twitter.png'}/></a>
                                <a href="http://instagram.com" className="inst-logo"><img src={'assets/img/inst.png'}/></a>
                                <a href="http://youtube.com" className="youtube-logo"><img src={'assets/img/youtube.png'}/></a>
                            </div>
                        </div>
                    </section>
                    <section id={"advantages"} className="advantages">
                        <div className="advantages__main-advantages">
                            <p className="advantages__main-advantages_title">4 Главных преимущества</p>
                            <p>Благодаря которым нам доверили уже 473 семинаров и коучингов</p>
                            <hr/>
                            <div className="advantages__main-advantages_description">
                                <div className="experience">
                                    <div className="experience__text">
                                        <p>Многолетний опыт</p>
                                        <span>Занимаемся профессиональной<br/>организацией с 2006 года</span>
                                    </div>
                                </div>
                                <div className="activity">
                                    <div className="activity__text">
                                        <p>473 мероприятий</p>
                                        <span>Именно столько бизнес-семинаров<br/>мы провели за 13 лет работы</span>
                                    </div>
                                </div>
                                <div className="organizational-issues">
                                    <div className="organizational-issues__text">
                                        <p>Снимаем все оргвопросы</p>
                                        <span>Брендирование пространства,<br/>кейтеринг, входная зона, фото<br/>и видео, размещение гостей</span>
                                    </div>
                                </div>
                                <div className="it-side">
                                    <div className="it-side__text">
                                        <p>Сильная IT-сторона</p>
                                        <span>Каждый шаг фиксируется в CRM,<br/>к которой у вас будет доступ,<br/>чтобы все контролировать</span>
                                    </div>
                                </div>
                                <div className="rocket">
                                    <img src={'assets/img/rocket.png'}/>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id={"reviews"} className="reviews">
                        <p className="reviews__title">Почитайте отзывы о нас</p>
                        <span>Каково это было для наших клиентов</span>
                        <hr/>
                        <OwlCarousel items={1}
                                     className="owl-carousel feedback"
                                     loop
                                     nav
                                     margin={8} >
                            <div className="item">
                                <div className="description">
                        <span style={{"font-family": "monospace"}}>
                        Благодаря слаженной и конструктивной работе сотрудников EventBizPro во время проведения
                        мероприятия был создан прецедент абсолютно нового подхода к проведению узконаправленных
                        международных конференций. Великолепная атмосфера, великолепные люди.
                        Это лучшая площадка для встречи людей, которые с энтузиазмом делают бизнес.....
                        </span>
                                    <div className="person">
                                        <span>Алексей Гаврилов</span>
                                        <span>Nexans Russia</span>
                                    </div>
                                </div>
                                <img src={'./assets/img/reviews.png'}/>
                            </div>
                            <div className="item">
                                <div className="description">
                        <span style={{"font-family": "monospace"}}>
                        Благодаря слаженной и конструктивной работе сотрудников EventBizPro во время проведения
                        мероприятия был создан прецедент абсолютно нового подхода к проведению узконаправленных
                        международных конференций. Великолепная атмосфера, великолепные люди.
                        Это лучшая площадка для встречи людей, которые с энтузиазмом делают бизнес.....
                        </span>
                                    <div className="person">
                                        <span>Алексей Гаврилов</span>
                                        <span>Nexans Russia</span>
                                    </div>
                                </div>
                                <img src={'./assets/img/reviews.png'}/>
                            </div>
                            <div className="item">
                                <div className="description">
                        <span style={{fontFamily: "monospace"}}>
                        Благодаря слаженной и конструктивной работе сотрудников EventBizPro во время проведения
                        мероприятия был создан прецедент абсолютно нового подхода к проведению узконаправленных
                        международных конференций. Великолепная атмосфера, великолепные люди.
                        Это лучшая площадка для встречи людей, которые с энтузиазмом делают бизнес.....
                        </span>
                                    <div className="person">
                                        <span>Алексей Гаврилов</span>
                                        <span>Nexans Russia</span>
                                    </div>
                                </div>
                                <img src={'./assets/img/reviews.png'}/>
                            </div>
                        </OwlCarousel>
                    </section>
                </div>
            </React.Fragment>
        )
    }
}

export default Content;