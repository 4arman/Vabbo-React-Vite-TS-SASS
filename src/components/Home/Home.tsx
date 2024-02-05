import './Home.scss'
import HomeImageSlider from "./ImageSlider/HomeImageSlider";
import SecondBlock from "./SecondBlock/SecondBlock";
import Footer from "../Footer/Footer";

export default function Home() {
    return (
        <section>
            <div className="home-image-slider-container">
                    <HomeImageSlider />
            </div>

            <div className="home-second-block-container">
            <SecondBlock imgClass={ '1' }><div className="second-block-content">Скидки</div></SecondBlock>
            <SecondBlock imgClass={ '2' }><div className="second-block-content">Новинки</div></SecondBlock>
            <SecondBlock imgClass={ '3' }><div className="second-block-content">Успей Купить</div></SecondBlock>
            </div>

            <Footer />
        </section>
    )
}