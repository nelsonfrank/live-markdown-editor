import {
	FaBold,
	FaImage,
	FaItalic,
	FaLink,
	FaListOl,
	FaListUl,
	FaStrikethrough,
} from "react-icons/fa";

export interface ToolBarPropType {
	onInputFormating: (value: string) => void;
	editorInput: string;
}
const ToolBar = ({ onInputFormating, editorInput }: ToolBarPropType) => {
	const handleToolBtn = (btnType: string) => {
		if (btnType === "bold") {
			const formattedInput = `**${editorInput}**`;
			return onInputFormating(formattedInput);
		}

		if (btnType === "italic") {
			const isInputBold = editorInput.split("**").length > 1;

			console.log(isInputBold);
			if (isInputBold)
				return onInputFormating(`*${editorInput.split("**")[0]}*`);
			return onInputFormating(`*${editorInput}*`);
		}

		if (btnType === "strike-through") {
			return onInputFormating(`~~${editorInput}~~`);
		}

		if (btnType === "link") {
			return onInputFormating(`${editorInput} \r\n [](URL Here)`);
		}

		if (btnType === "image") {
			return onInputFormating(
				`${editorInput} \r\n ![image](https://example.com/your-image.png)`
			);
		}

		if (btnType === "unordered-list") {
			return onInputFormating(`${editorInput} \r\n - `);
		}
		if (btnType === "ordered-list") {
			return onInputFormating(`${editorInput} \r\n 1. `);
		}
		if (btnType === "heading1") {
			return onInputFormating(`${editorInput} \r\n # `);
		}
		if (btnType === "heading2") {
			return onInputFormating(`${editorInput} \r\n ## `);
		}
		if (btnType === "heading3") {
			return onInputFormating(`${editorInput} \r\n ### `);
		}
		if (btnType === "heading4") {
			return onInputFormating(`${editorInput} \r\n #### `);
		}
	};
	return (
		<div className='flex items-center gap-3 mb-4 ml-2'>
			<button onClick={() => handleToolBtn("bold")}>
				<p
					className='inline-block mb-0'
					data-tooltip-id='my-tooltip'
					data-tooltip-content='Bold'
				>
					<FaBold />
				</p>
			</button>
			<button onClick={() => handleToolBtn("italic")}>
				<p
					className='inline-block mb-0'
					data-tooltip-id='my-tooltip'
					data-tooltip-content='Italic'
				>
					<FaItalic />
				</p>
			</button>
			<button onClick={() => handleToolBtn("strike-through")}>
				<p
					className='inline-block mb-0'
					data-tooltip-id='my-tooltip'
					data-tooltip-content='StrikeThrough'
				>
					<FaStrikethrough />
				</p>
			</button>

			<VerticalDivider />

			<button onClick={() => handleToolBtn("link")}>
				<p
					className='inline-block mb-0'
					data-tooltip-id='my-tooltip'
					data-tooltip-content='Italic'
				>
					<FaLink />
				</p>
			</button>
			<button onClick={() => handleToolBtn("image")}>
				<p
					className='inline-block mb-0'
					data-tooltip-id='my-tooltip'
					data-tooltip-content='StrikeThrough'
				>
					<FaImage />
				</p>
			</button>

			<VerticalDivider />

			<button onClick={() => handleToolBtn("unordered-list")}>
				<p
					className='inline-block mb-0'
					data-tooltip-id='my-tooltip'
					data-tooltip-content='Italic'
				>
					<FaListUl />
				</p>
			</button>
			<button onClick={() => handleToolBtn("ordered-list")}>
				<p
					className='inline-block mb-0'
					data-tooltip-id='my-tooltip'
					data-tooltip-content='StrikeThrough'
				>
					<FaListOl />
				</p>
			</button>
			<VerticalDivider />
			<button onClick={() => handleToolBtn("heading1")}>
				<p
					className='inline-block mb-0'
					data-tooltip-id='my-tooltip'
					data-tooltip-content='StrikeThrough'
				>
					H<span className='text-sm'>1</span>
				</p>
			</button>
			<button onClick={() => handleToolBtn("heading2")}>
				<p
					className='inline-block mb-0'
					data-tooltip-id='my-tooltip'
					data-tooltip-content='StrikeThrough'
				>
					H<span className='text-sm'>2</span>
				</p>
			</button>
			<button onClick={() => handleToolBtn("heading3")}>
				<p
					className='inline-block mb-0'
					data-tooltip-id='my-tooltip'
					data-tooltip-content='StrikeThrough'
				>
					H<span className='text-sm'>3</span>
				</p>
			</button>
			<button onClick={() => handleToolBtn("heading4")}>
				<p
					className='inline-block mb-0'
					data-tooltip-id='my-tooltip'
					data-tooltip-content='StrikeThrough'
				>
					H<span className='text-sm'>4</span>
				</p>
			</button>
		</div>
	);
};

const VerticalDivider = () => <div className='h-4 w-px mx-1 bg-gray-300'></div>;
export default ToolBar;
