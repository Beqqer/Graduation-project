import './movieCards.scss'
import { IMovie } from '../../../Types'
import { NavLink } from 'react-router-dom'


const MovieCards = ({ movieCard }: IMovie) => {

    const { title, poster_path, overview, release_date, vote_average} = movieCard
    
    return (
        <div className="main">
            <div className='main__info'>
            <NavLink to={`/movie/${movieCard.id}`}>
                <h1 className='main__title'>
                    {title}
                    </h1>
                    </NavLink>
            </div>
            <div className='main__card'>
            <NavLink to={`/movie/${movieCard.id}`}>

            <img
						className="main__image"
						src={`http://image.tmdb.org/t/p/w300${poster_path}`}
						alt="logo"
                />
            </NavLink>
                
                <ul className='main__list'>
                    <li><h3 className='main__info-title'>Description:</h3><span className='main__info-subtitle'>{overview}</span></li>
                    <li><h3 className='main__info-title'>Rating:</h3><span className='main__info-subtitle'>{vote_average} / 10</span></li>
                    <li><h3 className='main__info-title'>Release:</h3><span className='main__info-subtitle' >{release_date}</span></li>
                </ul>
            </div>
        </div>
    )
}

export default MovieCards
