import { useDispatch, useSelector } from "react-redux";
import { IStoreState } from "../../../../Types";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import {
	movieActors,
	setMovieActors,
} from "../../../../redux/action-creators/movie-action-creators";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import './actorsMovie.scss'

const ActorsMovie = () => {
	const { movieId } = useParams<{ movieId: string }>();
	const actors = useSelector((state: IStoreState) => state.movie.cast);
	// console.log(actors);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(movieActors(movieId!));
	}, []);
	return (
		<div className='actors'>
		<Swiper
				modules={[Autoplay]}
			autoplay={{ delay: 3000 }}
				slidesPerView={4}
				// spaceBetween={5}
				pagination={{clickable: true}}
			>		
				{actors.map((el) => <SwiperSlide>
					<h3 className="actors__name">{el.original_name}</h3>
				<img className='actors__slide'
				src={`https://image.tmdb.org/t/p/w200${el.profile_path}`}
				alt="image"
			/>
			</SwiperSlide>)}

			
			</Swiper>
		</div>
	);
};
export default ActorsMovie;
