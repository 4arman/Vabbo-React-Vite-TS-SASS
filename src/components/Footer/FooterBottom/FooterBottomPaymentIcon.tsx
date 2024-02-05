import './FooterBottomPaymentIcon.scss'

export default function FooterBottomPaymentIcon({ src }) {
    return (
            <button 
            type="button"
            className="footer-bottom-payment-icon-btn">
            <img 
            className={ 'footer-bottom-payment-icon' } 
            src={ src } 
            alt="payment-img"></img>
            </button>
    )
}