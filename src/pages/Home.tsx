import React, { useEffect } from "react";
import Slider from "../components/Slider/Slider";
import { useSelector, useDispatch } from "react-redux";
import { IStoreState } from "../Types";
import MovieCards from "../components/Cards/MovieCards/MovieCards";
import { loadMovie } from "../redux/action-creators/movie-action-creators";



const Home = () => {
    const data = useSelector((state: IStoreState) =>  state.movie.movies)
    const limit = useSelector((state: IStoreState) => state.movie.limit)
    const dispatch = useDispatch();
    useEffect(() => {

    dispatch(loadMovie({limit}))
    }, [limit]);

    return (
        <div>
             <Slider /> 
            {/* {data.map((el) => { 
                return <MovieCards movieCard={el} />
            })} */}
        </div>
    )
}

export default Home