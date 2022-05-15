import React, { useState, useEffect, useRef } from 'react';

import './modal.scss';

const Modal = props => {

    //Decimos que el estado del trailer , es inactivo
    const [active] = useState(false);

    return (
        <div id={props.id} className={`modal ${active ? 'active' : ''}`}>
            {props.children}
        </div>
    );
}

export const ModalContent = props => {


    const contentRef = useRef(null);

    //Importante si esta propiedad si cerramos el trailer, se seguira reproduciendo en segundo plano
    const closeModal = () => {
        contentRef.current.parentNode.classList.remove('active');
        if (props.onClose) props.onClose();
    }

    //Con este return conseguimos que apareza el trailer
    return (
        <div ref={contentRef} className="modal__content">
            {props.children}
            <div className="modal__content__close" onClick={closeModal}>
                <i className="bx bx-x"></i>
            </div>
        </div>
    )
}
export default Modal;
