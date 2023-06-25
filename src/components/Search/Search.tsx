import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IStoreState } from "../../Types";
import { setSearch, setSearchActive } from "../../redux/action-creators/movie-action-creators";
import './search.scss'
import IconSearch from "../Icons/IconSearch";

const Search = () => {
	const dispatch = useDispatch();
	const search = useSelector((state: IStoreState) => state.movie.search)
	const [text, setText] = useState(search || "");

	const searchInputVisible = useSelector(
		(state: IStoreState) => state.movie.searchActive
	);

	return (
		<form className="search">
			{searchInputVisible &&
			<div
				className="search__input-item">
				<input
					className="search__input"
					type="text"
					placeholder="Search..."
					value={text}
					onChange={(e) => setText(e.target.value)}
					onKeyDown={(e) => {
						if (e.key === 'Enter') {
							dispatch(setSearch(text))
						}
					}}
				/>
			</div>
}
			<button
				className="search__show-button"
                title="Search posts"
				onClick={(e) => {
					e.preventDefault();
					dispatch(setSearchActive(true));
                    setText("");
                }}>
                 <IconSearch />
			</button>
		</form>
	);
};
export default Search;