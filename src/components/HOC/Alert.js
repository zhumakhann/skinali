import React from 'react'

export default function Alert(props) {
    return (
        <div className={ props.active ? 'alert active ' + props.type : 'alert'} role="alert">
            { props.children }
        </div>
    )
}
