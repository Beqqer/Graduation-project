import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import './header.scss'
import IconAuth from '../Icons/IconAuth'
import { IStoreState } from '../../Types'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../Button/Button'
import { logOut } from '../../redux/action-creators/user-action-creators'
import IconSearch from '../Icons/IconSearch'
import Search from '../Search/Search'



const Header = () => {
    const authorizedUserName = useSelector((state: IStoreState) => state.user.authorizedUser.username);
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleLogOut = () => {
		 
        dispatch(logOut());
		localStorage.removeItem('access')
		localStorage.removeItem('refresh')
		navigate('/')
	};
    return (
        <div className='header'>
            <div className="header__wrp container">
                <div className="logo">
                    <h1 className='logo__title'>Kino<span className='logo__subtitle'>Lux</span></h1>
                </div>
                <div className="header__nav">
                    <NavLink to={'/'}><h2>Home</h2> </NavLink>
                    <Search/>
                    <NavLink to={'/movie'}><h2>Movies</h2></NavLink>
                </div>
                    <p className='header__auth'><Link to={'sign-in'}> { authorizedUserName !== ''  ? <Button className={'log-out-btn'} content={'Log out'} callback={handleLogOut}/> : <IconAuth />  }</Link></p>
            </div>
        </div>
    )
}

export default Header