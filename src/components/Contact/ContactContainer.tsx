import './ContactContainer.scss'

import ContactPerson from "./ContactPerson"

export default function ContactContainer() {
    return (
        <div className="contact-container">
        <div className="contact-row">
            <h1 className="contact-title">Контакты</h1>
            
            <ContactPerson namePerson={ 'Онлайн Консультант:' } numberPerson={ '+998 (99) 134 55 13 - Тимур' }/>
            <ContactPerson namePerson={ 'Менеджер по мягкой мебели:' } numberPerson={ '+998 (99) 808-95-05 - Дейхан' }/>
            <ContactPerson namePerson={ 'Менеджер по работе с ключевыми клиентами по корпусной мебели:' } numberPerson={ '+998 99 800 06 88 - Улугбек' }/>
            <ContactPerson namePerson={ 'По вопросам гарантии и возврата:' } numberPerson={ '998 (99) 808-95-05 - Дейхан' }/>
            <ContactPerson namePerson={ 'Электронны адрес' } numberPerson={ 'vabbo@gmail.com' }/>
        </div>
    </div>
    )
}