import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './header.scss'
import IconAuth from '../IconAuth/IconAuth'



const Header = () => {

    return (
        <div className='header'>
            <div className="header__wrp container">
                <div className="logo">
                    <h1 className='logo__title'><a href="#"> Kino<span className='logo__subtitle'>Lux</span></a></h1>
                </div>
                <div className="header__nav">
                    <NavLink to={'/'}><h2>Home</h2> </NavLink>
                <p className='header__auth'><Link to={'sign-in'}><IconAuth/></Link></p>
                    <NavLink to={'/movie'}><h2>Movies</h2></NavLink>
                </div>
                    <NavLink to={'/tv'}><h2>TV series</h2></NavLink>
            </div>
        </div>
    )
}

export default Header