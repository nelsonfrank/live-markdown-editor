// dependencies
import { useDispatch, useSelector } from "react-redux";
import { MdOutlineDarkMode, MdOutlineWbSunny } from "react-icons/md";

// store
import { RootState } from "src/store";
import { toggleDarkMode } from "src/store/features/theme";

const Header = () => {
	const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);

	const dispatch = useDispatch();

	const handleToggleTheme = () => {
		dispatch(toggleDarkMode());
	};

	return (
		<nav className='grid grid-cols-2 place-content-between items-center w-full px-8'>
			<h4>Markdown Editor</h4>
			<button
				onClick={handleToggleTheme}
				className='self-left justify-self-end'
			>
				{isDarkMode ? (
					<MdOutlineDarkMode className='text-2xl' />
				) : (
					<MdOutlineWbSunny className='text-2xl' />
				)}
			</button>
		</nav>
	);
};

export default Header;
