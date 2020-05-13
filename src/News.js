import React from "react";

class News extends React.Component {
    render() {

        return (
            <section className='news'>
                <h1>Новости</h1>
                <div className='news__column'>
                    <div className='news__column_description'>
                        <p className='title'>
                            Миллиарды долларов за коучей: как бизнес-тренеры стали незаменимыми:
                        </p>
                        <a href='https://www.forbes.ru/newsroom/karera-i-svoy-biznes/390641-milliardy-dollarov-za-kouchey-kak-biznes-trenery-stali'>
                            <img src={'./assets/img/news-3.jpg'}/>
                        </a>
                        <p>
                            Financial Times выяснила, в чем заключается роль бизнес-тренера и почему помощник в бизнесе
                            перестал быть признаком слабости, и теперь без него не обойтись даже сильным предпринимателям.
                        </p>
                        <a href='https://www.forbes.ru/newsroom/karera-i-svoy-biznes/390641-milliardy-dollarov-za-kouchey-kak-biznes-trenery-stali'>
                            https://www.forbes.ru/newsroom/karera-i-svoy-biznes/390641-milliardy-dollarov-za-kouchey-kak-biznes-trenery-stali
                        </a>
                    </div>
                    <div className='news__column_description'>
                        <p className='title'>
                            Начинают всегда с плохого:
                        </p>
                        <a href='https://tass.ru/interviews/8414725'><img src={'./assets/img/news-1.jpg'}/></a>
                        <p>
                            Марина Мелия — профессор психологии, коуч-консультант многих знаковых персон, политиков,
                            первых лиц российского бизнеса. В советское время возглавляла психологическую службу спорта СССР,
                            основала первый в стране психологический кооператив, одной из первых в России начала
                            использовать метод глубинного индивидуального ассесмента.
                            Сегодня автор бестселлеров "Бизнес — это психология", "Как усилить свою силу? Коучинг",
                            "Успех — дело личное" в интервью ТАСС рассказывает о специфике российского менталитета, о том,
                            как слабость может оказаться силой, и о важности уважения к чужим границам, особенно в изоляции.
                        </p>
                        <a href='https://tass.ru/interviews/8414725'>https://tass.ru/interviews/8414725</a>
                    </div>
                    <div className='news__column_description'>
                        <p className='title'>
                            Норильчанки могут принять участие в вебинарах по программе развития профессионального женского лидерства:
                        </p>
                        <a href='http://ttelegraf.ru/news/vebinaryi-po-programme-razvitiya-professionalnogo-jenskogo-liderstva-proydut-segodnya-i-zavtra'>
                            <img src={'./assets/img/news-2.jpg'}/>
                        </a>
                        <p>
                            Сегодня в 11 часов по московскому времени начнется онлайн-семинар на тему
                            «Деловая коммуникация – способ достижения целей». Это одно из мероприятий цикла
                            «Женщина в бизнесе», который SAP организует совместно с российскими горно-металлургическими
                            компаниями «Полиметалл» и «Норникель» и консалтинговой компанией Deloitte в поддержку проекта
                            Women in Mining Russia – программы развития профессионального женского лидерства и гендерной
                            диверсификации в консервативных отраслях.
                        </p>
                        <a href='http://ttelegraf.ru/news/vebinaryi-po-programme-razvitiya-professionalnogo-jenskogo-liderstva-proydut-segodnya-i-zavtra'>
                            http://ttelegraf.ru/news/vebinaryi-po-programme-razvitiya-professionalnogo-jenskogo-liderstva-proydut-segodnya-i-zavtra
                        </a>
                    </div>
                </div>
            </section>
        );
    }
}
export default News;