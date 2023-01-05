import React from 'react';
import ReactDOM from 'react-dom';
import '../../css/index.css';

function Modal({children}) {
    return ReactDOM.createPortal(
        <div className='modal-bg'>
            {children}
        </div>,
        document.getElementById('modal')
    );
}

export {Modal}
