import React, { useEffect } from 'react'
import './selectedMovie.scss'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { IStoreState } from '../../../Types';
import { loadSelectedMovie } from '../../../redux/action-creators/movie-action-creators';
import TrailerMovie from '../TrailerMovie/TrailerMovie';
import ActorsMovie from '../MovieCards/ActorsMovie/ActorsMovie';


const SelectedMovie = () => {

    const { movieId } = useParams<{ movieId: string }>()
    const setMovie = useSelector((state: IStoreState) => state.movie.selectedMovie)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(loadSelectedMovie(movieId!))
    },[])

    return (
        <div className='container'>
            <div className='content'>
                <div className='content__image'>
                    <img className='content__image-item'
                        src={`http://image.tmdb.org/t/p/w400${setMovie.poster_path}`}
                        alt="" />
                <p className='content__info-right'>{setMovie.vote_average?.toFixed(1)}</p>
                </div>
                <div className='content__info'>
                <p className='content__title'>{setMovie.title}</p>
                    <ul className='content__list'>
                        <TrailerMovie/>
                        <li className='content__description'><p className='content__info-text'>{setMovie.overview }</p></li>
                        <li className='content__release'><p className='content__info-text'>{setMovie.release_date}</p></li>
                    </ul>
                    <h1 className="actors__title">The cast of actors:</h1>
                </div>

            </div>
            <ActorsMovie />
        </div>
    )
}


export default SelectedMovie