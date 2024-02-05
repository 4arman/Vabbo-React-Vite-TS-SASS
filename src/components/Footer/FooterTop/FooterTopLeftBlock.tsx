import './FooterTopLeftBlock.scss'
import Logo from "../../NavBottom/Logo/Logo"
import TelephoneBlock from "../../NavBottom/TelephoneBlock/TelephoneBlock"

export default function FooterTopLeftBlock() {
    return (
        <div>
        <Logo />
        <div className='telephone-position'><TelephoneBlock /></div>
            <div className='download-stores-container'>
                <a href="https://play.google.com" target='_blank'><img className='download-stores-icon' src="https://play.google.com/intl/ru_ru/badges/images/generic/ru_badge_web_generic.png" alt="Play Market" /></a><br />
                <a href="https://appstore.com" target='_blank'><img className='download-stores-icon app-store-icon' src="https://my-brand.com.ua/userfiles/image/appstore(1).png" alt="App Store" /></a>
            </div>
        </div>
    )
}