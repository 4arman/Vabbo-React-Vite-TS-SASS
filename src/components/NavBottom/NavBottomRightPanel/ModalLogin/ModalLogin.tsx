import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import './ModalLogin.scss'

export default function ModalLogin({ children, open }) {

    const dialog = useRef()

    useEffect(() => open ? dialog.current.showModal() : dialog.current.close(), [open])

    return createPortal(
        <dialog
        ref={ dialog }
        className="modal-login"
        >
            { children }
        </dialog>,
        document.querySelector('.modal-login')
    )
}