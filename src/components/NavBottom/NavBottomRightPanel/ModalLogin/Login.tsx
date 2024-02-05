import { useState } from 'react'
import './Login.scss'
import LoginNextButton from './LoginNextButton'

export default function Login() {

    const [nextBtnContent, setNextBtnContent] = useState('Далее')

    return (
        <>
        <div>
        <input
        maxLength={12}
        placeholder="Ваш номер телефона:"
        className="login__input-phone-number"
        type="number" />
        </div>
        <LoginNextButton 
        content={ nextBtnContent }
        onClick={ () => setNextBtnContent('Идёт загрузка...') }
        />
        </>
    )
}