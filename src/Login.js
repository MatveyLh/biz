import React from "react";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {username: ['admin','test'], password: [12345,123], userValue: '', passValue: ''};
    }

    handleChangeUsername(event) {
        this.setState({userValue: event.target.value});
    }

    handleChangePassword(event) {
        this.setState({passValue: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        for (let i in this.state.username) {

            if (this.state.userValue === this.state.username[i] && Number(this.state.passValue) === this.state.password[i]) {
                localStorage.setItem('login','true');
                localStorage.setItem('username',this.state.username[i]);
                localStorage.setItem('email',this.state.username[i] + '@gmail.com');
                window.location.assign('/' + 'profile')
            }
        }
        if (localStorage.getItem('login') !== 'true') {
            let inputs = document.getElementsByTagName('input');
            for (let i of inputs) {
                i.style = 'border: 1px solid #FF0000';
                console.log(11)
            }
            if (!document.querySelector('.wrong-span-message')) {
                let span = document.createElement('span');
                span.className = 'wrong-span-message';
                span.innerHTML = 'Введено неправильное имя пользователя или пароль';
                span.style = 'margin-bottom : 25px; color : #FF0000';
                let form = document.querySelector('.login-form');
                let button = document.querySelector('.submit-login');
                form.insertBefore(span,button);
            }
        }
    }

    render() {

        let body = document.getElementsByTagName('body');
        body[0].style = 'background-image: url("./assets/img/earth2.png"); background-repeat: no-repeat;\n' +
            '  background-position: left 900px top 100px;\n' +
            '  background-size: initial;';

        return (
            <React.Fragment>
                <h1 className='login-title'>Вход</h1>
                <form className='login-form' onSubmit={this.handleSubmit.bind(this)}>
                    <div>
                        <label htmlFor="login-username">Имя пользователя: </label>
                        <input type='user' name='login-username' placeholder='Введите имя пользователя' value={this.state.userValue}
                               onChange={this.handleChangeUsername.bind(this)} autoComplete={false} required={true}/>
                    </div>
                    <div>
                        <label htmlFor='login-password'>Пароль: </label>
                        <input type='password' name='login-password' placeholder='Введите пароль' value={this.state.passValue}
                               onChange={this.handleChangePassword.bind(this)} autoComplete={false} required={true}/>
                    </div>
                    <input className='submit-login' type='submit' value='Войти'/>
                </form>
            </React.Fragment>
        );
    }
}

export default Login