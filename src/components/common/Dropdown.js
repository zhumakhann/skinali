import React from 'react'

export default function Dropdown() {
    return (
        <div className={ props.active ? 'dropdown active' : 'dropdown' }>
            <p className="dropdown__content">
                { props.children }
            </p>
            <button className="dropdown__close" onClick={props.close}>
                Ок
            </button>
        </div>
    )
}
