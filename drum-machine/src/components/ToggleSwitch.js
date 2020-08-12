import React from 'react'

function ToggleSwitch({ isOn }) {
    return (
        <div className="select">
            <div className="inner" style={{ float: isOn ? 'right' : 'left' }}></div>
        </div>
    )
}

export default ToggleSwitch
