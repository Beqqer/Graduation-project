import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { IStoreState } from "../../../Types"
import { useEffect } from "react"
import { loadMovieTrailer } from "../../../redux/action-creators/movie-action-creators"
import './trailerMovie.scss'





const TrailerMovie = () => {
    const { movieId } = useParams<{ movieId: string }>()
    const trailer = useSelector(
        (state: IStoreState) => state.movie.movieTrailer
    )
    const src = trailer?.find((el) => el.name === 'Official Trailer')?.key || trailer.at(0)?.key

    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(loadMovieTrailer(movieId!))
    }, [])

    return (
        <div>
            <iframe
                    className="movie-trailer"
                    width="750"
					height="400"
					src={`https://www.youtube.com/embed/${src}`}
					title="YouTube video player"
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowFullScreen>

            </iframe>
        </div>
    )
}

export default TrailerMovie
