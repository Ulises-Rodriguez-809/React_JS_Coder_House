import React from 'react'
import { Link } from 'react-router-dom'


export const LiDropdown = ({ categoria, url }) => {
    return <Link to={url} className="dropdown-item">{categoria}</Link>
}
