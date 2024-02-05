import Footer from '../Footer/Footer'
import './About.scss'

export default function About() {
    return (
        <section>
            <div className="about-container">
                <div className='about-row'>
                    <h1 className="about-title">О нас</h1>
                    <div className="about-content">Vabbo работает с 2000 года</div>
                    <div className="about-content">Наш девиз: Всегда рядом! Мы всегда рядом с вами благодаря нашей продукции: в вашем офисе, в ресторанах, кафе, у вас дома, в специальных учебных заведениях, поликлиниках, социальных и общественных зданиях.</div>
                    <div className="about-content">Миссия: Вызывать интерес к красоте и комфорту, вдохновлять, внедрять необходимые инновации и давать людям возможность выбора.</div>
                    <div className="about-content">Наше видение будущего: Предлагая комплексное решение для доступного дизайна интерьера, в котором нуждаются люди.</div>
                    <div className="about-content">Наши ценности честность. Проведение деловых мероприятий, направленных на наш народ и нашу страну. Подотчетность. Лидерство. Свобода. Командный дух и синергия.</div>
                </div>
            </div>

            <Footer />
        </section>
    )
}