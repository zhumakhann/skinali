import React, { useState, useEffect } from 'react';
import firebase from '../../../firebase';
import { connect } from 'react-redux';
import { authTest } from '../../../redux/actions/auth';
import { useHistory } from 'react-router-dom'
import Alert from '../../HOC/Alert'
import './auth.scss';

const Auth = (props) => {
    const history = useHistory();
    const [alertActive, setAlertActive] = useState(false);
    const [alertType, setAlertType] = useState('');
    const [alertContent, setAlertContent] = useState('')
    useEffect(() => {
        console.log(props);
        if(props.auth.isLoggedIn){
            setAlertType('')
            setAlertContent('')
            setAlertActive(false)
            console.log('loggedin');
            history.push('/admin/products')
        }
      }, [props.auth.isLoggedIn])
    useEffect(() => {
        if(props.auth.isChecked && !props.auth.isLoggedIn){
            setAlertType('alert-danger')
            setAlertContent('Неправильный логин или пароль')
            setAlertActive(true)
        }
    }, [props.auth.isChecked])
    const handleLogin = (e) => {
        e.preventDefault()
        const username = e.target[0].value,
            password = e.target[1].value;
            // console.log(username);
        props.authTest(username, password)
    }
    return (
        <section className="auth">
            <Alert active={alertActive} type={alertType}>
                {alertContent}
            </Alert>
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

