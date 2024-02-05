import Logo from './Logo/Logo'
import './NavBottom.scss'
import NavBottomRightPanel from './NavBottomRightPanel/NavBottomRightPanel'
import NavPanel from './NavPanel/NavPanel'
import TelephoneBlock from './TelephoneBlock/TelephoneBlock'

export default function NavBottom() {
    return (
        <nav className='nav-bottom'>
            <Logo />
            <NavPanel />
            <TelephoneBlock />
            <NavBottomRightPanel />
        </nav>
    )
}