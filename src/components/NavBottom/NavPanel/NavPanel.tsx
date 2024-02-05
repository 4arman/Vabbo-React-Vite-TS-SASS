import './NavPanel.scss'
import './NavPanelDropdown.scss'
import NavPanelDropDown from './NavPanelDropdown'
import { useState } from 'react'
// import { ClickAwayListener } from '@mui/material'

export default function NavPanel() {

    const [isOpen1, setIsOpen1] = useState(false)
    const [isOpen2, setIsOpen2] = useState(false)

    // function clickAway(setIsOpen: any) {
    //     setIsOpen(false)
    // }

    return (
        <div className="panel-block">
            <div onClick={ () => setIsOpen1(!isOpen1) } className="panel">ДОМ</div>
            <div onClick={ () => setIsOpen2(!isOpen2) } className="panel">ОФИС</div>
            <div className="panel">РЕСТОРАН</div>
            <div className="panel">САД</div>
            <div className="panel">СПЕЦ</div>

            {/* <ClickAwayListener onClickAway={clickAway(setIsOpen1)}></ClickAwayListener> */}

            <NavPanelDropDown menuClass={ isOpen1 ? "active" : "" }
            content1={'ДИВАН'}
            content2={'КРЕСЛО'}
            content3={'СТОЛ'}
            content4={'СТУЛ'}
            content5={'ШКАФ'}
            content6={'ДВЕРЬ'}
            />

            <NavPanelDropDown menuClass={ isOpen2 ? "active" : "" }
            content1={'СТЕЛАЖИ'}
            content2={'ПИСЬМЕННЫЕ СТОЛЫ'}
            content3={'ЖУРНАЛЬНЫЕ СТОЛЫ'}
            content4={'МОБИЛЬНЫЕ ТУМБЫ'}
            content5={'ТУМБОЧКИ'}
            content6={'КАРКАСЫ ДЛЯ СТОЛОВ'}
            />
        </div>
    )
}