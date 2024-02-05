import ContactContainer from '../Contact/ContactContainer'
import Footer from '../Footer/Footer'
import './Rate.scss'
import RateSendButton from './RateSendButton'
import StarRating from './StarRating/StarRating'

export default function Rate() {
    return (
        <section>
            <div className="rate-container">
                <div className="rate-row">
                    <h1 className='rate-title'>Оставить отзыв</h1>
                    <div className="contact__text-area-container">
                        <textarea 
                        placeholder='Что вы думаете о нас?' 
                        className='contact__text-area'>
                        </textarea>
                    </div>
                    
                    <div style={{marginTop: '15px'}}>
                    <StarRating />
                    </div>
                    <RateSendButton>Отправить</RateSendButton>
                </div>

                <div className="rate_contact-container-block">
                    <ContactContainer />
                </div> 
            </div>

            <Footer />
        </section>
    )
}