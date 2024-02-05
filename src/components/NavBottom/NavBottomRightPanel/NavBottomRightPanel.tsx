import { useState } from 'react';
import { BiX } from 'react-icons/bi';
import ModalLogin from './ModalLogin/ModalLogin';
import Logo from '../Logo/Logo';
import './NavBottomRightPanel.scss';
import Login from './ModalLogin/Login';

export default function NavBottomRightPanel() {
  const [modal, setModal] = useState(false);

  return (
    <div className='nav-bottom-right-panel__block'>
      <i className='bx bx-search nav-bottom-panel_icon'></i>
      <i className='bx bx-heart nav-bottom-panel_icon'></i>
      <i className='bx bx-location-plus nav-bottom-panel_icon'></i>
      <i className='bx bx-cart nav-bottom-panel_icon'></i>
      <i className='bx bx-user-circle nav-bottom-panel_icon' onClick={() => setModal(true)}></i>

      <ModalLogin open={modal}>
        <div style={{ marginTop: '20px' }}>
          <Logo />
        </div>
        <button
          className='login-modal__close-btn'
          type='button'
          onClick={() => setModal(false)}
        >
          <BiX color='#ffffff'></BiX>
        </button>

        <Login />
      </ModalLogin>
    </div>
  );
}
