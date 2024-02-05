import NavButton from "./NavButton/NavButton";
import './Nav.scss'
import NavRightPanel from "./NavRightPanel/NavRightPanel";

// interface NavButtonProps {
//     onChange: string,
//     active: string
// }

export default function Nav({ onChange, active }) {
    return (
        <nav className="nav-top">
            <NavButton 
            isActive={ active === 'home' } 
            onClick={ () => onChange('home') }
            >
                Главная
            </NavButton>

            <NavButton 
            isActive={ active === 'about' } 
            onClick={ () => onChange('about') }
            >
                О нас
            </NavButton>

            <NavButton 
            isActive={ active === 'catalog' } 
            onClick={ () => onChange('catalog') }
            >
                Товары
            </NavButton>

            <NavButton 
            isActive={ active === 'contact' } 
            onClick={ () => onChange('contact') }
            >
                Контакты
            </NavButton>

            <NavButton 
            isActive={ active === 'rate' } 
            onClick={ () => onChange('rate') }
            >
                Оставить Отзыв
            </NavButton>

            <NavRightPanel />     
        </nav>
    )
}