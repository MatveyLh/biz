import React from "react";
import { Redirect } from "react-router-dom";
class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {redirect: "/login"}
    }
    render() {
        let body = document.getElementsByTagName('body');
        body[0].style = 'background-image: url("./assets/img/earth2.png"); background-repeat: no-repeat;\n' +
            '  background-position: left 900px top 100px;\n' +
            '  background-size: initial;';
        if (localStorage.getItem('login') !== 'true') {
            return <Redirect to={this.state.redirect} />
        }
        return (
            <section className='profile-info'>
                <img src={'./assets/img/hackerman.PNG'}/>
                <div className='profile-info__description'>
                    <div className='username'>
                        <p>Имя Пользователя: </p>
                        <p>{localStorage.getItem('username')}</p>
                    </div>
                    <div className='email'>
                        <p>Почтовый ящик: </p>
                        <p>{localStorage.getItem('email')}</p>
                    </div>
                    <div className='status'>
                        <p>Статус: </p>
                        <p>Онлайн</p>
                    </div>
                    <div className='was-register'>
                        <p>Был зарегистрирован: </p>
                        <p>13.05.2020</p>
                    </div>
                </div>
            </section>
        )
    }
}

export default Profile;