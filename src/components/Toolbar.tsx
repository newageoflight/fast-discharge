import React from 'react'

export const Toolbar: React.FC = ({ children }) => {
    return (
        <div className="toolbar-container">
            <ul>
                {children}
            </ul>
        </div>
    )
}
