import {  IMovieActors, IMovieInfo, IMovieTrailer } from "../../Types";
import { SET_CURRENT_PAGE, SET_MOVIE, SET_MOVIE_ACTORS, SET_MOVIE_TRAILER, SET_SELECTED_MOVIE, SET_TOTAL } from "../action-types/movie-action-types";

const initialState = {
    movies: [] as IMovieInfo[],
    limit: 15,
    selectedMovie: {},
    movieTrailer: [] as IMovieTrailer[],
    cast: [] as IMovieActors[],
    currentPage: 1,
}


const movieReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_MOVIE: {
            const { movies } = action
            return {
                ...state,
                movies
            }
        }
        case SET_TOTAL: {
            const { total } = action
            return {
                ...state,
                total: total
            }
        }
            
        case SET_SELECTED_MOVIE: {
            const { movie } = action.selectedMovie
            return {
                ...state,
                selectedMovie: movie
            }
        }
            
        case SET_MOVIE_TRAILER: {
            const { movieTrailer } = action
            return {
                ...state,
                movieTrailer
            }
        }
            
        case SET_MOVIE_ACTORS: {
            
            const { cast } = action

            return {
                ...state,
                cast
            }
        }    
        case SET_CURRENT_PAGE: {
			const { currentPage } = action;
			return {
				...state,
				currentPage: currentPage,
			};
		}
        default: {
            return state
        }
    }
}


export { movieReducer }