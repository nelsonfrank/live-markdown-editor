import { FaBold, FaItalic, FaStrikethrough } from "react-icons/fa";

const ToolBar = () => {
	const handleToolBtn = (btnType: string) => {
		if (btnType === "bold") {
			return "# ";
        }
        
        if (btnType === "italic") {
            return ""
        }
	};
	return (
		<div className='flex items-center gap-3 mb-2 ml-2'>
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
		</div>
	);
};

export default ToolBar;
