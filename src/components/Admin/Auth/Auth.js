import React, { useEffect } from 'react';
import firebase from '../../../firebase';
import { connect } from 'react-redux';
import { authTest } from '../../../redux/actions/auth';
import './auth.scss';
import { useHistory } from 'react-router-dom'

const Auth = (props) => {
    const history = useHistory()

    useEffect(() => {
        console.log('abc');
        if(props.auth.isLoggedIn){
          console.log('loggedin');
          history.push('/admin/products')

        }
      }, [props.auth.isLoggedIn])
    const handleLogin = (e) => {
        e.preventDefault()
        const username = e.target[0].value,
            password = e.target[1].value;
            // console.log(username);
        props.authTest(username, password)
    }
    return (
        <section className="auth">
            <div className="container">
                <form className="form" onSubmit={(e) => handleLogin(e)}>
                    <input className="form__item" type="text" placeholder="Ваш логин"/>
                    <input className="form__item" type="password" placeholder="Пароль"/>
                    <button className="form__submit">Отправить</button>
                </form>
            </div>
        </section>
    )
}

function mapStateToProps(state){
    return {
        auth: state.auth
    }
}

function mapDispatchToProps(dispatch){
    return{
        authTest: (username, password) => dispatch(authTest(username, password))

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth)

