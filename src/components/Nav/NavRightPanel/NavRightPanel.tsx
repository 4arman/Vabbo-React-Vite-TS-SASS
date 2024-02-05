import './NavRightPanel.scss'
import SocialMediaButton from "./SocialMediaButton";

export default function NavRightPanel() {
    return (
        <>
        <div className="nav-right-panel__block">

        <SocialMediaButton 
        url={ 'https://instagram.com' } 
        icon={ 'bx bxl-instagram-alt' }
        />

        <SocialMediaButton 
        url={ 'https://youtube.com' }
        icon={ 'bx bxl-youtube' }
        />

        <SocialMediaButton 
        url={ 'https://telegram.org' }
        icon={ 'bx bxl-telegram' }
        />

        <SocialMediaButton 
        url={ 'https://facebook.com' }
        icon={ 'bx bxl-facebook' }
        />

        </div>
        </>
    )
}