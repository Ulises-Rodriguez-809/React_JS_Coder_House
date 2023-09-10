import React from 'react'

export const LiDropdown = ({ categoria, url }) => {
    return <li><a className="dropdown-item" href={url}>{categoria}</a></li>
}
