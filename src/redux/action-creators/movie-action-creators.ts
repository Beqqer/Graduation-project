import { put, takeEvery } from "redux-saga/effects";
import {
	IMovie,
	IMovieActors,
	IMovieInfo,
	IMovieResponse,
	IMovieTrailer,
} from "../../Types";
import {
	LOAD_MOVIE,
	LOAD_SELECTED_MOVIE,
	MOVIE_ACTORS,
	MOVIE_TRAILER,
	SET_MOVIE,
	SET_MOVIE_ACTORS,
	SET_MOVIE_TRAILER,
	SET_SELECTED_MOVIE,
	SET_TOTAL,
	SET_CURRENT_PAGE,
} from "../action-types/movie-action-types";

const setMovie = (movies: IMovieInfo[]) => ({
	type: SET_MOVIE,
	movies,
});

const setTotal = (total: number) => ({
	type: SET_TOTAL,
	total,
});

const loadMovie = (searchInfo: any) => ({
	type: LOAD_MOVIE,
	searchInfo,
});

const setSelectedMovie = (movie: IMovie) =>
	({
		type: SET_SELECTED_MOVIE,
		selectedMovie: {
			movie,
		},
	} as const);

const loadSelectedMovie = (id: string) => ({
	type: LOAD_SELECTED_MOVIE,
	id,
});

const loadMovieTrailer = (key: string) => ({
	type: MOVIE_TRAILER,
	key,
});

const setMovieTrailer = (movieTrailer: IMovieTrailer[]) =>
	({
		type: SET_MOVIE_TRAILER,
		movieTrailer,
	} );

const setMovieActors = (cast: IMovieActors[]) =>
	({
		type: SET_MOVIE_ACTORS,
		cast,
	} );

const movieActors = (key: string) => ({
	type: MOVIE_ACTORS, 
	key,
});

const setCurrentPage = (currentPage: number) => ({
	type: SET_CURRENT_PAGE,
	currentPage,
})

function* fetchMovies(action: any) {
	const options = {
		method: "GET",
		headers: {
			accept: "application/json",
			Authorization:
				"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYmVjMDBkMGI3ZWNjY2FhM2I2YWM5NzM0YjdiMzc5MCIsInN1YiI6IjY0NzYxOWRiOTYzODY0MDBkZTcxZGI4ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1Gl_ws7EoJ8yvRPtO1M8WbHteMk3roCZubj_G8_bE_w",
		},
	};

	const { currentPage, genre, } = action.searchInfo;
	// const genres = genre ? `&with_genres=${genre}` : ''
    const pages = currentPage ? `&page=${currentPage}` : ''

	const resp: Response = yield fetch(
		`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&${pages}&sort_by=popularity.desc`,
		options
	);
	const data: IMovieResponse = yield resp.json();
	yield put(setMovie(data.results));
	yield put(setTotal(data.count));
}

function* fetchSelectedMovies(action: any) {
	const { id } = action;
	const resp: Response = yield fetch(
		`https://api.themoviedb.org/3/movie/${id}?api_key=ebec00d0b7ecccaa3b6ac9734b7b3790`
	);
	const data: IMovie = yield resp.json();
	yield put(setSelectedMovie(data));
}

function* fetchMovieTrailer(action: any) {
	const options = {
		method: "GET",
		headers: {
			accept: "application/json",
			Authorization:
				"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5OTlhNmIyMTY1M2JkZTk0ZGM2MjEwZWM4ZGRiNDJkNiIsInN1YiI6IjY0NzYyMzA5Njc0M2ZhMDExOTdhY2FlZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5uTHZgF-I0xSBzNBBttRoeDjfC0ohqRqzP_ddY0FjRc",
		},
	};

	const { key } = action;
	const resp: Response = yield fetch(
		`https://api.themoviedb.org/3/movie/${key}/videos?language=en-US`,
		options
	);
	const data: IMovieResponse = yield resp.json();
	yield put(setMovieTrailer(data.results));
}

function* fetchMovieActors(action: any) {
    
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYmVjMDBkMGI3ZWNjY2FhM2I2YWM5NzM0YjdiMzc5MCIsInN1YiI6IjY0NzYxOWRiOTYzODY0MDBkZTcxZGI4ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1Gl_ws7EoJ8yvRPtO1M8WbHteMk3roCZubj_G8_bE_w'
        }
      };
    const { key } = action;
    const resp: Response = yield fetch(`https://api.themoviedb.org/3/movie/${key}/credits?language=en-US`, options)
    const data: IMovieResponse = yield resp.json();
    yield put(setMovieActors(data.cast));

}

function* watcherMovie() {
	yield takeEvery(LOAD_MOVIE, fetchMovies);
	yield takeEvery(LOAD_SELECTED_MOVIE, fetchSelectedMovies);
	yield takeEvery(MOVIE_TRAILER, fetchMovieTrailer);
	yield takeEvery(MOVIE_ACTORS, fetchMovieActors);
}

export {
	watcherMovie,
	loadMovie,
	setMovie,
	setTotal,
	setSelectedMovie,
	loadSelectedMovie,
	loadMovieTrailer,
	movieActors,
	setMovieActors,
	setCurrentPage,
};
