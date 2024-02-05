import './ContactPerson.scss'

export default function ContactPerson({ namePerson, numberPerson }) {
    return (
        <>
            <p className='contact__name-person'>{ namePerson }</p>
            <a className='contact__link-person' href="https://telegram.org">
                <ul className='contact__number-person'>
                    <li>{ numberPerson }</li>
                </ul>
            </a>
        </>
    )
}