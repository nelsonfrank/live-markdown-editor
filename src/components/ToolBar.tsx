import {
	FaBold,
	FaImage,
	FaItalic,
	FaLink,
	FaListOl,
	FaListUl,
	FaStrikethrough,
} from "react-icons/fa";

const ToolBar = () => {
	const handleToolBtn = (btnType: string) => {
		if (btnType === "bold") {
			return "# ";
		}

		if (btnType === "italic") {
			return "";
		}
	};
	return (
		<div className='flex items-center gap-3 mb-4 ml-2'>
			<button onClick={() => handleToolBtn("bold")}>
				<a data-tooltip-id='my-tooltip' data-tooltip-content='Bold'>
					<FaBold />
				</a>
			</button>
			<button onClick={() => handleToolBtn("italic")}>
				<a data-tooltip-id='my-tooltip' data-tooltip-content='Italic'>
					<FaItalic />
				</a>
			</button>
			<button onClick={() => handleToolBtn("strike-through")}>
				<a data-tooltip-id='my-tooltip' data-tooltip-content='StrikeThrough'>
					<FaStrikethrough />
				</a>
			</button>

			<VerticalDivider />

			<button onClick={() => handleToolBtn("link")}>
				<a data-tooltip-id='my-tooltip' data-tooltip-content='Italic'>
					<FaLink />
				</a>
			</button>
			<button onClick={() => handleToolBtn("image")}>
				<a data-tooltip-id='my-tooltip' data-tooltip-content='StrikeThrough'>
					<FaImage />
				</a>
			</button>

			<VerticalDivider />

			<button onClick={() => handleToolBtn("unordered-list")}>
				<a data-tooltip-id='my-tooltip' data-tooltip-content='Italic'>
					<FaListUl />
				</a>
			</button>
			<button onClick={() => handleToolBtn("ordered-list")}>
				<a data-tooltip-id='my-tooltip' data-tooltip-content='StrikeThrough'>
					<FaListOl />
				</a>
			</button>
		</div>
	);
};

const VerticalDivider = () => <div className='h-4 w-px mx-1 bg-gray-300'></div>;
export default ToolBar;
