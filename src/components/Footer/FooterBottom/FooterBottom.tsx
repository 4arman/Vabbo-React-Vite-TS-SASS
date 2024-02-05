import './FooterBottom.scss'
import FooterBottomPaymentIcon from './FooterBottomPaymentIcon'
import FooterBottomSocialMediaButton from './FooterBottomSocialMediaButton'

export default function FooterBottom() {
    return (
        <footer className='footer-bottom'>
            <div className='footer-bottom-container'>
                <span>2000-2024 © vabbo.ru. Все права защищены.</span>
                
                <div className='footer-bottom-sm-container'>
                <FooterBottomSocialMediaButton 
                url={ 'https://instagram.com' }
                icon={ 'bx bxl-instagram-alt' }
                />

                <FooterBottomSocialMediaButton 
                url={ 'https://youtube.com' }
                icon={ 'bx bxl-youtube' }
                />

                <FooterBottomSocialMediaButton 
                url={ 'https://telegram.org' }
                icon={ 'bx bxl-telegram' }
                />
                </div>

                <div style={{display: 'flex', marginLeft: '70px'}}>
                    <FooterBottomPaymentIcon src={ 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Visa_Logo.png/640px-Visa_Logo.png' }/>
                    <FooterBottomPaymentIcon src={  'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/2560px-Mastercard-logo.svg.png' } />
                    <FooterBottomPaymentIcon src={  'https://cdn.paycom.uz/documentation_assets/payme_01.svg?target=_blank' } />
                    <FooterBottomPaymentIcon src={ 'https://logos-world.net/wp-content/uploads/2020/07/PayPal-Logo.png' } />
                </div>
            </div>
        </footer>
    )
}