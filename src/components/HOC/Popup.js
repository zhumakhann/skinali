import React from 'react'
import './style.scss'
export default function Popup(props) {
    return (
        <>
            <div className={props.active? 'popup-overflow active' : 'popup-overflow'} onClick={props.close}/>
            <div className={props.active? 'popup active' : 'popup'}>
                <button className="popup__close" onClick={props.close}>
                    X
                </button>
                <div className="popup__content">
                    { props.children }
                </div>
            </div>
        </>
    )
}
