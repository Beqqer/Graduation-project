import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { IStoreState } from "../Types";
import MovieCards from "../components/Cards/MovieCards/MovieCards";
import { loadMovie, setCurrentPage } from "../redux/action-creators/movie-action-creators";
import Button from "../components/Button/Button";

const Catalog = () => {
    const data = useSelector((state: IStoreState) =>  state.movie.movies)
    const limit = useSelector((state: IStoreState) => state.movie.limit)
    const currentPage = useSelector((state: IStoreState) => state.movie.currentPage)
    const total = useSelector((state: IStoreState) => state.movie.total)
    const pagesCount = Math.ceil(total / limit);
    
    const dispatch = useDispatch();
    useEffect(() => {

    dispatch(loadMovie({ limit, currentPage,total}))
    }, [limit, currentPage, total]);

    return (
        <>
                <div>
             {data.map((el) => { 
                return <MovieCards movieCard={el} />
             })}
        </div>
            <div className="pagination">
         <Button className={"button"} content={"Prev"} isActive={currentPage === 1} callback={() => { dispatch(setCurrentPage(currentPage - 1)) }} />
         <div className="pagination__current-page">
                 <h2>
                        
              {currentPage}
                </h2>
         </div>
         <Button className={"button"} content={"Next"} isActive={pagesCount === currentPage} callback={()=> {dispatch(setCurrentPage(currentPage + 1))}}/>
            </div>
         </>   
    )
    
}

export default Catalog