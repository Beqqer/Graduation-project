import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IMovieInfo, IStoreState } from '../../Types'
import { loadMovie } from '../../redux/action-creators/movie-action-creators'
import { Swiper, SwiperSlide } from "swiper/react";
import {  Autoplay    } from "swiper";
import './slider.scss'
import { useNavigate } from 'react-router-dom';



const Slider = () => {
    const data = useSelector((state: IStoreState) => state.movie.movies)
    const limit = useSelector((state: IStoreState) => state.movie.limit)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(loadMovie({limit}))
    }, [navigate])

    return (
        <div className='slider-wrp'>
            <Swiper
                modules={[Autoplay]}
                autoplay={{ delay: 3000 }}
                slidesPerView={4}
                spaceBetween={20}
                pagination={{ clickable: true }}
                grabCursor={true}
            >
                {data.map((e: IMovieInfo) => <SwiperSlide><img className='slide'
                    src={`https://image.tmdb.org/t/p/w400${e.poster_path}`}
                    alt="image"
                    onClick={() => navigate(`movie/${e.id}`)}
                />
                </SwiperSlide>)}

                
            </Swiper>
        </div>
    )
}

export default Slider