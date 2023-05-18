import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

// store
import { inputChange } from "src/store/features/editor";
import { AppDispatch } from "src/store";

// Components
import ToolBar from "./ToolBar";

const EditorInput = () => {
	const [textInput, setTextInput] = useState("");
	const dispatch = useDispatch<AppDispatch>();

	const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
		const inputValue = event.target.value;
		setTextInput(inputValue);

		dispatch(inputChange(inputValue));
	};

	return (
		<>
			<div className='border-2 border-solid p-4 min-w-11/12 min-h-300px mx-auto md:min-w-1/2 md:min-h-700px'>
				<ToolBar />
				<textarea
					className='w-full h-270px md:h-620px border-2 focus:border-2 focus:border-gray-500 outline-none'
					value={textInput}
					onChange={(e) => handleInputChange(e)}
				/>
			</div>
		</>
	);
};

export default EditorInput;
