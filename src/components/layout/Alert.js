import React from 'react'

export const Alert = ( {alert} ) => {
    console.log(alert)
    return (
        alert !== null && (
        
            <div className={`alert alert-${alert.type}`}>
                <i className="fas fa-info-circle"></i> {alert.message}
            </div>
        )
    )
}

export default Alert
