import React, { useState, useRef } from 'react';

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

export const ModalVideo = props => {

    const videoRef = useRef(null);

    //Importante si esta propiedad si cerramos el trailer, se seguira reproduciendo en segundo plano
    const closeModal = () => {
        videoRef.current.parentNode.classList.remove('active');
        if (props.onClose) props.onClose();
    }

    //Con este return conseguimos que apareza el trailer
    return (
        <div ref={videoRef} className="modal_video">
            {props.children}
            <div className="modal_video_close" onClick={closeModal}>
                <i className="bx bx-x"></i>
            </div>
        </div>
    )
}
export default Modal;
