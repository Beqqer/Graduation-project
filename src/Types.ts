import { ReactNode } from "react";


export interface IButton {
    className: string,
    content: string,
    callback: Function,
    isActive?: boolean;
    style?: string;
}

export interface IModal {
    children: ReactNode;
    active: boolean,
    id: string,
}

export interface IModalContent {
    onClose: Function;
    children: ReactNode;
}

export interface IInput {
    type: string;
    id: string;
    name: string;
    value?: string;
    label?: string;
    placeholder?: string;
    isEnable?: boolean;
    isEmpty: boolean;
    isValid: boolean;
    isRequired?: boolean;
    error?: string;
    callback: Function;
}
  

export interface IUserData {
    username: string,
    password: string,
    email: string,
    id?: number,
}

export interface IAuthorizeData {
    uid: any,
    token: any,
}

export interface ITokens {
    access: string,
    refresh: string,
}

export interface IAuthorized {
    status: boolean,
    username: string,
}
export interface ISignIn {
	email: string;
	password: string;
}

export interface IUserState {
    user: IUserData,
}

export interface IMovieInfo {
    id: string,
    poster_path: string
    overview: string,
    title: string,
    release_date: string,
    vote_average:  number,
    key: string,
    actors_id: string,
}

export interface IMovie {
 movieCard: IMovieInfo
}

 

export interface IMovieResponse {
    count: number,
    next : number,
    results: IMovieInfo[],
    cast: IMovieActors[]
}

export interface ISearchInfo {
    limit: number,
    ordering?: string,
    currentPage?: number,
    search?: string,
}
export interface IStoreState {
	user: IUserState,
    movie: IMoviesState,
}
export interface IMoviesState {
	movies: IMovieInfo[],
	limit: number,
    total: number,
    selectedMovie: IMovieInfo,
    movieTrailer: IMovieTrailer[],
    cast: IMovieActors[],
    currentPage: number,
}

export interface IMovieTrailer {
    name?: string,
    key: string,
}

export interface IMovieActors {
    original_name: string,
    profile_path: string,
    key: string,
    // cast:any[]
}