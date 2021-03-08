import React from 'react'

export default function Alert() {
    return (
        <div class={ props.active ? 'alert active' : 'alert' } role="alert">
            { props.children }
        </div>
    )
}
