import './NavPanelDropdown.scss'

export default function NavPanelDropDown({ menuClass, content1, content2, content3, content4, content5, content6, }) {
    return (
        <ul className={ "dropdown__menu " + menuClass }>
            <li className="menu__list-item">{ content1 }</li>
            <li className="menu__list-item">{ content2 }</li>
            <li className="menu__list-item">{ content3 }</li>
            <li className="menu__list-item">{ content4 }</li>
            <li className="menu__list-item">{ content5 }</li>
            <li className="menu__list-item">{ content6 }</li>
        </ul>
    )
}