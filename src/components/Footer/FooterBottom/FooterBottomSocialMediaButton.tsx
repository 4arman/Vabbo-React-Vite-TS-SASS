import './FooterBottomSocialMediaButton.scss'

export default function FooterBottomSocialMediaButton({ url, icon }) {
    return (
        <a 
        target="_blank" 
        href={ url }>
            <button className="footer-bottom-sm-btn" type='button'>
            <i className={ icon + ' footer-bottom-sm-icon'}></i>
            </button>
        </a>
    )
}