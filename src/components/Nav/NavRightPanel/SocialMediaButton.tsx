import NavButton from "../NavButton/NavButton"

export default function SocialMediaButton({ url, icon }) {
    return (
        <a 
        target="_blank" 
        href={ url }>
            <NavButton>
            <i className={ icon + ' nav-icon'}></i>
            </NavButton>
        </a>
    )
}